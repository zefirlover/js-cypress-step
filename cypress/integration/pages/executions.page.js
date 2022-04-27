import { PageCheck } from "../helpers/pageCheck";

class ExecutionsPage extends PageCheck {
    redirectByNavRef() {
        const pageCheck = new PageCheck;
        pageCheck.redirectByNavRef(`[ng-click="setView('executions')"]`);
    };

    url() {
        const pageCheck = new PageCheck;
        pageCheck.url('executions');
    };

    getUniqueElement() {
        const pageCheck = new PageCheck;
        pageCheck.getUniqueElement('[ng-click="selectTab(tab.id)"]', 'Execution list');
    };
}

export default new ExecutionsPage();