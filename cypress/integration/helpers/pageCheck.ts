export class PageCheck {
    redirectByNavRef(navElementXpath: string) {
        cy.get(navElementXpath).click();
    }

    url(containsWord: string) {
        cy.url().should('contain', containsWord);
    }

    getUniqueElement(elementXpath: string, containedText: string) {
        cy.get(elementXpath).contains(containedText);
    }
}