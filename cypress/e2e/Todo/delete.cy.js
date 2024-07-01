beforeEach('Realizar autenticação na API',() => {
    cy.postAuthSignIn();
})

describe ('DELETE ../Todo/{todoId}', () => {
    it ('Deve retornar erro ao tentar excluir uma tarefa de inválida', () => {
        const todoId = '1c641327-f15a-4365-bfc6-51775a39ac99';
        cy.delTodoId(todoId).then(response => {
            expect(response.status).to.eql(400);
        })
    })
})