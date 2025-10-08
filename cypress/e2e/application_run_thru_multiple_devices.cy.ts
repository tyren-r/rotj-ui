/// <reference types="cypress" />

const sizes: Array<Cypress.ViewportPreset> = [
  "iphone-6",
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
    cy.get("#select").click();
    cy.get('[role="listbox"]').should("be.visible");
    cy.contains('[role="option"]', "Vehicles").click();
    cy.get("#select").should("contain.text", "Vehicles");
    cy.get("#select").click();
    cy.contains('[role="option"]', "Planets").click();
    cy.get("#select").should("contain.text", "Planets");
    cy.get("#select").click();
    cy.contains('[role="option"]', "Movies").click();
    cy.get("#select").should("contain.text", "Movies");
    cy.get("#select").click();
    cy.contains('[role="option"]', "Species").click();
    cy.get("#select").should("contain.text", "Species");
    cy.get("#select").click();
    cy.contains('[role="option"]', "Characters").click();
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
    cy.get("#search-button").click();
    cy.wait("@getAllCharactersRequest").then((interception) => {
      expect(interception.request.url).to.contain("/characters");
      cy.get("#table-container").should("be.visible");
      cy.get(".result-entry-card").should("have.length", 82);
      cy.get(".result-entry-image").should("have.length", 82);
      cy.get(
        '#table-container div[aria-labelledby="result-title-1"] div.result-entry-content',
      ).should(
        "have.text",
        "Luke SkywalkerLuke Skywalker is the protagonist of the original Star Wars trilogy, a young farm boy from Tatooine who discovers his destiny as a Jedi Knight and becomes a hero of the Rebel Alliance.gendermaleheight172weight77skin colorwhitehair colorblondeeye colorbluebirth year19home planet id1character home planetTatooine",
      );
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
    cy.get("#search-button").click();
    cy.wait("@getCharacterRequest").then((interception) => {
      expect(interception.request.url).to.contain(
        "/characters/luke%20skywalker",
      );
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
    cy.get("#select").click();
    cy.contains('[role="option"]', "Vehicles").click();
    cy.get("#search-button").click();
    cy.wait("@getAllVehiclesRequest").then((interception) => {
      expect(interception.request.url).to.contain("/vehicles");
      cy.get("#table-container").should("be.visible");
      cy.get(".result-entry-card").should("have.length", 75);
      cy.get(".result-entry-image").should("have.length", 75);
      cy.get(
        '#table-container div[aria-labelledby="result-title-2"] div.result-entry-content',
      ).should(
        "have.text",
        "CR90 corvetteThe CR90 corvette is a small, versatile starship manufactured by Corellian Engineering Corporation. Also known as the Corellian corvette or the Blockade Runner, it is a popular vessel used by various factions, including the Galactic Republic, the Rebel Alliance, and various planetary defense forces. It boasts a powerful engine array for its size, making it one of the fastest ships in the galaxy. While lightly armed for a warship, with just a few turbolaser cannons, its speed and maneuverability make it an effective vessel for diplomatic missions, reconnaissance, and fast-strike scenarios.modelCR90 corvettepassenger capacity600length150manufacturerCorellian Engineering Corporationcargo capacity3000000crew30price3500000max atmosphering speed950",
      );
    });
    cy.get("#search-bar").click();
    cy.get("#search-bar").clear();
    cy.get("#search-bar").type("CR90 corvette");
    cy.get("#search-button").click();
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
    cy.get("#select").click();
    cy.contains('[role="option"]', "Planets").click();
    cy.get("#search-button").click();
    cy.wait("@getAllPlanetsRequest").then((interception) => {
      expect(interception.request.url).to.contain("/planets");
      cy.get("#table-container").should("be.visible");
      cy.get(".result-entry-card").should("have.length", 60);
      cy.get(".result-entry-image").should("have.length", 60);
      cy.get(
        '#table-container div[aria-labelledby="result-title-2"] div.result-entry-content',
      ).should(
        "have.text",
        "AlderaanAlderaan was a peaceful, beautiful planet known for its lush grasslands, majestic mountains, and commitment to diplomacy and pacifism. It was the homeworld of Princess Leia Organa and a prominent member of the Galactic Republic, tragically destroyed by the Death Star.surface water40rotation period24gravity1orbital period364climatetemperatediameter12500terraingrasslands, mountainspopulation2000000000characters from planetLeia Organa,Bail Prestor Organa,Raymus Antilles",
      );
    });
    cy.get("#search-bar").click();
    cy.get("#search-bar").clear();
    cy.get("#search-bar").type("Tatooine");
    cy.get("#search-button").click();
    cy.wait("@getPlanetRequest").then((interception) => {
      expect(interception.request.url).to.contain("/planets/Tatooine");
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
    cy.get("#select").click();
    cy.contains('[role="option"]', "Movies").click();
    cy.get("#search-button").click();
    cy.wait("@getAllMoviesRequest").then((interception) => {
      expect(interception.request.url).to.contain("/movies");
      cy.get("#table-container").should("be.visible");
      cy.get(".result-entry-card").should("have.length", 6);
      cy.get(".result-entry-image").should("have.length", 6);
      cy.get(
        '#table-container div[aria-labelledby="result-title-2"] div.result-entry-content',
      ).should(
        "have.text",
        "The Empire Strikes BackSet three years after the events of Star Wars, the film recounts the battle between the malevolent Galactic Empire, led by the Emperor, and the Rebel Alliance, led by Luke Skywalker and Princess Leia. As the Empire goes on the offensive, Luke trains to master the Force so he can confront the Emperor's powerful disciple, Darth Vader.producerGary Kurtz, Rick McCallumsaga order number5opening crawlIt is a dark time for the\r\nRebellion. Although the Death\r\nStar has been destroyed,\r\nImperial troops have driven the\r\nRebel forces from their hidden\r\nbase and pursued them across\r\nthe galaxy.\r\n\r\nEvading the dreaded Imperial\r\nStarfleet, a group of freedom\r\nfighters led by Luke Skywalker\r\nhas established a new secret\r\nbase on the remote ice world\r\nof Hoth.\r\n\r\nThe evil lord Darth Vader,\r\nobsessed with finding young\r\nSkywalker, has dispatched\r\nthousands of remote probes into\r\nthe far reaches of space....directorIrvin Kershnerrelease date1980-05-17species in movieHuman,Droid,Wookie,Yoda's species,Trandoshancharacters in movieLuke Skywalker,C-3PO,R2-D2,Darth Vader,Leia Organa,Obi-Wan Kenobi,Chewbacca,Han Solo,Wedge Antilles,Yoda,Palpatine,Boba Fett,IG-88,Bossk,Lando Calrissian,Lobotplanets in movieHoth,Dagobah,Bespin,Ord Mantellvehicles in movieTIE/LN starfighter,Snowspeeder,TIE bomber,AT-AT,AT-ST,Storm IV Twin-Pod cloud car",
      );
    });
    cy.get("#search-bar").click();
    cy.get("#search-bar").clear();
    cy.get("#search-bar").type("revenge of the sith");
    cy.get("#search-button").click();
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
    cy.get("#select").click();
    cy.contains('[role="option"]', "Species").click();
    cy.get("#search-button").click();
    cy.wait("@getAllSpeciesRequest").then((interception) => {
      expect(interception.request.url).to.contain("/species");
      cy.get("#table-container").should("be.visible");
      cy.get(".result-entry-card").should("have.length", 37);
      cy.get(".result-entry-image").should("have.length", 37);
      cy.get(
        '#table-container div[aria-labelledby="result-title-2"] div.result-entry-content',
      ).should(
        "have.text",
        "DroidIn the Star Wars space opera franchise, a droid is a fictional robot possessing some degree of artificial intelligence.classificationartificialeye colorsn/ahair colorsn/aaverage lifespan100000planet id1designationsentientskin colorsn/alanguagen/aspecies home planetTatooinespecies charactersC-3PO,R2-D2,R5-D4,IG-88",
      );
    });
    cy.get("#search-bar").click();
    cy.get("#search-bar").clear();
    cy.get("#search-bar").type("human");
    cy.get("#search-button").click();
    cy.wait("@getSpeciesRequest").then((interception) => {
      expect(interception.request.url).to.contain("/species/human");
      cy.get("#table-container").should("be.visible");
      cy.get(".result-entry-card").should("have.length", 1);
      cy.get(".result-entry-image").should("have.length", 1);
    });
  });
});
