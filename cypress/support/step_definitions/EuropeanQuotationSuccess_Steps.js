/// <reference types="cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import userData from "../userData";

Given(
  "European Quote With windscreenrepair and without incident I click on the Request Quotation button",
  () => {
    cy.get("#ui-id-2").click();
  }
);

When(
  "European Quote With windscreenrepair and without incident I select breakdowncover as European",
  () => {
    cy.get("#quotation_breakdowncover").select(
      userData.breakDownCoverType.european
    );
  }
);

When(
  "European Quote With windscreenrepair and without incident I select the windscreenrepair as yes",
  () => {
    cy.get("#quotation_windscreenrepair_t").check("Yes");
  }
);

When(
  "European Quote With windscreenrepair and without incident I dont enter the Incident",
  () => {
    cy.get("#quotation_incidents");
  }
);

When(
  "European Quote With windscreenrepair and without incident I enter the registration",
  () => {
    cy.get("#quotation_vehicle_attributes_registration").type(
      userData.vehicleRego
    );
  }
);

When(
  "European Quote With windscreenrepair and without incident I enter the annual mileage",
  () => {
    cy.get("#quotation_vehicle_attributes_mileage").type(userData.mileage);
  }
);

When(
  "European Quote With windscreenrepair and without incident I enter the estimated value",
  () => {
    cy.get("#quotation_vehicle_attributes_value").type(userData.vehilceValue);
  }
);

When(
  "European Quote With windscreenrepair and without incident I select the Parking Location",
  () => {
    cy.get("#quotation_vehicle_attributes_parkinglocation").select(
      userData.parkingType.garage
    );
  }
);

When(
  "European Quote With windscreenrepair and without incident I select the start of policy",
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
  "European Quote With windscreenrepair and without incident I click Calculate Premium",
  () => {
    cy.get(".btn-default").click();
  }
);

Then(
  "European Quote With windscreenrepair and without incident Premium will be displayed",
  () => {
    cy.get("#calculatedpremium").should(
      "contain",
      (userData.vehilceValue * 4) / 100 -
        (30 / 100) * ((userData.vehilceValue * 4) / 100) +
        21
    );
  }
);

Given(
  "European Quote Without windscreenrepair and without incident I click on the Request Quotation button",
  () => {
    cy.get("#ui-id-2").click();
  }
);

When(
  "European Quote Without windscreenrepair and without incident I select breakdowncover as European",
  () => {
    cy.get("#quotation_breakdowncover").select(
      userData.breakDownCoverType.european
    );
  }
);

When(
  "European Quote Without windscreenrepair and without incident I select the windscreenrepair as no",
  () => {
    cy.get("#quotation_windscreenrepair_f").check("No");
  }
);

When(
  "European Quote Without windscreenrepair and without incident I dont enter the Incident",
  () => {
    cy.get("#quotation_incidents");
  }
);

When(
  "European Quote Without windscreenrepair and without incident I enter the registration",
  () => {
    cy.get("#quotation_vehicle_attributes_registration").type(
      userData.vehicleRego
    );
  }
);

When(
  "European Quote Without windscreenrepair and without incident I enter the annual mileage",
  () => {
    cy.get("#quotation_vehicle_attributes_mileage").type(userData.mileage);
  }
);

When(
  "European Quote Without windscreenrepair and without incident I enter the estimated value",
  () => {
    cy.get("#quotation_vehicle_attributes_value").type(userData.vehilceValue);
  }
);

When(
  "European Quote Without windscreenrepair and without incident I select the Parking Location",
  () => {
    cy.get("#quotation_vehicle_attributes_parkinglocation").select(
      userData.parkingType.garage
    );
  }
);
When(
  "European Quote Without windscreenrepair and without incident I select the start of policy",
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
  "European Quote Without windscreenrepair and without incident I click Calculate Premium",
  () => {
    cy.get(".btn-default").click();
  }
);

