import LoginPage from "../../src/pages/LoginPage"
import Header from "../../src/components/Header"

const loginPage = new LoginPage()
const header = new Header()
describe('Test login page.', () => {

    let loginData = {}; //TODO: Set a particular type for this data
    before(() => {
        cy.fixture("loginData").then((data) => {
            loginData = data
        })

    })

    beforeEach(() => {
        cy.intercept("POST", "/login").as("login");
        cy.visit("/login");
    })

    it('Test Login default screen: Labels, Login button and Logout button hidden', () => {
        // TODO: Open defect for repeated label. Using contain instead of have.text for now
        loginPage.elements.usernameLabel().should("contain", loginData.usernameLabel)
        loginPage.elements.passwordLabel().should("have.text", loginData.passwordLabel)
        header.elements.logoutButton().should("not.exist")
        header.elements.cornerButton().click()
        header.elements.logoutButton().should("have.text", loginData.logoutButtonText)
    })

    it('Test login/logout/login with another user', () => {
        loginPage.login(loginData.username1, loginData.password1)
        cy.wait("@login")
        header.elements.cornerButton().should("have.text", loginData.fullName1)
        header.logout()
        loginPage.navigate()
        loginPage.login(loginData.username2, loginData.password2)
        cy.wait("@login")
        header.elements.cornerButton().should("have.text", loginData.fullName2)

    })

})