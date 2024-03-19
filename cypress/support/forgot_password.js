let data
let inboxId
//let emailAddress
let emailBody
let otpCode

    Cypress.Commands.add('getResetPasswordEmailFromMailSlurp',(email_address, otpCode, reset_password)=>{
        cy.fixture('forgot_password').then((fp)=>{
        cy.get(fp.forgotPassword).should('be.visible').click();
        //cy.log(inboxId)
       //cy.mailslurp().then(mailslurp => mailslurp.createInbox()).then(inbox=>{
                  // inboxId = 9b022af0-5efe-46ef-a553-a09b2ea71692@mailslurp.net
//                    emailAddress = inbox.emailAddress
                    //cy.get(fp.emailField).should('exist').type(emailAddress)
     //       })
        cy.get(fp.emailField).should('be.visible').type(email_address)
        cy.get(fp.continue_button).should('exist').click();
        //cy.mailslurp().then(mailslurp => mailslurp.createInbox()).then(inbox=>{
        //cy.existingInbox().then((inbox)=>{
             // inboxId = inbox.id
              //emailAddress = inbox.emailAddress
        //cy.mailslurp().then(mailslurp => mailslurp.waitForLatestEmail(inboxId, 30000, true)).then(email =>{
        //inboxId = 9b022af0-5efe-46ef-a553-a09b2ea71692@mailslurp.net
        cy.mailslurp().then(email => {
        //const otp = extractOtpFromEmail(email);
            emailBody = email.body
            const parser = new DOMParser()
            const doc = parser.parseFromString(emailBody,'text/html')
            var otp = doc.querySelector('body').textContent
            otpCode = otp.trim()
            cy.get(fp.reset_code).should('be.visible').type(otpCode)
            cy.get(fp.reset_continue_button).should('be.visible').click();
            cy.get(fp.reset_passwordField).should('be.visible').type('P@ssword123')
            cy.get(fp.verify_button).should('be.visible').click()
    //})
    })
    })
    })

//    const axios = require('axios');
//    Cypress.Commands.add('getOTPFromMailSlurp', () => {
//        // MailSlurp API key
//        const apiKey = 'f452ff54c654b4413cd7c24bb538aec0a0d7839a3c64d019a6c14067fd4fe179';
//        // MailSlurp inbox ID
//        const inboxId = '1f8f146a-7bbf-4bcd-b11c-246469e46604';
//
//        // Fetch emails from MailSlurp inbox
//        return axios.get(`https:api.mailslurp.com/inboxes/${inboxId}/emails?apiKey=${apiKey}`)
//            .then(response => {
//                // Extract OTP from email content
//                const email = response.data[2]; // Assuming OTP is in the first email
//                const otp = email.body.match(/\b\d{6}\b/)[0]; // Assuming OTP is 6 digits
//                return otp;
//            })
//            .catch(error => {
//                throw new Error(`Failed to fetch OTP from MailSlurp: ${error.message}`);
//            });
//    });






//Cypress.Commands.add('forgot_password',(email)=>{
//    cy.fixture('forgot_password').then((fgp)=>{
//    cy.get(fgp.forgotPassword).should('be.visible').click();
//    cy.mailslurp().then(mailslurp => mailslurp.createInbox()).then(inbox=>{
//            inboxId = inbox.id
//            emailAddress = inbox.emailAddress
//            cy.get(fgp.emailField).should('exist').type(emailAddress)
//            cy.get(fgp.continue_button).should('exist').click();
//            cy.get(fgp.alert).should('be.visible').and('contain.text', 'An account registered with the specified email does not exist')
//     cy.mailslurp().then(mailslurp => mailslurp.waitForLatestEmail(inboxId, 30000, true)).then(email =>{
//            emailBody = email.body
//            const parser = new DOMParser()
//            const doc = parser.parseFromString(emailBody,'text/html')
//            var otp = doc.querySelector('table > tbody > tr > td > div > table > tbody > tr > td > div > span').textContent
//            otpCode = otp.trim()
//            cy.get(fp.reset_code).should('be.visible').type(otpCode)
//            cy.get(fp.reset_continue_button).should('be.visible').click();
//
//    })
//    })
//    })


//    cy.get(pf.password).type('Password25*')
//    cy.get(pf.confirmField).type('Password25*')
//    cy.get(pf.continue_button).should('be.visible').click();
//    cy.get(pf.alert).should('be.visible').and('contain.text', 'Verification code sent')
//    cy.log(inboxId)
//    cy.mailslurp().then(mailslurp => mailslurp.waitForLatestEmail(inboxId, 30000, true)).then(email =>{
//        emailBody = email.body
//        const parser = new DOMParser()
//        const doc = parser.parseFromString(emailBody,'text/html')
//        var otp = doc.querySelector('table > tbody > tr > td > div > table > tbody > tr > td > div > span').textContent
//        otpCode = otp.trim()
//        cy.log(otpCode)
//    cy.get(pf.verificationCode).should('be.visible').type(otpCode)
//    cy.get(pf.verifyButton).should('be.visible').click();
//  })
//    cy.get(pf.dashboardHeader).should('be.visible').and('contain.text', 'Welcome, David')
//    cy.get(pf.welcomeText).should('be.visible').and('contain.text', 'Welcome to EBO, David!')
    //})
  //})