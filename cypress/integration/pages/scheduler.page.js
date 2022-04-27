import { PageCheck } from "../helpers/pageCheck";

class SchedulerPage extends PageCheck {
    redirectByNavRef() {
        const pageCheck = new PageCheck;
        pageCheck.redirectByNavRef(`[ng-click="setView('scheduler')"]`);
    };

    url() {
        const pageCheck = new PageCheck;
        pageCheck.url('scheduler');
    };

    getUniqueElement() {
        const pageCheck = new PageCheck;
        pageCheck.getUniqueElement('[ng-click="addSchedulerEntry()"]', 'New task');
    };
}

export default new SchedulerPage();