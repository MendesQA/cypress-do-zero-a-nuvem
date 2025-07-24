describe('Central de Atendimento ao Cliente TAT', () => {
  beforeEach(() => {
    cy.visit('./src/index.html')
  })

  it('verifica o titulo da aplicação', () => {
    cy.title('').should('be.equal', 'Central de Atendimento ao Cliente TAT')
  })
 
  it('preenche os campos obrigatórios e envia o formulário', () => {
    cy.clock()
     const longText = Cypress._.repeat('asdfghjkkllkjhgffdsss', 10)

    cy.get('#firstName').type('Gabriel Mendes')
    cy.get('#lastName').type('da Silva')
    cy.get('#email').type('mendesmendes@gmail.com')
    cy.get('#open-text-area').type(longText, {delay: 0})
    cy.contains('button', 'Enviar').click()

    cy.get('.success').should('be.visible')

    cy.tick(3000)

    cy.get('.success').should('not.be.visible')
  })
 
 it('exibe mensagen de erro ao submeter o formulário com um email com formatação inválida', () => {
  cy.clock()
  
  cy.get('#firstName').type('Gabriel Mendes')
  cy.get('#lastName').type('da Silva')
  cy.get('#email').type('mendesmendes@gmail,com')
  cy.get('#open-text-area').type('Text')
  cy.contains('button', 'Enviar').click()

  cy.get('.error').should('be.visible')

  cy.tick(3000)

  cy.get('.error').should('not.be.visible')
 })

 it('exibe mensagem de erro quando o telefone se torna obrigatóriov mas não é preenchido antea so envio do formulátio', () => {
    cy.get('#phone')
      .type('abcde')
      .should('have.value','')
 })

 it('exibe mensagen de erro quando o telefone se torna obrigatório mas não é preenchido', () => {
  cy.clock()
  
  cy.get('#firstName').type('Gabriel Mendes')
  cy.get('#lastName').type('da Silva')
  cy.get('#email').type('mendesmendes@gmail,com')
  cy.get('#open-text-area').type('Text')
  cy.get('#phone-checkbox').check()
  cy.contains('button', 'Enviar').click()

  cy.get('.error').should('be.visible')

  cy.tick(3000)

  cy.get('.error').should('not.be.visible')
 })

 it('preenche e limpa os campos nome, sobrenome, email e telefone', () => {
    cy.get('#firstName')
      .type('Gabriel Mendes')
      .should('have.value', 'Gabriel Mendes')
      .clear()
      .should('have.value', '')
    cy.get('#lastName')
      .type('da Silva')
      .should('have.value', 'da Silva')
      .clear()
      .should('have.value', '')
    cy.get('#email')
      .type('mendesmendes@mendes.com')
      .should('have.value', 'mendesmendes@mendes.com')
      .clear()
      .should('have.value', '')
    cy.get('#phone')
      .type('1234567890') 
      .should('have.value', '1234567890')
      .clear()  
      .should('have.value', '')
       
  })
  it('clicar no botão de envar sem preencher os campos obrigatórios', () => {
    cy.clock()

    cy.contains('button', 'Enviar').click()

    cy.get('.error').should('be.visible')

    cy.tick(3000)

    cy.get('.error').should('not.be.visible')
  })

  it('envia o formulário com sucesso usando um comando customizado', () => {
    cy.clock()
    
    const data = {
      firstName: 'Gabriel',
      lastName: 'MEndes',
      email: 'mendesmendes@mendes.com',
      text: 'texto de exemplo para constante'
    }

    cy.fillMandatoryFieldsAndSubmit(data)

    cy.get('.success').should('be.visible')

    cy.tick(3000)

    cy.get('.success').should('not.be.visible')
  })

  it('seleciona um produto (YouTube) por seu texto', () => {
    cy.get('#product')
      .select('YouTube')
      .should('have.value', 'youtube')
  })

  it('seleciona um produto (Mentoria) por seu valor(value)', () => {
    cy.get('#product')
      .select('mentoria')
      .should('have.value', 'mentoria')
  })

  it('seleciona um produto (Blog) por seu indice', () => {
    cy.get('#product')
      .select(1)
      .should('have.value', 'blog')
  })

  it('marca o tipo de atendimento "Feedback"' , () => {
    cy.get('input[type="radio"][value="feedback"]')
      .check()
      .should('be.checked')
  })

  it('Marca cada tipo de antendimento', () => {
    cy.get('input[type="radio"]')
      .each(typeOfService => {
        cy.wrap(typeOfService)
          .check()
          .should('be.checked')
      })
  })

  it('marca ambos checkboxes, depois desmarca o último' , () => {
    cy.get('input[type="checkbox"]')
    .check()
    .should('be.checked')
    .last()
    .uncheck()
    .should('not.be.checked')
  })

  it('seleciona um arquivo da pasta fixtures', () => {
    cy.get('#file-upload')
      .selectFile('cypress/fixtures/example.json')
      .should((input) => {
        expect(input[0].files[0].name).to.equal('example.json')
      })
  })

 it('seleciona um arquivo simulando um drag-and-drop', () => {
    cy.get('#file-upload')
      .selectFile('cypress/fixtures/example.json', { action: 'drag-drop'})
      .should((input) => {
        expect(input[0].files[0].name).to.equal('example.json')
      })
  })
  
 it('seleciona um arquivo utilizando uma fixture para a qual foi dada um alias', () => {
   cy.fixture('example.json').as('sampleFile')
   cy.get('#file-upload')
      .selectFile('@sampleFile')
      .should((input) => {
        expect(input[0].files[0].name).to.equal('example.json')
      })
 })

 it('verifica que a política de privacidade abre em outra aba sem a necessidade de um clique', () => {
  cy.contains('a', 'Política de Privacidade') 
    .should('have.attr', 'href', 'privacy.html')
    .and('have.attr', 'target', '_blank')
 })

 it('acessa a página da política de privacidade removendo o target e então clicando no link', () => {
  cy.contains('a', 'Política de Privacidade') 
    .invoke('removeAttr', 'target')
    .click()

    cy.contains('h1', 'CAC TAT - Política de Privacidade').should('be.visible')
 })

 it('exibe e oculta as mensagens de sucesso e erro usando .invoke()', () => {
  cy.get('.success')
    .should('not.be.visible')
    .invoke('show')
    .should('be.visible')
    .and('contain', 'Mensagem enviada com sucesso.')
    .invoke('hide')
    .should('not.be.visible')
  cy.get('.error')
    .should('not.be.visible')
    .invoke('show')
    .should('be.visible')
    .and('contain', 'Valide os campos obrigatórios!')
    .invoke('hide')
    .should('not.be.visible')
 })

 it('preenche o campo da área de texto usando o comando invoke', () => {
    cy.get('#open-text-area')
    .invoke('val', 'Um texto qualquer')
    .should('have.value', 'Um texto qualquer')
 })
})