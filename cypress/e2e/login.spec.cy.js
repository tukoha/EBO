describe('login.spec.cy.js', () => {
  it('To verify that user cannot proceed to log in when only email is supplied', () => {
   cy.fixture('login').then((ln)=>{
   cy.get(':nth-child(1) > .relative > .py-2').type('reader@mailinator.com')
       cy.get('.inline-flex').click();
       cy.get('div > div > div.go3958317564').should('be.visible').and('contain.text', 'password\' is required')
        //cy.Logins(ln.valid_email)
        //cy.get('.inline-flex').click();
       //cy.get(':nth-child(1) > .relative > .py-2').type('reader@mailinator.com')
        //cy.get(ln.login_button).should('be.visible').click();
   //cy.get('//div[contains(text(),’password is required’)]').should('be.visible')//.and ('contain.text', 'password is required')
   })
 })

   it('To verify that user cannot proceed to log in when only password is supplied', () => {
      cy.fixture('login').then((ln)=>{
      cy.get('#password').type('reader@mailinator.com')
          cy.get('.inline-flex').click();
          cy.get('.text-red-500').should('be.visible').and('contain.text', 'Email is required')
       })
     })

    it('should login as an invalid user', () => {
        cy.fixture('login').then((lg)=>{
            cy.Login(lg.invalid_email, lg.invalid_password)
        cy.get(lg.alert).should('be.visible').and ('contain.text', 'Account not found. Double-check or sign up.')

       })
     })

      it('should login as a valid user', () => {
        cy.fixture('login').then((lg)=>{
              cy.Login(lg.valid_email, lg.valid_password)
         cy.get(lg.dashboardHeader).should('be.visible').and ('contain.text', 'Welcome back, Chizzy')
         })

     })
})