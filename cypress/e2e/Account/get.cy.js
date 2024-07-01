beforeEach('Realizar autenticação na API',() => {
    cy.postAuthSignIn();
})

describe ('GET ../Account', () => {
    it ('Deve retornar dados do usuário autenticado', () => {
        cy.getAccount().then(response => {
            expect(response.status).to.eql(200);
            expect(response.body.data.id).to.be.a('string');
            expect(response.body.data.cpf).to.be.a('string');
            cy.wrap(response.body.data.cpf).should('have.length', 14);
            expect(response.body.data.email).to.be.a('string');
            expect(response.body.data.firstName).to.be.a('string');
            expect(response.body.data.lastName).to.be.a('string');
            expect(response.body.data.age).to.be.a('number');
        })
    })
})