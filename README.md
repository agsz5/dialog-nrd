# DialogNrd - A Dynamic, Reusable Dialog Component Test

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.2.

## Running the application

1. Clone or download the repository
2. Run "npm install"
3. Run "ng serve"
4. Navigate to `http://localhost:4200/`

## Notes

- The component uses the `<dialog-nrd-app>` selector, and accepts the `[title]` and `[show]` parameters.
- The commponent has a `closeDialog()` method, giving the flexibility to be attached to other events such as submitting a form, or an additional custom `close` button which would perform the same function as the "x" (close) button provided in the component. 
- The component accepts any content wrapped inside the `<dialog-nrd-app></dialog-nrd-app>`. For this one-page example I opted for a `<select>` component wich lets you choose between three possible scenarios: a 'Simple Text' content, a 'Form' Content, and a 'Consent' example. A consumer of this component can virtually wrapped any desired content inside the `<dialog-nrd-app>` component.
- The application was tested for Usability with the 'WAVE' and "Axe" tools. All pertinent landmarks and necessary aria information was provided
- Keyboard functionality was not tested due to time constraints
