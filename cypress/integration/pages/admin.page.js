import { PageCheck } from "../helpers/pageCheck";

class GridPage extends PageCheck {
    redirectByNavRef() {
        const pageCheck = new PageCheck;
        pageCheck.redirectByNavRef(`[ng-click="setView('admin')"]`);
    };

    url() {
        const pageCheck = new PageCheck;
        pageCheck.url('admin');
    };

    getUniqueElement() {
        const pageCheck = new PageCheck;
        pageCheck.getUniqueElement('[ng-click="addUser()"]', 'Add user');
    };
}

export default new GridPage();