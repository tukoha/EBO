
describe('station.spec.cy.js', () => {
  it('To verify that user can successfully sign up on station', () => {
   cy.fixture('station').then((st)=>{
   cy.Station(st.email, st.callSign, st.mail, st.zip_code, st.passWord, st.confirmPassword, st.privacy_policy, st.inboxId, st.otpCode)

//   it('click the sign up button', ()=>{
//    cy.get('.text-sm > .text-primary').should('exist').click();
//   })
//   it('select media outlet type', ()=>{
//    cy.get('.react-select__input-container').should('exist').click();
//   })
//   it('fill in the email address', ()=>{
//    cy.createInbox().then((inbox)=>{
//        inboxId = inbox.id
//        emailAddress = inbox.emailAddress
//        cy.get('div:nth-child(3) > .relative > .py-2').should('exist').type(emailAddress)
//      })
//   })
//   it('fill in the zipcode', ()=>{
//    cy.get('.div:nth-child(4) > div > input').should('exist').type('10001')
//   })
//   it('fill in the password', ()=>{
//    cy.get('#password').should('exist').type('Password25*')
//   })
//   it('fill in the confirm password', ()=>{
//    cy.get('#confirm_password').should('exist').type('Password25*')
//   })
//   it('click to continue signup', ()=>{
//    cy.get('.inline-flex').should('exist').click()
//   })
  })
  })
  })

