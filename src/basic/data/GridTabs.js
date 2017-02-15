const VARIABLES = `
$global-max-width: 1440px;
$grid-columns: 24;
`;

const GRID_CLASSES = `
.u-flex { display: flex; }
.u-flex--inline { display: inline-flex; }
.u-flex--alignCenter { align-items: center; }
.u-flex--alignStart { align-items: flex-start; }
.u-flex--alignEnd { align-items: flex-end; }
.u-flex--justifyCenter { justify-content: center; }
.u-flex--justifyStart { justify-content: flex-start; }
.u-flex--justifyEnd { justify-content: flex-end; }
.u-flex--justifyBetween { justify-content: space-between; }
.u-flex--justifyAround { justify-content: space-around; }
.u-flex--reverse { flex-direction: row-reverse; }

.u-flex--column {
    flex-direction: column;

    &.u-flex--reverse { flex-direction: column-reverse; }
}

.u-flex--wrap {
    display: flex;
    flex-wrap: wrap;
}

.u-flex--center {
    align-items: center;
    display: flex;
    justify-content: center;
}

@function get-column-percentage($column-num) {
    @return $column-num / $grid-columns * 100%;
}

@each $val in $breakpoints {
    $namespace: nth($val, 1);
    $breakpoint: nth($val, 2);

    @include breakpoint($breakpoint) {
        .u-flex--#{$namespace} { display: flex; }

        .u-flex--#{$namespace}-center {
            align-items: center;
            display: flex;
            justify-content: center;
        }

        .u-flex--#{$namespace}-wrap {
            display: flex;
            flex-wrap: wrap;
        }
    }

    @for $i from 1 through $grid-columns {
        .u-flex--#{$namespace}-#{$i} {
            flex-basis: 100%;
            max-width: 100%;
        }
    }
}

@each $val in $breakpoints {
    $namespace: nth($val, 1);
    $breakpoint: nth($val, 2);

    @include breakpoint($breakpoint) {
        @for $i from 1 through $grid-columns {
            .u-flex--#{$namespace}-#{$i} {
                flex-basis: get-column-percentage($i);
                max-width: get-column-percentage($i);
            }
        }
    }
}
`;

const UTILITIES = `
.u-wrapper,
.u-wrapperPadding {
    padding-left: space();
    padding-right: space();
    position: relative;

    @include breakpoint($s768) {
        padding-left: space(2);
        padding-right: space(2);
    }
}

.u-wrapper {
    height: 100%;
    margin: 0 auto;
    max-width: $global-max-width;

    @media screen and (min-width: $global-max-width + get-pxs(space(2) * 2)) {
        padding-left: 0;
        padding-right: 0;
    }

    &.is-collapse {
        padding-left: 0;
        padding-right: 0;
    }

    &.is-small { max-width: 1200px; }
    &.is-reading { max-width: 960px; }
}

@each $val in $breakpoints {
    $namespace: nth($val, 1);
    $breakpoint: nth($val, 2);

    @include breakpoint-max($breakpoint) {
        .u-wrapper.is-collapse--#{$namespace} {
            padding-left: 0;
            padding-right: 0;
        }
    }

    @include breakpoint($breakpoint) {
        .u-wrapperPadding.is-collapse--#{$namespace} {
            padding-left: 0;
            padding-right: 0;
        }
    }
}
`;

export { VARIABLES, GRID_CLASSES, UTILITIES };
