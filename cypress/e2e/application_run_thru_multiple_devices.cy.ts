const sizes: Array<Cypress.ViewportPreset> = [
    'iphone-6',
    'iphone-xr',
    'ipad-2',
    'macbook-15',
];

it('home page loads, all expected content is visible, enabled, and contains proper text', function () {
    sizes.forEach((size) => {
        cy.viewport(size);
        cy.visit('/');
        cy.get('body').should('be.visible');
        cy.get('#title').should('be.visible');
        cy.get('#title').should('have.text', 'PYSWAPI');
        cy.get('#subtitle').should('be.visible');
        cy.get('#subtitle').should('have.text', 'The Python Star Wars API');
        cy.get('#search-bar').should('be.visible');
        cy.get('#search-bar').should('be.enabled');
        cy.get('#select').should('be.visible');
        cy.get('#select').should('have.text', 'Characters');
        cy.get('#search-button').should('be.visible');
        cy.get('#search-button').should('be.enabled');
        cy.get('#search-button').should('have.text', 'Search');
    });
});

it('User can type into search input', function () {
    sizes.forEach((size) => {
        cy.viewport(size);
        cy.visit('/');
        cy.get('#search-bar').click();
        cy.get('#search-bar').clear();
        cy.get('#search-bar').type('Mace Windu');
        cy.get('#search-bar').should('have.value', 'Mace Windu');
        cy.get('#search-bar').should('be.visible');
        cy.get('#search-bar').should('be.enabled');
    });
});

it('User can change search types', function () {
    sizes.forEach((size) => {
        cy.viewport(size);
        cy.visit('/');
        cy.get('#select').click();
        cy.get('#\\:r3\\:').should('be.visible');
        cy.get('#\\:r3\\:').should(
            'have.text',
            'CharactersVehiclesPlanetsMoviesSpecies'
        );
        cy.get('#\\:r3\\: [data-value="vehicles"]').click();
        cy.get('#select').should('have.text', 'Vehicles');
        cy.get('#select').click();
        cy.get('#\\:r3\\: [data-value="planets"]').click();
        cy.get('#select').should('have.text', 'Planets');
        cy.get('#select').click();
        cy.get('#\\:r3\\: [data-value="movies"]').click();
        cy.get('#select').should('have.text', 'Movies');
        cy.get('#select').click();
        cy.get('#\\:r3\\: [data-value="species"]').click();
        cy.get('#select').should('have.text', 'Species');
        cy.get('#select').click();
        cy.get('#\\:r3\\: [data-value="characters"]').click();
        cy.get('#select').should('have.text', 'Characters');
    });
});

it('search functionality for characters works and is rendered correctly, also test scrollable results in this test', function () {
    sizes.forEach((size) => {
        cy.intercept('GET', '/characters').as('getAllCharactersRequest');
        cy.intercept('GET', '/characters/luke%20skywalker').as(
            'getCharacterRequest'
        );
        cy.viewport(size);
        cy.visit('/');
        cy.get('#search-button').click();
        cy.wait('@getAllCharactersRequest').then((interception) => {
            expect(interception.request.url).to.contain('/characters');
            cy.get('#table-container').should('be.visible');
            cy.get('.result-entry-card').should('have.length', 82);
            cy.get('.result-entry-image').should('have.length', 82);
            cy.get('.result-entry-card:nth-of-type(1) div:nth-child(2)').should(
                'have.text',
                'Luke SkywalkerLuke Skywalker is the protagonist of the original Star Wars trilogy, a young farm boy from Tatooine who discovers his destiny as a Jedi Knight and becomes a hero of the Rebel Alliance.gendermalehair colorblondeeye colorbluebirth year19home planet id1skin colorwhiteheight172weight77character home planetTatooine'
            );
            cy.get('div:nth-child(1) .result-entry-image').should('be.visible');
            cy.get('#table-container').scrollTo('bottom');
            cy.get(
                '#table-container div:nth-child(82) .result-entry-image'
            ).should('be.visible');
            cy.get(
                '#table-container div:nth-child(82) div:nth-child(2) div'
            ).should('be.visible');
            cy.get(
                '#table-container div:nth-child(82) div:nth-child(2) div'
            ).should('have.text', 'Tion Medon');
        });
        cy.get('#search-bar').click();
        cy.get('#search-bar').clear();
        cy.get('#search-bar').type('luke skywalker');
        cy.get('#search-button').click();
        cy.wait('@getCharacterRequest').then((interception) => {
            expect(interception.request.url).to.contain(
                '/characters/luke%20skywalker'
            );
            cy.get('#table-container').should('be.visible');
            cy.get('.result-entry-card').should('have.length', 1);
            cy.get('.result-entry-image').should('have.length', 1);
        });
    });
});

