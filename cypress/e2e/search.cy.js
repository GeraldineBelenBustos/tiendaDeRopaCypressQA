describe("search element", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("search for elements with multiples results", () => {
    cy.search("dress"); //cambio el codigo anterior por este comando
    cy.fixture("searchResults").then((searchResults) => {
      cy.get(searchResults.title).should("contain", "dress");
    });
  });
  it("search for elements with no results", () => {
    cy.search("querty"); //cambio el codigo anterior por este comando
    cy.fixture("searchResults").then((searchResults) => {
      cy.get(searchResults.alert).should(
        "contain",
        "No results were found for your search"
      );
    });
  });
});
