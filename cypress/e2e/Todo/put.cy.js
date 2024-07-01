beforeEach('Realizar autenticação na API',() => {
    cy.postAuthSignIn();
})

describe ('Put ../Todo/{todoId}', () => {
    it ('Deve alterar uma tarefa', () => {
        const body = {
            "updatedAt": "2024-06-27T23:59:08.323Z",
            "createdAt": "2024-06-27T23:59:08.323Z",
            "userId": "ludmilavila@hotmail.com",
            "description": "realizar teste",
            "name": "testando",
            "id": "1c641327-f15a-4365-bfc6-51775a39ac32"
        };
        const todoId = 'd4a77ae4-dd7f-4672-afb3-0e2fa8488b3b';
        cy.putTodoId(body, todoId).then(response => {
            expect(response.status).to.eql(200);
        })
    })

    it ('Deve retornar erro ao tentar alterar tarefa com campos obrigatórios vazios', () => {
        const body = {
            "updatedAt": "2024-06-27T23:59:08.323Z",
            "createdAt": "2024-06-27T23:59:08.323Z",
            "userId": "",
            "description": "",
            "name": "",
            "id": ""
        };
        const todoId = 'd4a77ae4-dd7f-4672-afb3-0e2fa8488b3b';
        cy.putTodoId(body, todoId).then(response => {
            expect(response.status).to.eql(400);
        })
    })

    it ('Deve retornar erro ao tentar alterar tarefa de id inexistente', () => {
        const body = {
            "updatedAt": "2024-06-27T23:59:08.323Z",
            "createdAt": "2024-06-27T23:59:08.323Z",
            "userId": "ludmilavila@hotmail.com",
            "description": "testezinho",
            "name": "teste",
            "id": "1c641327-f15a-4365-bfc6-51775a39auuu"
        };
        const todoId = 'd4a77ae4-dd7f-4672-afb3-0e2fa8488uuu';
        cy.putTodoId(body, todoId).then(response => {
            expect(response.status).to.eql(404);
        })
    })
})