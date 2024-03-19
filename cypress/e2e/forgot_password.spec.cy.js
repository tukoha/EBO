describe('forgot_password.spec.cy.js', () => {

// it('To verify that user cannot reset their password with an email that does not exist', () => {
//   cy.fixture('forgot_password').then((fgp)=>{
//   cy.forgot_password(fgp.email)
//   })
//   })

//describe('Click on Third Email in MailSlurp', () => {
//    it('should click on the third email in MailSlurp', () => {
//            cy.fixture('forgot_password').then((fp)=>{
//            cy.get(fp.forgotPassword).should('be.visible').click();
//        cy.getThirdEmailFromMailSlurp().then(emails => {
//            // Assuming there are at least 5 emails in the list
//            const thirdEmail = emails[2]; // Index starts from 0
//            // Perform click action on the fifth email
//            cy.log(`Clicked on the third email: ${thirdEmail.subject}`);
//            // Write your code to click on the email here
//        });
//    });
//});
//});


it('To verify that user can reset their password', () => {
    cy.fixture('forgot_password').then((fp)=>{
    cy.getResetPasswordEmailFromMailSlurp(fp.email_address, fp.otpCode, fp.reset_password)
    })
    })
    })



