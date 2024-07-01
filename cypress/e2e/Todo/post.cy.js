beforeEach('Realizar autenticação na API',() => {
    cy.postAuthSignIn();
})

describe ('Post ../Todo', () => {
    it ('Deve criar uma nova tarefa a ser realizada', () => {
        const body = {
            "description": "teste1",
            "name": "teste1",
            "userId": "ludmilavila@hotmail.com",
            "createdAt": "2024-06-30T14:56:39.531Z",
            "updatedAt": "2024-06-30T14:56:39.531Z"
        };
        cy.postTodo(body).then(response => {
            expect(response.status).to.eql(200);
        })
    })

    it ('Deve retornar erro ao tentar criar nova tarefa com campos obrigatórios vazios', () => {
        const body = {
            "description": "",
            "name": "",
            "userId": "",
            "createdAt": "2024-06-30T14:56:39.531Z",
            "updatedAt": "2024-06-30T14:56:39.531Z"
        };
        cy.postTodo(body).then(response => {
            expect(response.status).to.eql(400);
        })
    })
})

describe ('Post ../Todo/batch', () => {
    it ('Deve criar uma lista de tarefas a serem realizadas', () => {
        const body = [
            {
              "updatedAt": "2024-06-28T00:00:15.824Z",
              "createdAt": "2024-06-28T00:00:15.824Z",
              "userId": "ludmilavila@hotmail.com",
              "description": "tarefa1",
              "name": "tarefa1",
              "id": "c5adf08c-6f8a-41e9-b90c-efcc4866d401"
            },
            {
                "updatedAt": "2024-06-29T00:00:15.824Z",
                "createdAt": "2024-06-29T00:00:15.824Z",
                "userId": "ludmilavila@hotmail.com",
                "description": "tarefa2",
                "name": "tarefa2",
                "id": "c5adf08c-6f8a-41e9-b90c-efcc4866d401"
            },
        ];
        cy.postTodoBatch(body).then(response => {
            expect(response.status).to.eql(200);
        })
    })

    it ('Deve retornar erro ao tentar criar uma lista de tarefas com campos obrigatórios vazios', () => {
        const body =  [
            {
              "updatedAt": "2024-06-29T00:00:15.824Z",
              "createdAt": "2024-06-29T00:00:15.824Z",
              "userId": "",
              "description": "",
              "name": "",
              "id": ""
            },
            {
                "updatedAt": "2024-06-29T00:00:15.824Z",
                "createdAt": "2024-06-29T00:00:15.824Z",
                "userId": "",
                "description": "",
                "name": "",
                "id": ""
            },
        ];
        cy.postTodoBatch(body).then(response => {
            expect(response.status).to.eql(400);
        })
    })
})