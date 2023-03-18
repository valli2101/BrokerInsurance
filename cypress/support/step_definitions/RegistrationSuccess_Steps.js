/// <reference types="cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import userData from "../userData";

Given("I go to Broker Insurance registration page", () => {
  cy.visit(userData.regoUrl);
});

When("I select the title {}", (title) => {
  cy.get("#user_title").select(title);
});

When("I enter the firstname {}", (firstname) => {
  cy.get("#user_firstname").type(firstname);
});

When("I enter the Surname {}", (Surname) => {
  cy.get("#user_surname").type(Surname);
});

When("I enter the phone number {}", (phone) => {
  cy.get("#user_phone").type(phone);
});

When("I select the year {}", (year) => {
  cy.get("#user_dateofbirth_1i").select(year);
});

When("I select the month {}", (month) => {
  cy.get("#user_dateofbirth_2i").select(month);
});

When("I select the date {}", (date) => {
  cy.get("#user_dateofbirth_3i").select(date);
});

When("I select insurance type {}", (insuranceType) => {
  cy.get("#licencetype_t").check(insuranceType);
});

When("I select the Licence period {}", (licencePeriod) => {
  cy.get("#user_licenceperiod").select(licencePeriod);
});

When("I select the occupation {}", (occupation) => {
  cy.get("#user_occupation_id").select(occupation);
});

When("I enter street {}", (street) => {
  cy.get("#user_address_attributes_street").type(street);
});

When("I enter city {}", (city) => {
  cy.get("#user_address_attributes_city").type(city);
});

When("I enter country {}", (country) => {
  cy.get("#user_address_attributes_county").type(country);
});

When("I enter postcode {}", (postcode) => {
  cy.get("#user_address_attributes_postcode").type(postcode);
});

When("I enter email {}", (email) => {
  cy.get("#user_user_detail_attributes_email").type(email);
});

When("I enter password {}", (password) => {
  cy.get("#user_user_detail_attributes_password").type(password);
});

When("I enter confirm password {}", (confirmPassword) => {
  cy.get("#user_user_detail_attributes_password_confirmation").type(
    confirmPassword
  );
});

When("I select create button", () => {
  cy.get('[name="submit"]').invoke("removeAttr", "onclick");
  cy.get('[name="submit"]').click();
});

Then("I should see the login page", () => {
  cy.url().should("include", userData.url);
});