Then(
  "European Quote Without windscreenrepair and without incident Premium will be displayed",
  () => {
    cy.get("#calculatedpremium").should(
      "contain",
      (userData.vehilceValue * 4) / 100 -
        (30 / 100) * ((userData.vehilceValue * 4) / 100)
    );
  }
);

Given(
  "European Quote Without windscreenrepair and with incident I click on the Request Quotation button",
  () => {
    cy.get("#ui-id-2").click();
  }
);

When(
  "European Quote Without windscreenrepair and with incident I select breakdowncover as European",
  () => {
    cy.get("#quotation_breakdowncover").select(
      userData.breakDownCoverType.european
    );
  }
);

When(
  "European Quote Without windscreenrepair and with incident I select the windscreenrepair as no",
  () => {
    cy.get("#quotation_windscreenrepair_f").check("No");
  }
);

When(
  "European Quote Without windscreenrepair and with incident I enter the Incident",
  () => {
    cy.get("#quotation_incidents").type(userData.incident);
  }
);

When(
  "European Quote Without windscreenrepair and with incident I enter the registration",
  () => {
    cy.get("#quotation_vehicle_attributes_registration").type(
      userData.vehicleRego
    );
  }
);

When(
  "European Quote Without windscreenrepair and with incident I enter the annual mileage",
  () => {
    cy.get("#quotation_vehicle_attributes_mileage").type(userData.mileage);
  }
);

When(
  "European Quote Without windscreenrepair and with incident I enter the estimated value",
  () => {
    cy.get("#quotation_vehicle_attributes_value").type(userData.vehilceValue);
  }
);

When(
  "European Quote Without windscreenrepair and with incident I select the Parking Location",
  () => {
    cy.get("#quotation_vehicle_attributes_parkinglocation").select(
      userData.parkingType.garage
    );
  }
);

When(
  "European Quote Without windscreenrepair and with incident I select the start of policy",
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
  "European Quote Without windscreenrepair and with incident I click Calculate Premium",
  () => {
    cy.get(".btn-default").click();
  }
);

Then(
  "European Quote Without windscreenrepair and with incident Premium will be displayed",
  () => {
    cy.get("#calculatedpremium").should(
      "contain",
      (userData.vehilceValue * 4) / 100
    );
  }
);

Given(
  "European With windscreenrepair and with incident I click on the Request Quotation button",
  () => {
    cy.get("#ui-id-2").click();
  }
);

When(
  "European With windscreenrepair and with incident I select breakdowncover as European",
  () => {
    cy.get("#quotation_breakdowncover").select(
      userData.breakDownCoverType.european
    );
  }
);

When(
  "European With windscreenrepair and with incident I select the windscreenrepair as yes",
  () => {
    cy.get("#quotation_windscreenrepair_t").check("Yes");
  }
);

When(
  "European With windscreenrepair and with incident I enter the Incident",
  () => {
    cy.get("#quotation_incidents").type(userData.incident);
  }
);

When(
  "European With windscreenrepair and with incident I enter the registration",
  () => {
    cy.get("#quotation_vehicle_attributes_registration").type(
      userData.vehicleRego
    );
  }
);

When(
  "European With windscreenrepair and with incident I enter the annual mileage",
  () => {
    cy.get("#quotation_vehicle_attributes_mileage").type(userData.mileage);
  }
);

When(
  "European With windscreenrepair and with incident I enter the estimated value",
  () => {
    cy.get("#quotation_vehicle_attributes_value").type(userData.vehilceValue);
  }
);

When(
  "European With windscreenrepair and with incident I select the Parking Location",
  () => {
    cy.get("#quotation_vehicle_attributes_parkinglocation").select(
      userData.parkingType.garage
    );
  }
);
When(
  "European With windscreenrepair and with incident I select the start of policy",
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
  "European With windscreenrepair and with incident I click Calculate Premium",
  () => {
    cy.get(".btn-default").click();
  }
);

Then(
  "European With windscreenrepair and with incident Premium will be displayed",
  () => {
    cy.get("#calculatedpremium").should(
      "contain",
      (userData.vehilceValue * 4) / 100 + 30
    );
  }
);
