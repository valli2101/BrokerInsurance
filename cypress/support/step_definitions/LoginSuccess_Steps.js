/// <reference types="cypress" />
import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import userData from "../userData";

Given("Go to the Broker Insurance homepage", () => {
  cy.visit(userData.url);
});

When("I type an email Address {}", (emailAddress) => {
  cy.get("#email").type(emailAddress);
});

When("I type a password {}", (password) => {
  cy.get("#password").type(password);
});

When("I click on the log in button", () => {
  cy.get(":nth-child(3) > .btn").invoke("removeAttr", "onclick");
  cy.get(":nth-child(3) > .btn").click();
});

Then("I should be moved to another page which contains text", () => {
  cy.url().should("not.eq", userData.url);
  cy.get("#tabs-1 > h2").should("have.text", "Broker Insurance WebPage");
});
