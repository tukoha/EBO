describe('podcast.spec.cy.js', () => {
  it('To verify that user can successfully sign up on podcast', () => {
   cy.fixture('podcast').then((pc)=>{
   cy.Podcast(pc.email, pc.callSign, pc.mail, pc.passWord, pc.confirmPassword, pc.privacy_policy, pc.inboxId, pc.otpCode)
   })
   })
   })