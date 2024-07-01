beforeEach('Realizar autenticação na API',() => {
    cy.postAuthSignIn();
})

describe ('GET ../Todo', () => {
    it ('Deve retornar a lista de pendências do usuário autenticado.', () => {
        cy.getTodo().then(response => {
            expect(response.status).to.eql(200);
            expect(response.body.data.author.id).to.be.a('string');
            expect(response.body.data.author.cpf).to.be.a('string');
            cy.wrap(response.body.data.author.cpf).should('have.length', 14);
            expect(response.body.data.author.email).to.be.a('string');
            expect(response.body.data.author.firstName).to.be.a('string');
            expect(response.body.data.author.lastName).to.be.a('string');
            expect(response.body.data.author.age).to.be.a('number');
            expect(response.body.data.author.description).to.be.a('string');
        })
    })
})

describe ('GET ../Todo/{todoId}', () => {

    it ('Deve retornar pendências do id especificado', () => {
        const todoId = 'aedd5dd6-c80d-4da5-aa62-2f7744eaedf0';
        cy.getTodoId(todoId).then(response => {
            expect(response.status).to.eql(200);
        })
    })
    it ('Deve retornar erro ao tentar buscar pendências de um id inválido', () => {
        const todoId = 'teste';
        cy.getTodoId(todoId).then(response => {
            expect(response.status).not.eql(500);
        })
    })
})