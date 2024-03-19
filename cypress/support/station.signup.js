//function makeid(length) {
//    let result = '';
//    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//    const charactersLength = characters.length;
//    let counter = 0;
//    while (counter < length) {
//      result += characters.charAt(Math.floor(Math.random() * charactersLength));
//      counter += 1;
//    }
//    return result;
//}
let data
let inboxId
let emailAddress
let emailBody
let otpCode

//console.log(makeid(5));

Cypress.Commands.add('Station',(mediaOutlet, callSign, email, zip_code, passWord, confirmPassword, privacy_policy, userId, otpCode)=>{
    cy.fixture('station').then((st)=>{
    cy.get(st.signupButton).should('be.visible').click()
    cy.get(st.mediaOutlet).should('be.visible').click()
    cy.get(st.selectMediaOutlet).should('be.visible').click();
    cy.get(st.call_sign).should('be.visible').type(callSign)
    cy.mailslurp().then(mailslurp => mailslurp.createInbox()).then(inbox=>{
            inboxId = inbox.id
            emailAddress = inbox.emailAddress
            cy.get('div:nth-child(3) > .relative > .py-2').should('exist').type(emailAddress)
    })
   // it('fill in the email address', ()=>{
//        cy.createInbox().then((inbox)=>{
//            inboxId = inbox.id
//            emailAddress = inbox.emailAddress
//            cy.get('div:nth-child(3) > .relative > .py-2').should('exist').type(emailAddress)
//          })
       //})
    //cy.get(st.emailField).should('be.visible').type(makeid(7)+'reader@mailinator.com')
    cy.get(st.zipCode).should('be.visible').type(zip_code)
    cy.get(st.password).type('Password25*')
    cy.get(st.confirmField).type('Password25*')
    cy.get(st.privacyPolicy).should('be.visible').click();
    cy.get(st.continue_button).should('be.visible').click();
    cy.get(st.alert).should('be.visible').and('contain.text', 'Verification code sent')
    cy.log(inboxId)
    cy.mailslurp().then(mailslurp => mailslurp.waitForLatestEmail(inboxId, 30000, true)).then(email =>{
        emailBody = email.body
        const parser = new DOMParser()
        const doc = parser.parseFromString(emailBody,'text/html')
        var otp = doc.querySelector('table > tbody > tr > td > div > table > tbody > tr > td > div > span').textContent
        otpCode = otp.trim()
        cy.log(otpCode)
    cy.get(st.verificationCode).should('be.visible').type(otpCode)
    cy.get(st.verifyButton).should('be.visible').click();
  })
    cy.get(st.dashboardHeader).should('be.visible').and('contain.text', 'Welcome, Chizzy')
//    cy.waitForLatestEmail(inboxId).then((email)=>{
//        emailBody = email.body
//        const parser = new DOMParser()
//        const doc = parser.parseFromString(emailBody,'text/html')
//        var otp = doc.querySelector('table > tbody > tr > td > div > table > tbody > tr > td > div > span').textContent
//        otpCode = otp.trim()
//        cy.log(otpCode)
//
//    })
//    cy.visit('https://www.mailinator.com/v4/public/inboxes.jsp?to=yourinboxname');
//    cy.contains('#search').click();
//    cy.get('.email-content').then(($emailContent) => {
//      const emailText = $emailContent.text();
//      const verificationCode = emailText.match(/\b\d{6}\b/)[0]; // Assuming the verification code is a 6-digit number
      // Use the verification code as needed in your test
//      cy.get('.relative > .py-2').type(verificationCode);
     //})

    });




    })
 //})