import 'cypress-soft-assertions'

export default class Header {
  elements = {
    cornerButton: () => cy.get(".MuiIconButton-edgeEnd"),
    logoutButton: () => cy.get("[role=menuitem]").contains("Salir"),
  }

  logout() {
    this.elements.cornerButton().click()
    this.elements.logoutButton().click()
    return this;
  }
}
