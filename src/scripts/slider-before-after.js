(function (root) {
    'use strict';

    const DEFAULT_CONFIG = {
        $el: null,
        defaultValue: 33
    };

    /**
     * Function which initialize before/after slider.
     *
     * @param {Object} options - Default settings
     */
    function setup(options) {
        const config = Object.assign({}, DEFAULT_CONFIG, options);

        const $slider = config.$el;
        const $track = $slider.querySelector('.slider-track');
        const $after = $slider.querySelector('.slider-after-image');

        // Copy styles.
        $slider.style.width = getComputedStyle($after).getPropertyValue('width');
        $slider.style.height = getComputedStyle($after).getPropertyValue('height');

        $track.addEventListener('input', (evt) => {
            const percent = Number(evt.target.value);
            $after.style.width = `${percent}%`;
        });

        $track.value = config.defaultValue;
        $track.dispatchEvent(new Event('input'));
    }

    /**
     * Initialized
     */
    function autorun() {
        const $sliders = document.querySelectorAll('.slider-before-after');
        $sliders.forEach(($slider) => {
            setup({ $el: $slider });
        });
    }

    root.addEventListener('load', autorun);

}(window));
