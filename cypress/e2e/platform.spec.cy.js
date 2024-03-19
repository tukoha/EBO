describe('platform.spec.cy.js', () => {
  it('To verify that user can successfully sign up on platform', () => {
   cy.fixture('platform').then((pf)=>{
   cy.Platform(pf.email, pf.callSign, pf.mail, pf.passWord, pf.confirmPassword, pf.privacy_policy, pf.inboxId, pf.otpCode)
   })
   })
   })