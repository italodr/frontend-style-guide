const VARIABLES = `
$s0: (0, 479px);
$s480: (480px, 639px);
$s640: (640px, 767px);
$s768: (768px, 959px);
$s960: (960px, 1023px);
$s1024: (1024px, 1199px);
$s1200: (1200px, 1439px);
$s1440: (1440px, 1919px);
$s1920: (1920px, 0);

$screen: "only screen" !default;
`;

const SASS_ARRAY = `
$breakpoints: (
    (s0, $s0),
    (s480, $s480),
    (s640, $s640),
    (s768, $s768),
    (s960, $s960),
    (s1024, $s1024),
    (s1200, $s1200),
    (s1440, $s1440),
    (s1920, $s1920)
);
`;

const MIXINS = `
@mixin breakpoint-retina() {
    /* stylelint-disable */
    @media #{$screen} and (-webkit-min-device-pixel-ratio: 2),
        #{$screen} and (-o-min-device-pixel-ratio: 2/1),
        #{$screen} and (min--moz-device-pixel-ratio: 2),
        #{$screen} and (min-device-pixel-ratio: 2),
        #{$screen} and (min-resolution: 192dpi),
        #{$screen} and (min-resolution: 2dppx) {
        @content;
    }
    /* stylelint-enable */
}

@mixin breakpoint-max($range) {
    @media #{$screen} and (max-width: #{(nth($range, 1) - 1px)}) {
        @content;
    }
}

@mixin breakpoint($range, $orientation: '', $only: false) {
    @if $orientation != '' {
        $orientation: "and (orientation: #{$orientation})";
    }

    /* stylelint-disable */
    @if $only == true {
        @media #{$screen} and (min-width: #{nth($range, 1)}) and (max-width: #{nth($range, 2)}) #{$orientation} {
            @content;
        }
    }

    @else {
        @media #{$screen} and (min-width: #{nth($range, 1)}) #{$orientation} {
            @content;
        }
    }
    /* stylelint-enable */
}
`;

export { VARIABLES, SASS_ARRAY, MIXINS };
