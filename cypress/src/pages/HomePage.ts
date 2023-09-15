import 'cypress-soft-assertions'

export default class HomePage {
  elements = {
    studentsCard: () => cy.getBySel("stud_card"),
    professionalCard: () => cy.getBySel("prof_card")
  }

  visit() {
    cy.visit('/');
  }

  navigateToStudentsPortal() {
    return this.elements.studentsCard().click()
  }

  navigateToProfessionalPortal() {
    return this.elements.professionalCard().click()
  }

  validateCardsLinks() {
    this.elements.studentsCard().should("contain.text", "Estudiante").and("have.attr", "href", "/preplay");
    this.elements.professionalCard().better("have.text", "Profesional").and("have.attr", "href", "/controlpanel");
    return this;
  }
}
