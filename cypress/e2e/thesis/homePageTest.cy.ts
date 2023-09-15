import HomePage from "../../src/pages/HomePage"

const homePage = new HomePage()
describe('Test home page. Access to Student and Professional portals', () => {

    beforeEach(() => {
        cy.visit("/");
    })

    it.only('Test Home page cards', () => {
        homePage.elements.studentsCard().should("contain.text", "Estudiante").and("have.attr", "href", "/preplay");
        homePage.elements.professionalCard().should("contain.text", "Profesional").and("have.attr", "href", "/controlpanel");
    })

    it.only('Test students screen and navigation', () => {
        homePage.navigateToStudentsPortal()
        cy.url().should("contain", "/preplay")
    })
})