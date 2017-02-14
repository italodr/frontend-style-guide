import $ from 'jquery'
import 'jquery-validation'

var jqValidate_options = {
    example: {
        ignore: '.ignore',
        rules: {
            'exampleInputName': 'required',
            'exampleInputLastname': 'required',
            'exampleInputEmail': {
                'required': true,
                'email': true
            },
            'exampleDropdown': 'required',
            'exampleCheckbox': 'required',
            'exampleRequired': {
                required: {
                    depends: function (element) {
                        return $('#exampleCheckboxRequire').is(':checked');
                    }
                }
            }
        },
        messages: {
            'exampleInputName': 'El campo exampleInputName es obligatorio',
            'exampleInputLastname': 'El campo exampleInputLastname es obligatorio',
            'exampleInputEmail': {
                'required': 'El campo exampleInputEmail es obligatorio',
                'email': 'Este no es un email válido'
            },
            'exampleDropdown': 'El campo exampleDropdown es obligatorio',
            'exampleRequired': 'El campo exampleRequired es obligatorio si seleccionas la opción de abajo',
            'exampleCheckbox': 'El campo exampleCheckbox es obligatorio'
        }
    }
};

var requiredClass = 'is-required',
    requiredMessage = '.js-requiredMessage';

var jqValidate_defaults = {
    errorClass: 'is-error',
    validClass: 'is-success',
    errorElement: 'div',
    focusInvalid: false,
    highlight: function (element, errorClass, validClass) {
        if (element.type === 'radio' || element.type === 'checkbox' || element.tagName.toLowerCase() === 'select') {
            this.findByName(element.name).addClass(errorClass).removeClass(validClass);
            $(element).parent().addClass(errorClass).removeClass(validClass);
        } else {
            $(element).addClass(errorClass).removeClass(validClass);
        }

        $(requiredMessage).addClass(requiredClass);
        setTimeout(function () {
            $(requiredMessage).removeClass(requiredClass);
        }, 1000);
    },
    unhighlight: function (element, errorClass, validClass) {
        if (element.type === 'radio' || element.type === 'checkbox' || element.tagName.toLowerCase() === 'select') {
            this.findByName(element.name).removeClass(errorClass).addClass(validClass);
            $(element).parent().removeClass(errorClass).addClass(validClass);
        } else {
            $(element).removeClass(errorClass).addClass(validClass);
        }
    },
    errorPlacement: function (error, element) {
        error.addClass('o-formError');
        error.appendTo(element.closest('.o-formField, .o-formCaptcha'));
    },
    submitHandler: function (form) {
        if (!$(form).attr('data-ajax')) {
            return true;
        }

        var submit = $(form).find('buton[type="submit"]');

        submit.addClass('is-sending');
        submit.prop('disabled', true);
        submit.addClass('is-sending');

        $.post({
            url: $(form).attr('action'),
            data: $(form).serialize(),
            success: function (response) {
                submit.addClass('is-sent');
                form.reset();

                setTimeout(function () {
                    submit.removeClass('is-sending');
                    submit.removeClass('is-sent');
                    submit.prop('disabled', false);
                }, 2000);
            },
            error: function (response) {
                submit.removeClass('is-sending');
                submit.prop('disabled', false);
                submit.append($('<div>', {
                    id: 'submit-error',
                    class: 'Alert is-error',
                    text: 'Tu formulario no se ha podido enviar'
                }));
            }
        });
    }
};

$.validator.addMethod('dni_check', function (value, element) {
    value = value.toUpperCase();

    var letter = value.substr(-1),
        numbers = value.substr(0, value.length - 1);

    numbers = numbers.replace('X', 0);
    numbers = numbers.replace('Y', 1);
    numbers = numbers.replace('Z', 2);

    return 'TRWAGMYFPDXBNJZSQVHLCKE'.substr(numbers % 23, 1) === letter &&
        letter.length === 1 &&
        numbers.length === 8;
});

$.validator.addMethod('min18years', function (value, element) {
    var today = new Date(),
        birthdate = new Date(value.substring(6, 10), value.substring(3, 5) - 1, value.substring(0, 2), today.getHours(), today.getMinutes(), today.getSeconds()),
        time_difference = today.getTime() - birthdate.getTime(),
        years_difference = time_difference / 31558464000;

    return years_difference >= 18;
});

function Validation () {
    $('.js-validateForm').each(function () {
        var validate_options = $(this).data('validate-options'),
            jqValidate_settings = jqValidate_defaults;

        if (jqValidate_options.hasOwnProperty(validate_options)) {
            jqValidate_settings = $.extend(
                {},
                jqValidate_defaults,
                jqValidate_options[validate_options] || {}
            );
        }
        $(this).validate(jqValidate_settings);
    });
}

export default Validation;
