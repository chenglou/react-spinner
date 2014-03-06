# [React](http://facebook.github.io/react/)-spinner

Zero configuration loading spinner.

## install

Bower:
```sh
bower install react-spinner
```

Npm:
```sh
npm install react-spinner
```

```html
<script src="path/to/react-spinner/index.js"></script>
```

(Compatible with CommonJS, e.g. Browserify.)

The CSS file:

```html
<link rel="stylesheet" type="text/css" href="path/to/react-spinner.css">
```

The spinner centers itself based on its container's dimensions. If those are not predefined, simply manually center it.

## Usage

_Check the example folder too._

```html
/** @jsx React.DOM */

// doesn't get simpler than this, does it?
React.renderComponent(<Spinner />, document.body);
```

## License

MIT.
