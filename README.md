# react-predefined-color-picker

:construction: Under development :construction:

> A tiny color predefined picker component for React and Preact apps

[![NPM](https://img.shields.io/npm/v/react-predefined-color-picker.svg)](https://www.npmjs.com/package/react-predefined-color-picker) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)


![](./images/demo.gif)


## Install

```bash
npm install --save react-predefined-color-picker
```

## Usage

```jsx
import React, { Component } from 'react'

import ColorPredefinedPicker from 'react-predefined-color-picker'

class Example extends Component {
  render() {
    return <ColorPredefinedPicker />
  }
}
```


## Props

| Prop                   | Type                | Required | Default       | Note                                                                                                                                                                                                         |
| ---------------------- | ------------------- | -------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| colors                 | Array of string     | No       |               | Array of strings containing colors. Eg: `["red", "blue", "#2668CA", "rgb(30, 40, 50)"]`
| size                   | string              | No       | medium        | Size. Possible options are: `small`, `medium`, `large`
| columns                | number              | No       | 3             | Number of columns


## License

MIT © [israelpossoli](https://github.com/israelpossoli)
