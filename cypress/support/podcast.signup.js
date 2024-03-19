let data
let inboxId
let emailAddress
let emailBody
let otpCode


Cypress.Commands.add('Podcast',(mediaOutlet, callSign, email, passWord, confirmPassword, privacy_policy, userId, otpCode)=>{
    cy.fixture('podcast').then((pc)=>{
    cy.get(pc.signupButton).should('be.visible').click()
    cy.get(pc.mediaOutlet).should('be.visible').click()
    cy.get(pc.selectMediaOutlet).should('be.visible').click()
    cy.get(pc.call_sign).should('be.visible').type(callSign)
    cy.mailslurp().then(mailslurp => mailslurp.createInbox()).then(inbox=>{
            inboxId = inbox.id
            emailAddress = inbox.emailAddress
            cy.get('div:nth-child(3) > .relative > .py-2').should('exist').type(emailAddress)
    })
    cy.get(pc.password).type('Password25*')
    cy.get(pc.confirmField).type('Password25*')
    cy.get(pc.privacyPolicy).should('be.visible').click();
    cy.get(pc.continue_button).should('be.visible').click();
    cy.get(pc.alert).should('be.visible').and('contain.text', 'Verification code sent')
    cy.log(inboxId)
    cy.mailslurp().then(mailslurp => mailslurp.waitForLatestEmail(inboxId, 30000, true)).then(email =>{
        emailBody = email.body
        const parser = new DOMParser()
        const doc = parser.parseFromString(emailBody,'text/html')
        var otp = doc.querySelector('table > tbody > tr > td > div > table > tbody > tr > td > div > span').textContent
        otpCode = otp.trim()
        cy.log(otpCode)
    cy.get(pc.verificationCode).should('be.visible').type(otpCode)
    cy.get(pc.verifyButton).should('be.visible').click();
  })
    cy.get(pc.dashboardHeader).should('be.visible').and('contain.text', 'Welcome, Yashvi')
  })
  })