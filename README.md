# LNGI - Large Numbers Gradually Increasing

A fun Angular application that displays numbers incrementing at different paces with various increment values. Perfect for watching numbers grow!

## Features

- **Real-time Updates**: Numbers increment automatically using RxJS observables
- **Pace Control**: Choose from Slow, Medium, Fast, or Lightning Fast speeds
- **Increment Options**: Select from +1 to +100,000,000 increment values
- **Responsive Design**: Works great on mobile, tablet, and desktop
- **Number Formatting**: Large numbers display with comma separators for easy reading
- **Start/Stop Controls**: Pause and resume the incrementing at any time

## How to Use

1. **Start**: Click the "Start" button to begin incrementing
2. **Choose Pace**: Select how fast you want the numbers to increase
3. **Pick Increment**: Choose how much to add each time (from +1 to +100 million!)
4. **Watch**: Enjoy watching the numbers grow!
5. **Stop**: Click "Stop" to pause the incrementing

## Technologies Used

- Angular 20.1.0
- RxJS for reactive programming
- TypeScript
- Responsive CSS with media queries

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.1.5.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
