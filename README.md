# AngularTourOfAirbrake

Add your airbrake.io credentials to a .env file.

This project using dotenv and a config file set-env.ts to dynamically generate your environment.ts file based on values in .env.

The homepage has a few examples of catching and reporting errors to airbrake.

An HttpInterceptor is used to catch errors from Http requests and bubble them up to handleError, which then notifies airbrake.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.21.

## Development server
Run `npm run start --open`

for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Sources

The set-env.ts strategy is from Riccardo Andreatta and this article on [Medium](https://medium.com/@ferie/how-to-pass-environment-variables-at-building-time-in-an-angular-application-using-env-files-4ae1a80383c)

The httpErrorInterceptor strategy is well known, but sourced from this [rollbar article](https://rollbar.com/blog/error-handling-with-angular-8-tips-and-best-practices/)

Continue with [angular tour of heroes](https://angular.io/tutorial)

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
