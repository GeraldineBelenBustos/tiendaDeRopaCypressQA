// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add("search", (value) => {
  // 1. Comando personalizado "cy.search" definido con el nombre "search" y un parámetro "value".

  cy.fixture("index").then((index) => {
    // 2. Cargando el archivo de fixture "index" para obtener datos relacionados con la búsqueda.

    cy.get(index.searchBox).type(value);
    // 3. Obteniendo el elemento de la caja de búsqueda usando el selector almacenado en "index.searchBox".
    // 4. Escribiendo el valor "value" (término de búsqueda) en la caja de búsqueda.

    cy.get(index.searchButton).click();
    // 5. Obteniendo el botón de búsqueda usando el selector almacenado en "index.searchButton".
    // 6. Haciendo clic en el botón de búsqueda para iniciar la búsqueda.
  });
});
