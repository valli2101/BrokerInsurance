/// <reference types="cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import userData from "../userData";

Given("I should go to Broker Insurance registration page", () => {
  cy.visit(userData.regoUrl);
});

When("I select title from dropdown {}", (title) => {
  cy.get("#user_title").select(title);
});

When("I gave firstName {}", (firstname) => {
  cy.get("#user_firstname").type(firstname);
});

When("I gave surName {}", (Surname) => {
  cy.get("#user_surname").type(Surname);
});

When("I gave phone number of user {}", (phone) => {
  cy.get("#user_phone").type(phone);
});

When("I gave year of birth {}", (year) => {
  cy.get("#user_dateofbirth_1i").select(year);
});

When("I gave month of birth {}", (month) => {
  cy.get("#user_dateofbirth_2i").select(month);
});

When("I gave date of birth {}", (date) => {
  cy.get("#user_dateofbirth_3i").select(date);
});

When("I choose insurance type as {}", (insuranceType) => {
  cy.get("#licencetype_t").check(insuranceType);
});

When("I enter Licence period as {}", (licencePeriod) => {
  cy.get("#user_licenceperiod").select(licencePeriod);
});

When("I select occupation from dropdown {}", (occupation) => {
  cy.get("#user_occupation_id").select(occupation);
});

When("I gave street name {}", (street) => {
  cy.get("#user_address_attributes_street").type(street);
});

When("I gave city name {}", (city) => {
  cy.get("#user_address_attributes_city").type(city);
});

When("I gave country name {}", (country) => {
  cy.get("#user_address_attributes_county").type(country);
});

When("I gave postcode {}", (postcode) => {
  cy.get("#user_address_attributes_postcode").type(postcode);
});

When("I gave email id as {}", (email) => {
  cy.get("#user_user_detail_attributes_email").type(email);
});

When("I gave password {}", (password) => {
  cy.get("#user_user_detail_attributes_password").type(password);
});

When("I gave confirmPassword as {}", (confirmPassword) => {
  cy.get("#user_user_detail_attributes_password_confirmation").type(
    confirmPassword
  );
});

When("I click on the create button", () => {
  cy.get('[name="submit"]').invoke("removeAttr", "onclick");
  cy.get('[name="submit"]').click();
});

Then("I should stay in the same page", () => {
  cy.url().should("eq", userData.regoUrl);
});

Given("Given I visit Broker Insurance registration page", () => {
  cy.visit(userData.regoUrl);
});

When("In the Rego page I entered emailid", () => {
  cy.get("#user_user_detail_attributes_email").type("fakeuseremail@test.com");
});

When("I click on the create button without password entered", () => {
  cy.get('[name="submit"]').invoke("removeAttr", "onclick");
  cy.get('[name="submit"]').click();
});

Then("It should not be moved to login page", () => {
  cy.url().should("not.eq", userData.url);
});
