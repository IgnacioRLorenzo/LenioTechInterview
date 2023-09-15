export default class LoginPage {

  elements = {
    usernameInput: () => cy.getBySel("username_input").as("usernameInput"),
    usernameLabel: () => cy.getBySel("username_input").within(() => cy.get("label")),
    passwordInput: () => cy.getBySel("password_input").as("passwordInput"),
    passwordLabel: () => this.elements.passwordInput().get("legend div"),
    loginButton: () => cy.getBySel("login_button")
  }

  navigate() {
    cy.visit('/login');
  }

  login(username: string, password: string) {
    this.elements.usernameInput().type(username)
    this.elements.passwordInput().type(password)
    return this.elements.loginButton().click()
  }

  validateFormLabels(formData) { // TODO: Check type of FormData for this case
    this.elements.usernameLabel().should("have.text", formData.usernameLabel)
    this.elements.passwordLabel().should("have.text", formData.passwordLabel)
    return this
  }
}
