import { PageCheck } from '../helpers/pageCheck';

class KeywordsPage extends PageCheck {
    redirectByNavRef() {
        const pageCheck = new PageCheck;
        pageCheck.redirectByNavRef(`[ng-click="setView('functions')"]`);
    };

    url() {
        const pageCheck = new PageCheck;
        pageCheck.url('functions');
    };

    getUniqueElement() {
        const pageCheck = new PageCheck;
        pageCheck.getUniqueElement('[ng-click="addFunction()"]', 'New keyword');
    };
}

export default new KeywordsPage();