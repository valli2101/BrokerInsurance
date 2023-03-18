/// <reference types="cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import userData from "../userData";

Given(
  "With windscreenrepair and without incident I click on the Request Quotation button",
  () => {
    cy.get("#ui-id-2").click();
  }
);

When(
  "With windscreenrepair and without incident I select breakdowncover as Roadside",
  () => {
    cy.get("#quotation_breakdowncover").select(
      userData.breakDownCoverType.roadside
    );
  }
);

When(
  "With windscreenrepair and without incident I select the windscreenrepair as yes",
  () => {
    cy.get("#quotation_windscreenrepair_t").check("Yes");
  }
);

When(
  "With windscreenrepair and without incident I dont enter the Incident",
  () => {
    cy.get("#quotation_incidents");
  }
);

When(
  "With windscreenrepair and without incident I enter the registration",
  () => {
    cy.get("#quotation_vehicle_attributes_registration").type(
      userData.vehicleRego
    );
  }
);

When(
  "With windscreenrepair and without incident I enter the annual mileage",
  () => {
    cy.get("#quotation_vehicle_attributes_mileage").type(userData.mileage);
  }
);

When(
  "With windscreenrepair and without incident I enter the estimated value",
  () => {
    cy.get("#quotation_vehicle_attributes_value").type(userData.vehilceValue);
  }
);

When(
  "With windscreenrepair and without incident I select the Parking Location",
  () => {
    cy.get("#quotation_vehicle_attributes_parkinglocation").select(
      userData.parkingType.garage
    );
  }
);

When(
  "With windscreenrepair and without incident I select the start of policy",
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
  "With windscreenrepair and without incident I click Calculate Premium",
  () => {
    cy.get(".btn-default").click();
  }
);

Then(
  "With windscreenrepair and without incident Premium will be displayed",
  () => {
    cy.get("#calculatedpremium").should(
      "contain",
      (userData.vehilceValue * 2) / 100 -
        (30 / 100) * ((userData.vehilceValue * 2) / 100) +
        21
    );
  }
);

Given(
  "Without windscreenrepair and without incident I click on the Request Quotation button",
  () => {
    cy.get("#ui-id-2").click();
  }
);

When(
  "Without windscreenrepair and without incident I select breakdowncover as Roadside",
  () => {
    cy.get("#quotation_breakdowncover").select(
      userData.breakDownCoverType.roadside
    );
  }
);

When(
  "Without windscreenrepair and without incident I select the windscreenrepair as no",
  () => {
    cy.get("#quotation_windscreenrepair_f").check("No");
  }
);

When(
  "Without windscreenrepair and without incident I dont enter the Incident",
  () => {
    cy.get("#quotation_incidents");
  }
);

When(
  "Without windscreenrepair and without incident I enter the registration",
  () => {
    cy.get("#quotation_vehicle_attributes_registration").type(
      userData.vehicleRego
    );
  }
);

When(
  "Without windscreenrepair and without incident I enter the annual mileage",
  () => {
    cy.get("#quotation_vehicle_attributes_mileage").type(userData.mileage);
  }
);

When(
  "Without windscreenrepair and without incident I enter the estimated value",
  () => {
    cy.get("#quotation_vehicle_attributes_value").type(userData.vehilceValue);
  }
);

When(
  "Without windscreenrepair and without incident I select the Parking Location",
  () => {
    cy.get("#quotation_vehicle_attributes_parkinglocation").select(
      userData.parkingType.garage
    );
  }
);
When(
  "Without windscreenrepair and without incident I select the start of policy",
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
  "Without windscreenrepair and without incident I click Calculate Premium",
  () => {
    cy.get(".btn-default").click();
  }
);

Then(
  "Without windscreenrepair and without incident Premium will be displayed",
  () => {
    cy.get("#calculatedpremium").should(
      "contain",
      (userData.vehilceValue * 2) / 100 -
        (30 / 100) * ((userData.vehilceValue * 2) / 100)
    );
  }
);

Given(
  "Without windscreenrepair and with incident I click on the Request Quotation button",
  () => {
    cy.get("#ui-id-2").click();
  }
);

When(
  "Without windscreenrepair and with incident I select breakdowncover as Roadside",
  () => {
    cy.get("#quotation_breakdowncover").select(
      userData.breakDownCoverType.roadside
    );
  }
);

When(
  "Without windscreenrepair and with incident I select the windscreenrepair as no",
  () => {
    cy.get("#quotation_windscreenrepair_f").check("No");
  }
);

When("Without windscreenrepair and with incident I enter the Incident", () => {
  cy.get("#quotation_incidents").type("2");
});

When(
  "Without windscreenrepair and with incident I enter the registration",
  () => {
    cy.get("#quotation_vehicle_attributes_registration").type(
      userData.vehicleRego
    );
  }
);

When(
  "Without windscreenrepair and with incident I enter the annual mileage",
  () => {
    cy.get("#quotation_vehicle_attributes_mileage").type(userData.mileage);
  }
);

When(
  "Without windscreenrepair and with incident I enter the estimated value",
  () => {
    cy.get("#quotation_vehicle_attributes_value").type(userData.vehilceValue);
  }
);

When(
  "Without windscreenrepair and with incident I select the Parking Location",
  () => {
    cy.get("#quotation_vehicle_attributes_parkinglocation").select(
      userData.parkingType.garage
    );
  }
);

When(
  "Without windscreenrepair and with incident I select the start of policy",
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
  "Without windscreenrepair and with incident I click Calculate Premium",
  () => {
    cy.get(".btn-default").click();
  }
);

Then(
  "Without windscreenrepair and with incident Premium will be displayed",
  () => {
    cy.get("#calculatedpremium").should(
      "contain",
      (userData.vehilceValue * 2) / 100
    );
  }
);

Given(
  "With windscreenrepair and with incident I click on the Request Quotation button",
  () => {
    cy.get("#ui-id-2").click();
  }
);

When(
  "With windscreenrepair and with incident I select breakdowncover as Roadside",
  () => {
    cy.get("#quotation_breakdowncover").select(
      userData.breakDownCoverType.roadside
    );
  }
);

When(
  "With windscreenrepair and with incident I select the windscreenrepair as yes",
  () => {
    cy.get("#quotation_windscreenrepair_t").check("Yes");
  }
);

When("With windscreenrepair and with incident I enter the Incident", () => {
  cy.get("#quotation_incidents").type("2");
});

When("With windscreenrepair and with incident I enter the registration", () => {
  cy.get("#quotation_vehicle_attributes_registration").type(
    userData.vehicleRego
  );
});

When(
  "With windscreenrepair and with incident I enter the annual mileage",
  () => {
    cy.get("#quotation_vehicle_attributes_mileage").type(userData.mileage);
  }
);

When(
  "With windscreenrepair and with incident I enter the estimated value",
  () => {
    cy.get("#quotation_vehicle_attributes_value").type(userData.vehilceValue);
  }
);

When(
  "With windscreenrepair and with incident I select the Parking Location",
  () => {
    cy.get("#quotation_vehicle_attributes_parkinglocation").select(
      userData.parkingType.garage
    );
  }
);
When(
  "With windscreenrepair and with incident I select the start of policy",
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
  "With windscreenrepair and with incident I click Calculate Premium",
  () => {
    cy.get(".btn-default").click();
  }
);

Then(
  "With windscreenrepair and with incident Premium will be displayed",
  () => {
    cy.get("#calculatedpremium").should(
      "contain",
      (userData.vehilceValue * 2) / 100 + 30
    );
  }
);
