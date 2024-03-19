Cypress.Commands.add('Logins',(email)=>{
    cy.fixture('login').then((ln)=>{
    //cy.get(ln.emailField).should('be.visible').type(email)
    //cy.get(lg.passwordField).should('be.visible').type(password)
    cy.get(ln.login_button).should('be.visible').click();
    })
 })

Cypress.Commands.add('Login',(email, password)=>{
    cy.fixture('login').then((lg)=>{
    cy.get(lg.emailField).should('be.visible').type(email)
    cy.get(lg.passwordField).should('be.visible').type(password)
    cy.get(lg.login_button).should('be.visible').click();
    })
 })

 Cypress.Commands.add('Login',(email, password)=>{
     cy.fixture('login').then((lg)=>{
     cy.get(lg.emailField).should('be.visible').type(email)
     cy.get(lg.passwordField).should('be.visible').type(password)
     cy.get(lg.login_button).should('be.visible').click();
     })
  })