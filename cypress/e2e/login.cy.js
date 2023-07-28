describe("login", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("Login with incorrect email address", () => {
    cy.login("something", "somethingPassword");
    cy.fixture("login").then((login) => {
      cy.get(login.incorrectLoginBanner).should(
        "contain",
        "Invalid email address"
      );
    });
  });
});
