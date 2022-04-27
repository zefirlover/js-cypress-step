import { PageCheck } from "../helpers/pageCheck";

class ParametersPage extends PageCheck {
    redirectByNavRef() {
        const pageCheck = new PageCheck;
        pageCheck.redirectByNavRef(`[ng-click="setView('parameters')"]`);
    };

    url() {
        const pageCheck = new PageCheck;
        pageCheck.url('parameters');
    };

    getUniqueElement() {
        const pageCheck = new PageCheck;
        pageCheck.getUniqueElement('[ng-click="addParameter()"]', 'New parameter');
    };
}

export default new ParametersPage();