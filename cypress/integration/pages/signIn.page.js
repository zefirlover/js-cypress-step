class SignInPage {
    visit() {
        cy.visit('http://localhost:8080/');
    };

    signingIn() {
        cy.get('[name="username"]').should('have.value', 'admin');
        cy.get('[name="password"]').should('have.value', 'init');
        cy.contains('Login').click();
    }

    clickLoginButton() {
        cy.contains('Login').click();
    }

    checkLogin() {
        // https://stackoverflow.com/questions/57737783/cypress-how-to-know-if-element-is-visible-or-not-in-using-if-condition
        // this code check 3 Login button scenarios: exists & visible, exists & not visible, not exists
        cy.get("body").then($body => {
            if ($body.find('[type="submit"]').length > 0) {   
            //evaluates as true if button exists at all
                cy.get('[type="submit"]').then($header => {
                  if ($header.is(':visible')){
                    //you get here only if button EXISTS and is VISIBLE
                    this.clickLoginButton();
                  } else {
                    //you get here only if button EXISTS but is INVISIBLE
                    assert.isOk('everything','everything is OK');
                  }
                });
            } else {
               //you get here if the button DOESN'T EXIST
               assert.isOk('everything','everything is OK');
            }
        });
    }
}

export default new SignInPage();