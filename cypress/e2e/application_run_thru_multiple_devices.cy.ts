/// <reference types="cypress" />

const sizes: Array<Cypress.ViewportPreset> = [
  "iphone-xr",
  "ipad-2",
  "macbook-15",
];

it("home page loads, all expected content is visible, enabled, and contains proper text", function () {
  sizes.forEach((size) => {
    cy.viewport(size);
    cy.visit("/");
    cy.get("body").should("be.visible");
    cy.get("#title").should("be.visible");
    cy.get("#title").should("contain.text", "SWAPI");
    cy.get("#subtitle")
      .should("be.visible")
      .contains(/star wars api/i);
    cy.get("#search-bar").should("be.visible").and("be.enabled");
    cy.get("#select").should("be.visible").and("contain.text", "Characters");
    cy.get("#search-button")
      .should("be.visible")
      .and("be.enabled")
      .and("contain.text", "Search");
  });
});

it("User can type into search input", function () {
  sizes.forEach((size) => {
    cy.viewport(size);
    cy.visit("/");
    cy.get("#search-bar").type("Mace Windu");
    cy.get("#search-bar").should("have.value", "Mace Windu");
    cy.get("#search-bar").should("be.visible");
    cy.get("#search-bar").should("be.enabled");
  });
});

it("User can change search types", function () {
  sizes.forEach((size) => {
    cy.viewport(size);
    cy.visit("/");
    cy.get("#select").click({ force: true });
    cy.get('[role="listbox"]').should("be.visible");
    cy.contains('[role="option"]', "Vehicles").click({ force: true });
    cy.get("#select").should("contain.text", "Vehicles");
    cy.get("#select").click({ force: true });
    cy.contains('[role="option"]', "Planets").click({ force: true });
    cy.get("#select").should("contain.text", "Planets");
    cy.get("#select").click({ force: true });
    cy.contains('[role="option"]', "Movies").click({ force: true });
    cy.get("#select").should("contain.text", "Movies");
    cy.get("#select").click({ force: true });
    cy.contains('[role="option"]', "Species").click({ force: true });
    cy.get("#select").should("contain.text", "Species");
    cy.get("#select").click({ force: true });
    cy.contains('[role="option"]', "Characters").click({ force: true });
    cy.get("#select").should("contain.text", "Characters");
  });
});

it("search functionality for characters works and is rendered correctly, also test scrollable results in this test", function () {
  sizes.forEach((size) => {
    cy.intercept("GET", "/characters").as("getAllCharactersRequest");
    cy.intercept("GET", "/characters/luke%20skywalker").as(
      "getCharacterRequest",
    );
    cy.viewport(size);
    cy.visit("/");
    cy.get("#search-button").click({ force: true });
    cy.wait("@getAllCharactersRequest").then((interception) => {
      expect(interception.request.url).to.contain("/characters");
      cy.wait(1000);
      cy.get("#table-container").should("be.visible");
      cy.get(".result-entry-card").should("have.length", 82);
      cy.get(".result-entry-image").should("have.length", 82);
      cy.get(
        '#table-container div[aria-labelledby="result-title-1"] div.result-entry-content',
      ).should("contain.text", "Luke SkywalkerLuke");
      cy.get("div:nth-child(1) .result-entry-image").should("be.visible");
      cy.get("#table-container").scrollTo("bottom");
      cy.get(
        '#table-container div[aria-labelledby="result-title-83"] div.result-entry-image',
      ).should("be.visible");
      cy.get("#result-title-83").should("have.text", "Tion Medon");
      cy.get(
        '#table-container div[aria-labelledby="result-title-83"] div.result-entry-content',
      ).should("be.visible");
    });
    cy.get("#search-bar").type("luke skywalker");
    cy.get("#search-button").click({ force: true });
    cy.wait("@getCharacterRequest").then((interception) => {
      expect(interception.request.url).to.contain(
        "/characters/luke%20skywalker",
      );
      cy.wait(1000);
      cy.get("#table-container").should("be.visible");
      cy.get(".result-entry-card").should("have.length", 1);
      cy.get(".result-entry-image").should("have.length", 1);
    });
  });
});

