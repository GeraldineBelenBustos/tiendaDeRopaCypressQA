describe("search element", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("search for elements with multiples results", () => {
    cy.fixture("index").then((index) => {
      cy.get(index.searchBox).type("dress");
      cy.get(index.searchButton).click();
    });

    cy.fixture("searchResults").then((searchResults) => {
      cy.get(searchResults.title).should("contain", "dress");
    });
  });
  it("search for elements with no results", () => {
    cy.fixture("index").then((index) => {
      cy.get(index.searchBox).type("querty");
      cy.get(index.searchButton).click();
    });
    cy.fixture("searchResults").then((searchResults) => {
      cy.get(searchResults.alert).should(
        "contain",
        "No results were found for your search"
      );
    });
  });
});