it('search functionality for vehicles works and is rendered correctly', function () {
    sizes.forEach((size) => {
        cy.viewport(size);
        cy.visit('/');
        cy.intercept('GET', '/vehicles').as('getAllVehiclesRequest');
        cy.intercept('GET', '/vehicles/CR90%20corvette').as(
            'getVehicleRequest'
        );
        cy.get('#select').click();
        cy.get('#\\:r3\\: [data-value="vehicles"]').click();
        cy.get('#search-button').click();
        cy.wait('@getAllVehiclesRequest').then((interception) => {
            expect(interception.request.url).to.contain('/vehicles');
            cy.get('#table-container').should('be.visible');
            cy.get('.result-entry-card').should('have.length', 75);
            cy.get('.result-entry-image').should('have.length', 75);
            cy.get('.result-entry-card:nth-of-type(1) div:nth-child(2)').should(
                'have.text',
                'CR90 corvetteThe CR90 corvette is a small, versatile starship manufactured by Corellian Engineering Corporation. Also known as the Corellian corvette or the Blockade Runner, it is a popular vessel used by various factions, including the Galactic Republic, the Rebel Alliance, and various planetary defense forces. It boasts a powerful engine array for its size, making it one of the fastest ships in the galaxy. While lightly armed for a warship, with just a few turbolaser cannons, its speed and maneuverability make it an effective vessel for diplomatic missions, reconnaissance, and fast-strike scenarios.cargo capacity3000000modelCR90 corvettelength150manufacturerCorellian Engineering Corporation'
            );
        });
        cy.get('#search-bar').click();
        cy.get('#search-bar').clear();
        cy.get('#search-bar').type('CR90 corvette');
        cy.get('#search-button').click();
        cy.wait('@getVehicleRequest').then((interception) => {
            expect(interception.request.url).to.contain(
                '/vehicles/CR90%20corvette'
            );
            cy.get('#table-container').should('be.visible');
            cy.get('.result-entry-card').should('have.length', 1);
            cy.get('.result-entry-image').should('have.length', 1);
        });
    });
});

it('search functionality for planets works and is rendered correctly', function () {
    sizes.forEach((size) => {
        cy.viewport(size);
        cy.visit('/');
        cy.intercept('GET', '/planets').as('getAllPlanetsRequest');
        cy.intercept('GET', '/planets/Tatooine').as('getPlanetRequest');
        cy.get('#select').click();
        cy.get('#\\:r3\\: [data-value="planets"]').click();
        cy.get('#search-button').click();
        cy.wait('@getAllPlanetsRequest').then((interception) => {
            expect(interception.request.url).to.contain('/planets');
            cy.get('#table-container').should('be.visible');
            cy.get('.result-entry-card').should('have.length', 60);
            cy.get('.result-entry-image').should('have.length', 60);
            cy.get('.result-entry-card:nth-of-type(1) div:nth-child(2)').should(
                'have.text',
                'TatooineTatooine is a desert planet in the Star Wars galaxy, known for its harsh, arid climate and binary sunsets. It is the home planet of Anakin and Luke Skywalker, characterized by vast, sandy dunes and rocky canyons, with settlements like Mos Eisley and Mos Espa.surface water1rotation period23gravity1population200000climateariddiameter10465terraindesertorbital period304species of planetDroidcharacters from planetLuke SkywalkerC-3PODarth VaderOwen LarsBeru Whitesun larsR5-D4Biggs DarklighterAnakin SkywalkerShmi SkywalkerCliegg Lars'
            );
        });
        cy.get('#search-bar').click();
        cy.get('#search-bar').clear();
        cy.get('#search-bar').type('Tatooine');
        cy.get('#search-button').click();
        cy.wait('@getPlanetRequest').then((interception) => {
            expect(interception.request.url).to.contain('/planets/Tatooine');
            cy.get('#table-container').should('be.visible');
            cy.get('.result-entry-card').should('have.length', 1);
            cy.get('.result-entry-image').should('have.length', 1);
        });
    });
});

