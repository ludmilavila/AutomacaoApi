//Envia uma requisição POST para o endpoint Auth/sign-up
Cypress.Commands.add('postAuthSignUp', (body) => {
    cy.api({
        method: 'POST',
        url: `${Cypress.env('baseUrl')}/auth/sign-up`,
        body: body,
        headers: {
            'Content-Type': 'application/json',
        },
        failOnStatusCode: false
    }).then(response => {
        return response
    })
})

//Envia uma requisição POST para o endpoint Auth/sign-in
Cypress.Commands.add('postAuthSignIn', (body) => {
    cy.api({
        method: 'POST',
        url: `${Cypress.env('baseUrl')}/auth/sign-in`,
        body: {
            "email": "ludmilavila@hotmail.com",
            "password": "7amPc0R1!6ZT"
        },
        headers: {
            'Content-Type': 'application/json',
        },
        failOnStatusCode: false
    }).then(response => {
        return Cypress.env('auth', response.body.data.token)
    })
})

//Envia uma requisição POST para o endpoint Auth/sign-in (usuário2)
Cypress.Commands.add('postAuthSignIn2', (body) => {
    cy.api({
        method: 'POST',
        url: `${Cypress.env('baseUrl')}/auth/sign-in`,
        body: {
            "email": "teste@teste.com.br",
            "password": "Teste07#####"
        },
        headers: {
            'Content-Type': 'application/json',
        },
        failOnStatusCode: false
    }).then(response => {
        return Cypress.env('auth', response.body.data.token)
    })
})

//Envia uma requisição GET para o endpoint Account
Cypress.Commands.add('getAccount', () => {
    cy.api({
        method: 'GET',
        url: `${Cypress.env('baseUrl')}/account`,
        headers: {
            Authorization: `Bearer ${Cypress.env('auth')}`,
        },
        failOnStatusCode: false
    }).then(response => {
        return response
    })
})

//Envia uma requisição DELETE para o endpoint Account
Cypress.Commands.add('delAccount', () => {
    cy.api({
        method: 'DELETE',
        url: `${Cypress.env('baseUrl')}/account`,
        headers: {
            Authorization: `Bearer ${Cypress.env('auth')}`,
        },
        failOnStatusCode: false
    }).then(response => {
        return response
    })
})

//Envia uma requisição GET para o endpoint Todo
Cypress.Commands.add('getTodo', () => {
    cy.api({
        method: 'GET',
        url: `${Cypress.env('baseUrl')}/todo`,
        headers: {
            Authorization: `Bearer ${Cypress.env('auth')}`,
        },
        failOnStatusCode: false
    }).then(response => {
        return response
    })
})

//Envia uma requisição GET para o endpoint Todo/{todoId}
Cypress.Commands.add('getTodoId', (todoId) => {
    cy.api({
        method: 'GET',
        url: `${Cypress.env('baseUrl')}/todo/${todoId}`,
        headers: {
            Authorization: `Bearer ${Cypress.env('auth')}`,
        },
        failOnStatusCode: false
    }).then(response => {
        return response
    })
})

//Envia uma requisição POST para o endpoint Todo
Cypress.Commands.add('postTodo', (body) => {
    cy.api({
        method: 'POST',
        url: `${Cypress.env('baseUrl')}/todo`,
        body: body,
        headers: {
            Authorization: `Bearer ${Cypress.env('auth')}`,
        },
        failOnStatusCode: false
    }).then(response => {
        return response
    })
})

//Envia uma requisição PUT para o endpoint Todo/{todoId}
Cypress.Commands.add('putTodoId', (body, todoId) => {
    cy.api({
        method: 'PUT',
        url: `${Cypress.env('baseUrl')}/todo/${todoId}`,
        body: body,
        headers: {
            Authorization: `Bearer ${Cypress.env('auth')}`,
        },
        failOnStatusCode: false
    }).then(response => {
        return response
    })
})

//Envia uma requisição DELETE para o endpoint Todo/{todoId}
Cypress.Commands.add('delTodoId', (todoId) => {
    cy.api({
        method: 'DELETE',
        url: `${Cypress.env('baseUrl')}/todo/${todoId}`,
        headers: {
            Authorization: `Bearer ${Cypress.env('auth')}`,
        },
        failOnStatusCode: false
    }).then(response => {
        return response
    })
})

//Envia uma requisição POST para o endpoint todo/batch
Cypress.Commands.add('postTodoBatch', (body) => {
    cy.api({
        method: 'POST',
        url: `${Cypress.env('baseUrl')}/todo/batch`,
        body: body,
        headers: {
            Authorization: `Bearer ${Cypress.env('auth')}`,
        },
        failOnStatusCode: false
    }).then(response => {
        return response
    })
})
