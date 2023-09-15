export default class Header {
  elements = {
    cornerButton: () => cy.get(".MuiIconButton-edgeEnd"),
    logoutButton: () => cy.contains("[role=menuitem]", "Salir"),
  }

  logout() {
    this.elements.cornerButton().click()
    this.elements.logoutButton().click()
    return this;
  }
}
