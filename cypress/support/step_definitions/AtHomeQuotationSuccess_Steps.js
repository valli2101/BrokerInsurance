/// <reference types="cypress" />
import {
  Before,
  Given,
  When,
  Then,
  After,
} from "@badeball/cypress-cucumber-preprocessor";
import userData from "../userData";

Before({ tags: "@login" }, function () {
  cy.visit(userData.url);
  cy.get("#email").type(userData.email);
  cy.get("#password").type(userData.password);
  cy.get(":nth-child(3) > .btn").invoke("removeAttr", "onclick");
  cy.get(":nth-child(3) > .btn").click();
  cy.url().should("not.eq", userData.url);
  cy.get("#tabs-1 > h2").should("have.text", userData.landingPageTitle);
});

Given(
  "AtHome Quote With windscreenrepair and without incident I click on the Request Quotation button",
  () => {
    cy.get("#ui-id-2").click();
  }
);

When(
  "AtHome Quote With windscreenrepair and without incident I select breakdowncover as AtHome",
  () => {
    cy.get("#quotation_breakdowncover").select(
      userData.breakDownCoverType.atHome
    );
  }
);

When(
  "AtHome Quote With windscreenrepair and without incident I select the windscreenrepair as yes",
  () => {
    cy.get("#quotation_windscreenrepair_t").check("Yes");
  }
);

When(
  "AtHome Quote With windscreenrepair and without incident I dont enter the Incident",
  () => {
    cy.get("#quotation_incidents");
  }
);

When(
  "AtHome Quote With windscreenrepair and without incident I enter the registration",
  () => {
    cy.get("#quotation_vehicle_attributes_registration").type(
      userData.vehicleRego
    );
  }
);

When(
  "AtHome Quote With windscreenrepair and without incident I enter the annual mileage",
  () => {
    cy.get("#quotation_vehicle_attributes_mileage").type(userData.mileage);
  }
);

When(
  "AtHome Quote With windscreenrepair and without incident I enter the estimated value",
  () => {
    cy.get("#quotation_vehicle_attributes_value").type(userData.vehilceValue);
  }
);

When(
  "AtHome Quote With windscreenrepair and without incident I select the Parking Location",
  () => {
    cy.get("#quotation_vehicle_attributes_parkinglocation").select(
      userData.parkingType.garage
    );
  }
);

When(
  "AtHome Quote With windscreenrepair and without incident I select the start of policy",
  () => {
    cy.get("#quotation_vehicle_attributes_policystart_1i").select(
      userData.policyDate.year
    );
    cy.get("#quotation_vehicle_attributes_policystart_2i").select(
      userData.policyDate.month
    );
    cy.get("#quotation_vehicle_attributes_policystart_3i").select(
      userData.policyDate.date
    );
  }
);

When(
  "AtHome Quote With windscreenrepair and without incident I click Calculate Premium",
  () => {
    cy.get(".btn-default").click();
  }
);

Then(
  "AtHome Quote With windscreenrepair and without incident Premium will be displayed",
  () => {
    cy.get("#calculatedpremium").should(
      "contain",
      (userData.vehilceValue * 3) / 100 -
        (30 / 100) * ((userData.vehilceValue * 3) / 100) +
        21
    );
  }
);

Given(
  "AtHome Quote Without windscreenrepair and without incident I click on the Request Quotation button",
  () => {
    cy.get("#ui-id-2").click();
  }
);

When(
  "AtHome Quote Without windscreenrepair and without incident I select breakdowncover as AtHome",
  () => {
    cy.get("#quotation_breakdowncover").select(
      userData.breakDownCoverType.atHome
    );
  }
);

When(
  "AtHome Quote Without windscreenrepair and without incident I select the windscreenrepair as no",
  () => {
    cy.get("#quotation_windscreenrepair_f").check("No");
  }
);

When(
  "AtHome Quote Without windscreenrepair and without incident I dont enter the Incident",
  () => {
    cy.get("#quotation_incidents");
  }
);

When(
  "AtHome Quote Without windscreenrepair and without incident I enter the registration",
  () => {
    cy.get("#quotation_vehicle_attributes_registration").type(
      userData.vehicleRego
    );
  }
);

When(
  "AtHome Quote Without windscreenrepair and without incident I enter the annual mileage",
  () => {
    cy.get("#quotation_vehicle_attributes_mileage").type(userData.mileage);
  }
);

When(
  "AtHome Quote Without windscreenrepair and without incident I enter the estimated value",
  () => {
    cy.get("#quotation_vehicle_attributes_value").type(userData.vehilceValue);
  }
);

When(
  "AtHome Quote Without windscreenrepair and without incident I select the Parking Location",
  () => {
    cy.get("#quotation_vehicle_attributes_parkinglocation").select(
      userData.parkingType.garage
    );
  }
);
When(
  "AtHome Quote Without windscreenrepair and without incident I select the start of policy",
  () => {
    cy.get("#quotation_vehicle_attributes_policystart_1i").select(
      userData.policyDate.year
    );
    cy.get("#quotation_vehicle_attributes_policystart_2i").select(
      userData.policyDate.month
    );
    cy.get("#quotation_vehicle_attributes_policystart_3i").select(
      userData.policyDate.date
    );
  }
);
When(
  "AtHome Quote Without windscreenrepair and without incident I click Calculate Premium",
  () => {
    cy.get(".btn-default").click();
  }
);

