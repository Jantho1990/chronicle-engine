# Chronicle
An interactive novel engine built on VueJS.

> This is nowhere close to being finished. At the moment, it's a hobby project, so it might
not ever be finished.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## How-To
The way Chronicle works is simple: you create Pages which include as much text as you want.
From there, you can use set up Links to connect pages together. A collection of pages and 
links will get you an interactive novel!

The 0.1.0 version of Chronicle will be nothing more than an editor which is capable of this
 functionality and a viewer which is able to display data generated by the editor (aka 
 a "chronicle"). The tentative names are:
 - "Scribe": the editor
 - "Herald": the viewer

Both Scribe and Herald must be designed to be usable on all device sizes, including mobile phones.
