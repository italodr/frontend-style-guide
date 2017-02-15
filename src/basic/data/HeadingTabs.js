const MIXINS = `
@mixin fluid-type($min-font-size, $max-font-size, $min-vw: 480px, $max-vw: 1200px) {
    $u1: unit($min-vw);
    $u2: unit($max-vw);
    $u3: unit($min-font-size);
    $u4: unit($max-font-size);

    @if $u1 == $u2 and $u1 == $u3 and $u1 == $u4 {
        font-size: get-rems($min-font-size);

        @if $min-vw != $max-vw {
            @media only screen and (min-width: $min-vw) {
                font-size: calc(#{$min-font-size} + #{strip-unit($max-font-size - $min-font-size)} * ((100vw - #{$min-vw}) / #{strip-unit($max-vw - $min-vw)}));
            }
        }

        @media only screen and (min-width: $max-vw) {
            font-size: get-rems($max-font-size, true);
        }
    }
    @else {
         @error"Detected mixed units. Please use the same units for all parameters.";
    }
}
`;

const SASS = `
h1, .t-h1, .s-h1 { @include fluid-type(34px, 48px); }
h2, .t-h2, .s-h2 { @include fluid-type(28px, 36px); }
h3, .t-h3, .s-h3 { @include fluid-type(24px, 32px); }
h4, .t-h4, .s-h4 { @include fluid-type(20px, 28px); }
h5, .t-h5, .s-h5 { @include fluid-type(16px, 24px); }
h6, .t-h6, .s-h6 { @include fluid-type(14px, 18px); }

h1, .t-h1,
h2, .t-h2,
h3, .t-h3,
h4, .t-h4,
h5, .t-h5,
h6, .t-h6 {
    font-weight: 700;
    margin: 0 0 1rem;
}
`;

export { MIXINS, SASS };
