let data
let inboxId
let emailAddress
let emailBody
let otpCode


Cypress.Commands.add('Platform',(mediaOutlet, callSign, email, passWord, confirmPassword, privacy_policy, userId, otpCode)=>{
    cy.fixture('platform').then((pf)=>{
    cy.get(pf.signupButton).should('be.visible').click()
    cy.get(pf.mediaOutlet).should('be.visible').click()
    cy.get(pf.selectMediaOutlet).should('be.visible').click()
    cy.get(pf.call_sign).should('be.visible').type(callSign)
    cy.mailslurp().then(mailslurp => mailslurp.createInbox()).then(inbox=>{
            inboxId = inbox.id
            emailAddress = inbox.emailAddress
            cy.get('div:nth-child(3) > .relative > .py-2').should('exist').type(emailAddress)
    })
    cy.get(pf.password).type('Password25*')
    cy.get(pf.confirmField).type('Password25*')
    cy.get(pf.privacyPolicy).should('be.visible').click();
    cy.get(pf.continue_button).should('be.visible').click();
    cy.get(pf.alert).should('be.visible').and('contain.text', 'Verification code sent')
    cy.log(inboxId)
    cy.mailslurp().then(mailslurp => mailslurp.waitForLatestEmail(inboxId, 30000, true)).then(email =>{
        emailBody = email.body
        const parser = new DOMParser()
        const doc = parser.parseFromString(emailBody,'text/html')
        var otp = doc.querySelector('table > tbody > tr > td > div > table > tbody > tr > td > div > span').textContent
        otpCode = otp.trim()
        cy.log(otpCode)
    cy.get(pf.verificationCode).should('be.visible').type(otpCode)
    cy.get(pf.verifyButton).should('be.visible').click();
  })
    cy.get(pf.dashboardHeader).should('be.visible').and('contain.text', 'Welcome, David')
    cy.get(pf.welcomeText).should('be.visible').and('contain.text', 'Welcome to EBO, David!')
  })
  })