Then(
  "AtHome Quote Without windscreenrepair and without incident Premium will be displayed",
  () => {
    cy.get("#calculatedpremium").should(
      "contain",
      (userData.vehilceValue * 3) / 100 -
        (30 / 100) * ((userData.vehilceValue * 3) / 100)
    );
  }
);

Given(
  "AtHome Quote Without windscreenrepair and with incident I click on the Request Quotation button",
  () => {
    cy.get("#ui-id-2").click();
  }
);

When(
  "AtHome Quote Without windscreenrepair and with incident I select breakdowncover as AtHome",
  () => {
    cy.get("#quotation_breakdowncover").select(
      userData.breakDownCoverType.atHome
    );
  }
);

When(
  "AtHome Quote Without windscreenrepair and with incident I select the windscreenrepair as no",
  () => {
    cy.get("#quotation_windscreenrepair_f").check("No");
  }
);

When(
  "AtHome Quote Without windscreenrepair and with incident I enter the Incident",
  () => {
    cy.get("#quotation_incidents").type(userData.incident);
  }
);

When(
  "AtHome Quote Without windscreenrepair and with incident I enter the registration",
  () => {
    cy.get("#quotation_vehicle_attributes_registration").type(
      userData.vehicleRego
    );
  }
);

When(
  "AtHome Quote Without windscreenrepair and with incident I enter the annual mileage",
  () => {
    cy.get("#quotation_vehicle_attributes_mileage").type(userData.mileage);
  }
);

When(
  "AtHome Quote Without windscreenrepair and with incident I enter the estimated value",
  () => {
    cy.get("#quotation_vehicle_attributes_value").type(userData.vehilceValue);
  }
);

When(
  "AtHome Quote Without windscreenrepair and with incident I select the Parking Location",
  () => {
    cy.get("#quotation_vehicle_attributes_parkinglocation").select(
      userData.parkingType.garage
    );
  }
);

When(
  "AtHome Quote Without windscreenrepair and with incident I select the start of policy",
  () => {
    cy.get("#quotation_vehicle_attributes_policystart_1i").select(
      userData.policyDate.year
    );
    cy.get("#quotation_vehicle_attributes_policystart_2i").select(
      userData.policyDate.month
    );
    cy.get("#quotation_vehicle_attributes_policystart_3i").select(
      userData.policyDate.date
    );
  }
);

When(
  "AtHome Quote Without windscreenrepair and with incident I click Calculate Premium",
  () => {
    cy.get(".btn-default").click();
  }
);

Then(
  "AtHome Quote Without windscreenrepair and with incident Premium will be displayed",
  () => {
    cy.get("#calculatedpremium").should(
      "contain",
      (userData.vehilceValue * 3) / 100
    );
  }
);

Given(
  "AtHome With windscreenrepair and with incident I click on the Request Quotation button",
  () => {
    cy.get("#ui-id-2").click();
  }
);

When(
  "AtHome With windscreenrepair and with incident I select breakdowncover as AtHome",
  () => {
    cy.get("#quotation_breakdowncover").select(
      userData.breakDownCoverType.atHome
    );
  }
);

When(
  "AtHome With windscreenrepair and with incident I select the windscreenrepair as yes",
  () => {
    cy.get("#quotation_windscreenrepair_t").check("Yes");
  }
);

When(
  "AtHome With windscreenrepair and with incident I enter the Incident",
  () => {
    cy.get("#quotation_incidents").type(userData.incident);
  }
);

When(
  "AtHome With windscreenrepair and with incident I enter the registration",
  () => {
    cy.get("#quotation_vehicle_attributes_registration").type(
      userData.vehicleRego
    );
  }
);

When(
  "AtHome With windscreenrepair and with incident I enter the annual mileage",
  () => {
    cy.get("#quotation_vehicle_attributes_mileage").type(userData.mileage);
  }
);

When(
  "AtHome With windscreenrepair and with incident I enter the estimated value",
  () => {
    cy.get("#quotation_vehicle_attributes_value").type(userData.vehilceValue);
  }
);

When(
  "AtHome With windscreenrepair and with incident I select the Parking Location",
  () => {
    cy.get("#quotation_vehicle_attributes_parkinglocation").select(
      userData.parkingType.garage
    );
  }
);
When(
  "AtHome With windscreenrepair and with incident I select the start of policy",
  () => {
    cy.get("#quotation_vehicle_attributes_policystart_1i").select(
      userData.policyDate.year
    );
    cy.get("#quotation_vehicle_attributes_policystart_2i").select(
      userData.policyDate.month
    );
    cy.get("#quotation_vehicle_attributes_policystart_3i").select(
      userData.policyDate.date
    );
  }
);
When(
  "AtHome With windscreenrepair and with incident I click Calculate Premium",
  () => {
    cy.get(".btn-default").click();
  }
);

Then(
  "AtHome With windscreenrepair and with incident Premium will be displayed",
  () => {
    cy.get("#calculatedpremium").should(
      "contain",
      (userData.vehilceValue * 3) / 100 + 30
    );
  }
);

After({ tags: "@saveQuote" }, function () {
  cy.get("#new_quotation > .actions > .btn-success").click();
});
