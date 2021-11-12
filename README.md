# davidmimay

davidmimay is an Angular PWA powered by Github.

- [Live Demo](https://davidmimay.github.io/)

![](./src/assets/social-preview.png)

## Features

- Angular 9.x + Firebase
- Installable PWA
- Angular Material + Theme
- Github pages and API 

## Usage

- [Installation guide dev.to](https://dev.to/davidmimay/angular-app-in-github-pages-86n-temp-slug-8163586)

## Best practices

### Coding style

* Code should not exceed around 30 lines per function. (KISS - Keep it simple, stupid!)
* If the components/classes are hundred and hundreds of lines of code, we should separate them in to separate files. I prefer to use composition over inheritance, it is easier to make changes in the future.
* [Don't repeat yourself (DRY)](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself)
* [Single responsibility principle](https://en.wikipedia.org/wiki/Single-responsibility_principle)
* Comments should explain WHY code is there, and WHAT it is doing.
* Limit line length to 80 characters. (This is a personal preference of mine. It allows me to have the terminal open on one half of the monitor, with VS Code on the other half. It also makes it easier to read.)
* Use `const` when the variable won't change, `let` when it does.

### Angular best practices

* Use reusable components.
* Lazy loading routes (reduces the size of the application, the initial load time, and improve the application boot time by not loading the unused modules.)
* Modular design: Apps should be structured with 1 x Core Module, 1 x Shared Module, and many Feature Modules
  - Core Module: This will be where any singleton services or site-wide components will be kept (E.g. header, footer)
  - Shared Module: This will be where any shared components/pipes/services will live. They will be used throughout the app, but not used *everywhere* on *every page*
  - Feature Module: This will be where any features that make up the application will live. They will be large sub-sections of the app that contain their own components, routes, pages, services etc.
* Smart & Dumb components:
  - Smart components: These will contain business logic in their respective services. They will pass data down to dumb components, and react to events coming from dumb components.
  - Dumb components: These are presentational only and will be used to display data. We will delegate user interaction up to smart components via events.
* "On push" Change Detection Strategy - This will improve performance of the application, as it will only update components when necessary.
* Import aliases - Shortened aliases for Core, Features, and Shared modules.
* The Async Pipe - I've used the Async Pipe in the templates. This is because it automatically subscribes, and unsubscribes from observables. This is so you don't have to manually write all the OnDestroy code to unsubscribe!
* Place all global styles into /src/styles. Update your angular.json file to add a stylePreprocessorOptions option. This allows you to do short import statements, like: @import "variables";
