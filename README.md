# JSON Search

JSON Search is smaller project to show how React an ES6 works together. 
## Installation & Usage
For running you will need npm package.
For the first use please run:
```sh
npm install
```
```sh
npm run init-me
```
Now your workspace is set!
## Development
For development version please run:

```sh
npm run devel
```
##### Description:
 1. Development server will be runned  on directory `-/source/` and your changes in  `./app` will be updated automatically.
 2. Dependencies import trought  `bower`.  please add link to `./app/index.html`
 ```html
 <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title></title>
    <link href="css/bootstrap/bootstrap.min.css" type="text/css" rel="stylesheet"/>

    <!-- @if NODE_ENV == 'DEVELOPMENT' -->
    <link rel="stylesheet" type="text/css" href="css/main.css">
    <!-- @endif -->

    <!-- @if NODE_ENV == 'PRODUCTION' -->
    <link rel="stylesheet" type="text/css" href="css/main.min.css">
    <!-- @endif -->
</head>
<body>
<div id="app"></div>
<!-- @if NODE_ENV == 'DEVELOPMENT' -->
<script  src="js/scripts.js" ></script>
<!-- @endif -->

<!-- @if NODE_ENV == 'PRODUCTION' -->
<script  src="js/scripts.min.js" ></script>
<!-- @endif -->
</body>
</html>
 ```
 
 and `Gruntfile.js`
 ```
 bowercopy: {
            options: {
                srcPrefix: 'bower_components'
            },
            dev: {
                options: {
                    destPrefix: 'source'
                },
                files: {
                    'js/vendor/jquery/jquery.js': 'jquery/dist/jquery.js',
                    'css/bootstrap/bootstrap.min.css': 'bootstrap/dist/css/bootstrap.min.css'
                }
            },
            prod: {
                options: {
                    destPrefix: 'build'
                },
                files: {
                    'js/vendor/jquery/jquery.js': 'jquery/dist/jquery.js',
                    'css/bootstrap/bootstrap.min.css': 'bootstrap/dist/css/bootstrap.min.css'
                }
            }
        },
 ```
 
 3.  Dependencies import trought  `npm`.  Install `npm install <package> --save-dev` use: `import <variable> from "<package>"`
 4.   `./app/scripts` application scripts (es6)
 5.    `./app/styles` application styles

## Production
You could build your project for production:
 ```sh
 npm run prod
  ```
directory  `./build` will be created with minified files.

## Conclusion
