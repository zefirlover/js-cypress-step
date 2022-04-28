import SignInPage from "./pages/signIn.page"

class HelperFunctions {
    checkDisplay(page) {
        SignInPage.checkLogin();
        page.redirectByNavRef();
        page.url();
        page.getUniqueElement();
    }
}

export default new HelperFunctions();