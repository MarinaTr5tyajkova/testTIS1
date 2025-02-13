describe('ProofEmployerVacancy', () => {
    it('Успешное подтверждение отклика работодателем', () => {
        cy.fixture('testData').then(data => {
            cy.log('Переход на страницу авторизации')
            cy.visit('https://dev.profteam.su/login')

            cy.get('.form-input--text.form-input').type(data.avtorisation.login);
            cy.get('.form-input--password.form-input').type(data.avtorisation.password);

            cy.get(":nth-child(3) > .button").click();

            cy.log('Клик по кнопке Отклики')
            cy.get("#app > div.page > div > div.page-navigation > div.page-nav > div:nth-child(5) > p").click()

            cy.log('Клик по кнопке Все')
            cy.get("#app > div.page > div > div.page-navigation > div.page-nav__mobile > section.responses-page > div.responses-page__menu > div > div:nth-child(2) > div > div").click()

            cy.log('Клик по кнопке Вакансии')
            cy.get("#app > div.page > div > div.page-navigation > div.page-nav__mobile > section.responses-page > div.responses-page__menu > div > div:nth-child(2) > div > div.form-select__items > div:nth-child(2)").click()

            cy.log('Клик по кнопке Принять вакансию')
            cy.get("#app > div.page > div > div.page-navigation > div.page-nav__mobile > section.responses-page > div.responses-list.responses-page__nav > div > article:nth-child(1) > div.responses-list-item__actions > div:nth-child(1)").click()
        })
    })
})