it("search functionality for vehicles works and is rendered correctly", function () {
  sizes.forEach((size) => {
    cy.viewport(size);
    cy.visit("/");
    cy.intercept("GET", "/vehicles").as("getAllVehiclesRequest");
    cy.intercept("GET", "/vehicles/CR90%20corvette").as("getVehicleRequest");
    cy.get("#select").click({ force: true });
    cy.contains('[role="option"]', "Vehicles").click({ force: true });
    cy.get("#search-button").click({ force: true });
    cy.wait("@getAllVehiclesRequest").then((interception) => {
      cy.wait(1000);
      expect(interception.request.url).to.contain("/vehicles");
      cy.get("#table-container").should("be.visible");
      cy.get(".result-entry-card").should("have.length", 75);
      cy.get(".result-entry-image").should("have.length", 75);
      cy.get(
        '#table-container div[aria-labelledby="result-title-2"] div.result-entry-content',
      ).should("contain.text", "CR90 corvette");
    });
    cy.get("#search-bar").click({ force: true });
    cy.get("#search-bar").clear();
    cy.get("#search-bar").type("CR90 corvette");
    cy.get("#search-button").click({ force: true });
    cy.wait(1000);
    cy.wait("@getVehicleRequest").then((interception) => {
      expect(interception.request.url).to.contain("/vehicles/CR90%20corvette");
      cy.get("#table-container").should("be.visible");
      cy.get(".result-entry-card").should("have.length", 1);
      cy.get(".result-entry-image").should("have.length", 1);
    });
  });
});

it("search functionality for planets works and is rendered correctly", function () {
  sizes.forEach((size) => {
    cy.viewport(size);
    cy.visit("/");
    cy.intercept("GET", "/planets").as("getAllPlanetsRequest");
    cy.intercept("GET", "/planets/Tatooine").as("getPlanetRequest");
    cy.get("#select").click({ force: true });
    cy.contains('[role="option"]', "Planets").click({ force: true });
    cy.get("#search-button").click({ force: true });
    cy.wait("@getAllPlanetsRequest").then((interception) => {
      expect(interception.request.url).to.contain("/planets");
      cy.wait(1000);
      cy.get("#table-container").should("be.visible");
      cy.get(".result-entry-card").should("have.length", 60);
      cy.get(".result-entry-image").should("have.length", 60);
      cy.get(
        '#table-container div[aria-labelledby="result-title-2"] div.result-entry-content',
      ).should("contain.text", "Alderaan");
    });
    cy.get("#search-bar").click({ force: true });
    cy.get("#search-bar").clear();
    cy.get("#search-bar").type("Tatooine");
    cy.get("#search-button").click({ force: true });
    cy.wait("@getPlanetRequest").then((interception) => {
      expect(interception.request.url).to.contain("/planets/Tatooine");
      cy.wait(1000);
      cy.get("#table-container").should("be.visible");
      cy.get(".result-entry-card").should("have.length", 1);
      cy.get(".result-entry-image").should("have.length", 1);
    });
  });
});

it("search functionality for movies works and is rendered correctly", function () {
  sizes.forEach((size) => {
    cy.viewport(size);
    cy.visit("/");
    cy.intercept("GET", "/movies").as("getAllMoviesRequest");
    cy.intercept("GET", "/movies/revenge%20of%20the%20sith").as(
      "getMovieRequest",
    );
    cy.get("#select").click({ force: true });
    cy.contains('[role="option"]', "Movies").click({ force: true });
    cy.get("#search-button").click({ force: true });
    cy.wait("@getAllMoviesRequest").then((interception) => {
      expect(interception.request.url).to.contain("/movies");
      cy.wait(1000);
      cy.get("#table-container").should("be.visible");
      cy.get(".result-entry-card").should("have.length", 6);
      cy.get(".result-entry-image").should("have.length", 6);
      cy.get(
        '#table-container div[aria-labelledby="result-title-2"] div.result-entry-content',
      ).should("contain.text", "The Empire Strikes Back");
    });
    cy.get("#search-bar").click({ force: true });
    cy.get("#search-bar").clear();
    cy.get("#search-bar").type("revenge of the sith");
    cy.get("#search-button").click({ force: true });
    cy.wait("@getMovieRequest").then((interception) => {
      expect(interception.request.url).to.contain(
        "/movies/revenge%20of%20the%20sith",
      );
      cy.get("#table-container").should("be.visible");
      cy.get(".result-entry-card").should("have.length", 1);
      cy.get(".result-entry-image").should("have.length", 1);
    });
  });
});

