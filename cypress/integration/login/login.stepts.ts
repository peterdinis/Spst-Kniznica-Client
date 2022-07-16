import { Given} from "cypress-cucumber-preprocessor/steps";

Given("I Navigate to the register page", () => {
  cy.visit("/register");
});
