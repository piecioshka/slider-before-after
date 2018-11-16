# slider-before-after

[![npm version](https://badge.fury.io/js/slider-before-after.svg)](https://badge.fury.io/js/slider-before-after)
[![downloads count](https://img.shields.io/npm/dt/slider-before-after.svg)](https://www.npmjs.com/~piecioshka)
[![dependencies](https://david-dm.org/piecioshka/slider-before-after.svg)](https://github.com/piecioshka/slider-before-after)

:hammer: Lightweight and simple slider to present images in "before / after" style with no dependencies.

## Features

* :white_check_mark: Display images in before / after style
* :white_check_mark: Use CSS Level 4 (CSS Variables)
* :white_check_mark: Small size of package
* :white_check_mark: No dependencies
* :white_check_mark: Fully customizable

## Example

![](./assets/demo.gif)

## Demo

Click [here](https://piecioshka.github.io/slider-before-after/demo) to see demo.

## Installation

```bash
npm install slider-before-after
```

## Usage

In HTML structure:

```html
<div class="slider-before-after">
    <div class="slider-before-image">
        <img src="http://placeskull.com/200/200/5CBB88" alt=""/>
    </div>
    <div class="slider-after-image">
        <img src="http://placeskull.com/200/200/435466" alt=""/>
    </div>
    <input type="range" class="slider-track"/>
</div>
```

and then attach files:

```html
<head>
    <link rel="stylesheet" href="node_modules/slider-before-after/src/styles/main.css"/>
    <link rel="stylesheet" href="node_modules/slider-before-after/src/styles/custom-range-input.css"/>
</head>
<body>
    ...
    <script src="node_modules/slider-before-after/src/scripts/slider-before-after.js"></script>
</body>
```

or in component:

```javascript
require('slider-before-after/src/styles/main.css');
require('slider-before-after/src/styles/custom-range-input.css');
require('slider-before-after');
```

## License

[The MIT License](http://piecioshka.mit-license.org) @ 2018
