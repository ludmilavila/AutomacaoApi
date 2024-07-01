describe ('Post ../Auth/sign-up', () => {
    it ('Deve criar um novo usuário', () => {
        const body = {
            "cpf": "022.687.290-77",
            "email": "teste@teste.com.br",
            "firstName": "teste",
            "lastName": "teste",
            "age": 20,
            "description": "teste",
            "password": "Teste07#####"
        };
        cy.postAuthSignUp(body).then(response => {
            expect(response.status).to.eql(200);
        })
    })

    it ('Deve retornar erro ao tentar criar novo usuário com campos obrigatórios vazios', () => {
        const body = {
            "cpf": "",
            "email": "",
            "firstName": "",
            "lastName": "",
            "age": 20,
            "description": "teste",
            "password": ""
        };
        cy.postAuthSignUp(body).then(response => {
            expect(response.status).to.eql(422);
        })
    })
})

describe ('Delete ../Account', () => {
    it ('Deve excluir usuário autenticado', () => {
        cy.postAuthSignIn2();
        cy.delAccount().then(response => {
            expect(response.status).to.eql(200);
        })
    })
})
    

