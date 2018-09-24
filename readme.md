## About

The official front-end boilerplate generator for Church projects. Works with [Eden](https://ip.ldschurch.org/1240/document/eden-1) out of the box.

## Installation

* Ensure you have the latest stable [Git](https://git-scm.com/) and [Node + npm](https://nodejs.org) installed
* Run `npm install --registry="http://icsnpm.ldschurch.org" -g ldsjs` to install the Starter CLI
* Run `ldsjs react your-sweet-app-name` to create a new project
* Run `cd your-sweet-app-name` to move into the new project

## Workflow

* Run `npm install` to install dependencies
* Run `npm run dev` then open [`localhost:3000`](http://localhost:3000) to interactively develop in the app dev environment
* Run `npm run storybook` then open [`localhost:9999`](http://localhost:9999) to interactively develop in the [Storybook](https://storybook.js.org/) component environment
* Run `npm run test` to run tests
* When you commit, `npm run precommit` runs automatically to ensure things are working as expected with your changes
* Run `npm run build` to build the production version into a deployable bundle (or `npm run export` if you want a static bundle without server rendering)
* Run `npm run start` to start the built production version

## Technology

The Starter uses the [recommended technology](https://ip.ldschurch.org/1271/document/recommended-technology) from the JavaScript Stack Team. It creates a React project that renders universally on the server and client. This ensures your website or app will be fast and predictable.

## Learn more

See sections in the navigation menu for more examples and information.
