# React SVG Reveal Animation

## Description
React SVG Reveal is a lightweight and customizable React component that allows you to create SVG reveal animations. With this component, you can gradually reveal text in a visually appealing way, adding an element of suspense and elegance to your web projects.

![intro](https://raw.githubusercontent.com/TommyRiquet/react-svg-reveal/main/static/intro.gif)


## Features

- Smooth and elegant text reveal animations.
- Customizable animation duration, delay, and easing options.
- Control over the reveal direction (left to right, right to left, top to bottom, or bottom to top).
- Support for various text styles, including font size, color, and weight.
- Easy integration with React projects and minimal setup required.

## Installation

- First, make sure you have Node.js and npm installed on your machine.
- Clone this repository to your local machine or install it as a dependency in your existing React project using npm or yarn.


## Clone Repository (if starting a new project)

```bash
git clone https://github.com/TommyRiquet/react-svg-reveal.git
cd react-svg-reveal
```

## Install as Dependency (if using in an existing project)

```bash
npm install react-svg-reveal --save
# or
yarn add react-svg-reveal
```

## Usage

- Import the SVGReveal component in your React application.

```jsx
import React from 'react';
import SVGReveal from 'react-svg-reveal';
```
- Use the SVGReveal component in your code and provide the text you want to reveal.

```jsx

function App() {
  return (
    <div>
      	<SVGReveal
			width={750},
			height={600},
			strokeWidth={2},
			viewBox='0 0 800 100',
			path={['M0 100V0l50 50 50-50v100L75 75l-25 25-25-25z']}
		/>
    </div>
  );
}
```

- Customize the reveal animation by passing additional props.

```jsx
function App() {
  return (
    <div>
      	<SVGReveal
			width={750},
			height={600},
			strokeWidth={2},
			viewBox='0 0 800 100',
			path={['M0 100V0l50 50 50-50v100L75 75l-25 25-25-25z']}
			backgroundColor='black'
			stroke='white'
			strokeWidth={2}
			strokeLineCap='square'
		/>
    </div>
  );
}
```

## Props

The following props are available for customizing the SVGReveal component:
|Prop|Type|Default|Description|
|:---:|:---:|:---:|:---:|
|path|Array of strings |(required)|svg path representing the text to be revealed.|
|viewBox|string|(required)|svg viewBox representing the size of the text to be revealed.|
|height|number|(required)|height of the svg element.|
|width|number|(required)|width of the svg element.|
|backgroundColor|string|transparent|background color of the svg element.|
|stroke|string|black|stroke color of the svg element.|
|strokeWidth|number|20|stroke width of the svg element.|
|strokeLinecap|string|round|stroke


## Examples

For more usage examples and ideas, check out the 'examples' folder in this repository.

## Contributing

Contributions to this project are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.