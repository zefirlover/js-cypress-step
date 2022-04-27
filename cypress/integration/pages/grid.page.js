import { PageCheck } from "../helpers/pageCheck";

class GridPage extends PageCheck {
    redirectByNavRef() {
        const pageCheck = new PageCheck;
        pageCheck.redirectByNavRef(`[ng-click="setView('grid')"]`);
    };

    url() {
        const pageCheck = new PageCheck;
        pageCheck.url('grid');
    };

    getUniqueElement() {
        const pageCheck = new PageCheck;
        pageCheck.getUniqueElement('[ng-click="select($event)"]', 'Agents');
    };
}

export default new GridPage();