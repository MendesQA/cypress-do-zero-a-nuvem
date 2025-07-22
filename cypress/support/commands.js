Cypress.Commands.add('fillMandatoryFieldsAndSubmit', (data = {
    firstName: 'Padrão',
    lastName: 'Padrão',
    email: 'padrãopadrão@email.com',
    text: 'texto padrão okok'
}) => {
    cy.get('#firstName').type(data.firstName)
    cy.get('#lastName').type(data.lastName)
    cy.get('#email').type(data.email)
    cy.get('#open-text-area').type(data.text)
    cy.contains('button', 'Enviar').click()
})