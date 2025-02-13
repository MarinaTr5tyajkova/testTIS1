describe('Authorization_negative', () => {
    it('Неккоректный ввод данных для авторизации', () => {
        cy.fixture('testData').then(data => {
            cy.log('Переход на страницу авторизации')
            cy.visit("https://dev.profteam.su/login")

            cy.log('Некорректный логин')
            cy.get(".form-input--text").type("flhk,fgcb")

            cy.log('Некорретный пароль')
            cy.get('.form-input--password').type("3333333")

            cy.log('Клик по кнопке Войти')
            cy.get(":nth-child(3) > .button").click()
        })
    })
})