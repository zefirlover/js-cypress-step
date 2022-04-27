class PlansPage {
    url() {
        cy.url().should('contain', 'plans');
    }

    getNewPlanButton() {
        cy.get('[ng-click="addPlan()"]').contains('New plan');
    }
}

export default new PlansPage();