it("search functionality for species works and is rendered correctly", function () {
  sizes.forEach((size) => {
    cy.viewport(size);
    cy.visit("/");
    cy.intercept("GET", "/species").as("getAllSpeciesRequest");
    cy.intercept("GET", "/species/human").as("getSpeciesRequest");
    cy.get("#select").click({ force: true });
    cy.contains('[role="option"]', "Species").click({ force: true });
    cy.get("#search-button").click({ force: true });
    cy.wait("@getAllSpeciesRequest").then((interception) => {
      expect(interception.request.url).to.contain("/species");
      cy.wait(1000);
      cy.get("#table-container").should("be.visible");
      cy.get(".result-entry-card").should("have.length", 37);
      cy.get(".result-entry-image").should("have.length", 37);
      cy.get(
        '#table-container div[aria-labelledby="result-title-2"] div.result-entry-content',
      ).should("contain.text", "Droid");
    });
    cy.get("#search-bar").click({ force: true });
    cy.get("#search-bar").clear();
    cy.get("#search-bar").type("human");
    cy.get("#search-button").click({ force: true });
    cy.wait("@getSpeciesRequest").then((interception) => {
      expect(interception.request.url).to.contain("/species/human");
      cy.get("#table-container").should("be.visible");
      cy.get(".result-entry-card").should("have.length", 1);
      cy.get(".result-entry-image").should("have.length", 1);
    });
  });
});

it("about page renders correctly", function () {
  sizes.forEach((size) => {
    cy.viewport(size);
    cy.visit("/about");
    cy.get("#about-page-container div:nth-child(1) div h4").should(
      "be.visible",
    );
    cy.get("#about-page-container div:nth-child(1) div h4").should(
      "have.text",
      "General Info",
    );
  });
});

it("docs page renders correctly", function () {
  sizes.forEach((size) => {
    cy.viewport(size);
    cy.visit("/docs");
    cy.wait(3);
    cy.get("#root h2.title").should("be.visible");
    cy.get("#operations-tag-characters span").should("have.text", "characters");
  });
});

it("footer renders correctly", function () {
  sizes.forEach((size) => {
    cy.viewport(size);
    cy.visit("/");
  });
  cy.get("#footer-toolbar span").should("be.visible");
  cy.get("#footer-toolbar span").should("have.text", "© 2025 Tyren Rhinehart");
});

it("navbar works as expected on pc", function () {
  cy.viewport("macbook-15");
  cy.visit("/");
  cy.get('#pc-links a[aria-label="Home"] p')
    .should("be.visible")
    .click({ force: true });
  cy.url().should("eq", Cypress.config().baseUrl + "/");
  cy.get('#pc-links a[aria-label="Documentation"] p')
    .should("be.visible")
    .click({ force: true });
  cy.url().should("eq", Cypress.config().baseUrl + "/docs");
  cy.get('#pc-links a[aria-label="About"] p')
    .should("be.visible")
    .click({ force: true });
  cy.url().should("eq", Cypress.config().baseUrl + "/about");
});

it("navbar works as expected on mobile", function () {
  cy.viewport("iphone-xr");
  cy.visit("/");
  cy.get("#nav-menu-button img").click({ force: true });
  cy.get('#menu-appbar a[href="/"] p').click({ force: true });
  cy.url().should("eq", Cypress.config().baseUrl + "/");
  cy.get("#nav-menu-button img").click({ force: true });
  cy.get('#menu-appbar a[href="/docs"] p').click({ force: true });
  cy.url().should("eq", Cypress.config().baseUrl + "/docs");
  cy.get("#nav-menu-button img").click({ force: true });
  cy.get('#menu-appbar a[href="/about"] p').click({ force: true });
  cy.url().should("eq", Cypress.config().baseUrl + "/about");
});
