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
        cy.visit("/login");
    })

    it('Test Login default screen: Labels, Login button and Logout button hidden', () => {
        loginPage.validateFormLabels(loginData)
        header.elements.logoutButton().should("not.have.text", loginData.loginButtonText)
    })

    it('Test login/logout/login with another user', () => {
        loginPage.login(loginData.username1, loginData.password1)
        header.logout()
        loginPage.navigate()
        loginPage.login(loginData.username2, loginData.password2)

    })

})