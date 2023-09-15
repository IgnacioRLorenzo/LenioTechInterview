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
}