it('search functionality for movies works and is rendered correctly', function () {
    sizes.forEach((size) => {
        cy.viewport(size);
        cy.visit('/');
        cy.intercept('GET', '/movies').as('getAllMoviesRequest');
        cy.intercept('GET', '/movies/revenge%20of%20the%20sith').as(
            'getMovieRequest'
        );
        cy.get('#select').click();
        cy.get('#\\:r3\\: [data-value="movies"]').click();
        cy.get('#search-button').click();
        cy.wait('@getAllMoviesRequest').then((interception) => {
            expect(interception.request.url).to.contain('/movies');
            cy.get('#table-container').should('be.visible');
            cy.get('.result-entry-card').should('have.length', 6);
            cy.get('.result-entry-image').should('have.length', 6);
            cy.get('.result-entry-card:nth-of-type(1) div:nth-child(2)').should(
                'have.text',
                "A New HopeNineteen years after the formation of the Empire, young farm boy Luke Skywalker (Mark Hamill) is thrust into the struggle of the Rebel Alliance when he meets Obi-Wan Kenobi (Alec Guinness), who has lived for years in seclusion on the desert planet of Tatooine. Obi-Wan begins Luke's Jedi training as Luke joins him on a daring mission to rescue the beautiful Rebel leader Princess Leia (Carrie Fisher) from the clutches of Darth Vader (voiced by James Earl Jones) and the evil Empire.opening crawlIt is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....directorGeorge Lucasrelease date1977-05-25producerGary Kurtz, Rick McCallumsaga order number4species in movieHumanDroidWookieRodianHuttcharacters in movieLuke SkywalkerC-3POR2-D2Darth VaderLeia OrganaOwen LarsBeru Whitesun larsR5-D4Biggs DarklighterObi-Wan KenobiWilhuff TarkinChewbaccaHan SoloGreedoJabba Desilijic TiureWedge AntillesJek Tono PorkinsRaymus Antillesplanets in movieTatooineAlderaanYavin IVvehicles in movieSand CrawlerT-16 skyhopperX-34 landspeederTIE/LN starfighter"
            );
        });
        cy.get('#search-bar').click();
        cy.get('#search-bar').clear();
        cy.get('#search-bar').type('revenge of the sith');
        cy.get('#search-button').click();
        cy.wait('@getMovieRequest').then((interception) => {
            expect(interception.request.url).to.contain(
                '/movies/revenge%20of%20the%20sith'
            );
            cy.get('#table-container').should('be.visible');
            cy.get('.result-entry-card').should('have.length', 1);
            cy.get('.result-entry-image').should('have.length', 1);
        });
    });
});

it('search functionality for species works and is rendered correctly', function () {
    sizes.forEach((size) => {
        cy.viewport(size);
        cy.visit('/');
        cy.intercept('GET', '/species').as('getAllSpeciesRequest');
        cy.intercept('GET', '/species/human').as('getSpeciesRequest');
        cy.get('#select').click();
        cy.get('#\\:r3\\: [data-value="species"]').click();
        cy.get('#search-button').click();
        cy.wait('@getAllSpeciesRequest').then((interception) => {
            expect(interception.request.url).to.contain('/species');
            cy.get('#table-container').should('be.visible');
            cy.get('.result-entry-card').should('have.length', 37);
            cy.get('.result-entry-image').should('have.length', 37);
            cy.get('.result-entry-card:nth-of-type(1) div:nth-child(2)').should(
                'have.text',
                "HumanHumans were the galaxy's most numerous and politically dominant sentient species with millions of major and minor colonies galaxywide. Believed to have originated on the galactic capital of Coruscant, they could be found anywhere, engaged in many different pursuits: spacers, mercenaries, smugglers, merchants, soldiers, assassins, farmers, crime lords, laborers, slaves, slavers, and many others, including Jedi. Since Humans were the most common sentient species, they were often considered to be a standard or average to which the biology, psychology, and culture of other species were compared.designationsentientskin colorscaucasian, black, asian, hispaniclanguageGalactic Basicaverage height180classificationmammaleye colorsbrown, blue, green, hazel, grey, amberhair colorsblonde, brown, black, redaverage lifespan120planet id9species home planetCoruscantspecies charactersDorméDookuBail Prestor OrganaJocasta Nu"
            );
        });
        cy.get('#search-bar').click();
        cy.get('#search-bar').clear();
        cy.get('#search-bar').type('human');
        cy.get('#search-button').click();
        cy.wait('@getSpeciesRequest').then((interception) => {
            expect(interception.request.url).to.contain('/species/human');
            cy.get('#table-container').should('be.visible');
            cy.get('.result-entry-card').should('have.length', 1);
            cy.get('.result-entry-image').should('have.length', 1);
        });
    });
});
