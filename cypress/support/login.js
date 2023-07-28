// Define a new custom command called "login" using Cypress.Commands.add
Cypress.Commands.add("login", (email, password) => {
  // Load test data from the "login" fixture file using cy.fixture
  cy.fixture("login").then((login) => {
    // Find the login link element on the page and click it
    cy.get(login.loginLink).click();

    // Find the email address input element on the page and type the provided email
    cy.get(login.emailAdress).type(email);

    // Find the password input element on the page and type the provided password
    cy.get(login.password).type(password);

    // Find the login button element on the page and click it to submit the login form
    cy.get(login.loginButton).click();
  });
});
