/// <reference types="cypress" />
import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import userData from "../userData";

Given("Go to Broker Insurance homepage", () => {
  cy.visit(userData.url);
});

When("I enter an email Address {}", (emailAddress) => {
  cy.get("#email").type(emailAddress);
});

When("I enter a password {}", (password) => {
  cy.get("#password").type(password);
});

When("I click on log in button", () => {
  cy.get(":nth-child(3) > .btn").invoke("removeAttr", "onclick");
  cy.get(":nth-child(3) > .btn").click();
});

Then("I should be shown error message", () => {
  cy.get("span > b").contains("Enter your Email address and password correct");
});

Given("Given I go to the Broker Insurance Login page", () => {
  cy.visit(userData.url);
});

When("I give email id that I got from register page without password", () => {
  cy.get("#email").type("fakeuseremail@test.com");
});

When("I click on the Log in button without password entered", () => {
  cy.get(":nth-child(3) > .btn").invoke("removeAttr", "onclick");
  cy.get(":nth-child(3) > .btn").click();
});

Then("It should be not be moved to Broker Insurance WebPage", () => {
  cy.url().should("not.eq", userData.url);
  cy.get("#tabs-1 > h2").should("not.have.text", "Broker Insurance WebPage");
});
