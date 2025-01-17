# slider-before-after

[![node version](https://img.shields.io/node/v/slider-before-after.svg)](https://www.npmjs.com/package/slider-before-after)
[![npm version](https://badge.fury.io/js/slider-before-after.svg)](https://badge.fury.io/js/slider-before-after)
[![downloads count](https://img.shields.io/npm/dt/slider-before-after.svg)](https://www.npmjs.com/package/slider-before-after)
[![size](https://packagephobia.com/badge?p=slider-before-after)](https://packagephobia.com/result?p=slider-before-after)
[![license](https://img.shields.io/npm/l/slider-before-after.svg)](https://piecioshka.mit-license.org)

🔨 Lightweight and simple slider to present images in "before / after" style with no dependencies.

## Preview 🎉

<https://piecioshka.github.io/slider-before-after/demo>

or below:

![](./assets/demo.gif)

## Features

- ✅ Display images in before / after style
- ✅ Use CSS Level 4 (CSS Variables)
- ✅ Small size of package
- ✅ No dependencies
- ✅ Fully customizable

## Usage

Installation:

```bash
npm install slider-before-after
```

In HTML structure:

```html
<div class="slider-before-after">
    <div class="slider-before-image">
        <img src="https://placeskull.com/200/200/5CBB88" alt=""/>
    </div>
    <div class="slider-after-image">
        <img src="https://placeskull.com/200/200/435466" alt=""/>
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

[The MIT License](https://piecioshka.mit-license.org) @ 2018
