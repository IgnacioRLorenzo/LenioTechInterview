import HomePage from "../src/pages/HomePage"

const homePage = new HomePage()
describe('Test home page. Access to Student and Professional portals', () => {

    beforeEach(() => {
        cy.visit("/");
    })

    it('Test Home page cards', () => {
        homePage.elements.studentsCard().should("contain.text", "Estudiante").and("have.attr", "href", "/preplay");
        homePage.elements.professionalCard().better("have.text", "Profesional").and("have.attr", "href", "/controlpanel");
    })

    it('Test students screen and navigation', () => {
        homePage.navigateToStudentsPortal()
        cy.url().should("contain", "/preplay")
    })

    // it('Test professional screen and navigation when user is not logged', () => {
    //     cy.visit('https://example.cypress.io')
    // })

    // it('Test professional screen and navigation when user is logged', () => {
    //     cy.visit('https://example.cypress.io')
    // })
})