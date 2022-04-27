import SignInPage from "./pages/signIn.page"
import PlansPage from "./pages/plans.page"
import KeywordsPage from "./pages/keywords.page.js";
import ParametersPage from "./pages/parameters.page.js";
import ExecutionsPage from "./pages/executions.page.js";
import SchedulerPage from "./pages/scheduler.page.js";
import GridPage from "./pages/grid.page.js";
import AdminPage from "./pages/admin.page.js";
import helperFunctions from "./helpers/helper-functions";

describe('step app tests', function () {
    it('Signing in', function () {
        SignInPage.visit();
        SignInPage.signingIn();
    });
    it('Check the Plans page displayed', function () {
        SignInPage.checkLogin();
        PlansPage.url();
        PlansPage.getNewPlanButton();
    });
    it('Check the Keywords page', function () {
        SignInPage.checkLogin();
        helperFunctions.checkDisplay(KeywordsPage);
    });
    it('Check the Parameters page', function () {
        SignInPage.checkLogin();
        helperFunctions.checkDisplay(ParametersPage);
    });
    it('Check the Executions page', function () {
        SignInPage.checkLogin();
        helperFunctions.checkDisplay(ExecutionsPage);
    });
    it('Check the Sheduler page', function () {
        SignInPage.checkLogin();
        helperFunctions.checkDisplay(SchedulerPage);
    });
    it('Check the Grid page', function () {
        SignInPage.checkLogin();
        helperFunctions.checkDisplay(GridPage);
    });
    it('Check the Admin page', function () {
        SignInPage.checkLogin();
        helperFunctions.checkDisplay(AdminPage);
    });
})