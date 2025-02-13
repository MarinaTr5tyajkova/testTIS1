describe('ResponseVacancyStudent', () => {
    it('Успешный отклик на вакансию студентом', () => {
        cy.fixture('testData').then((data) => {
у
            cy.visit('https://dev.profteam.su/');
            cy.log('Переход на главную страницу');

            cy.visit('https://dev.profteam.su/login');
            cy.log('Переход на страницу авторизации');

            cy.get('.form-input--text.form-input').type("testerStudent");
            cy.log('Ввод логина');

            cy.get('.form-input--password.form-input').type(data.avtorisation.password);
            cy.log('Ввод пароля');

            cy.contains("Войти").click();
            cy.log('Клик по кнопке "Войти"');

            cy.get('#app > div.page > div > div.page-navigation > div.page-nav > div:nth-child(5) > p').click();
            cy.log('Клик по разделу Отклики');
        });
    });
    
    it('student_response', () => {

        cy.get("#app > div.page > div > div.page-navigation > div.page-nav > div:nth-child(7) > p").click();
        cy.log('Клик по разделу Вакансии');

        cy.get('button[class="button button__background-color-blue button__size-small button__color-white"]').first().click();
        cy.log('Переход к первой вакансии');

        cy.contains('Откликнуться на вакансию').then(($button) => {
            if ($button.length) {
                cy.wrap($button).click();
                cy.log('Клик по кнопке "Откликнуться на вакансию"');
            } else {
                // Если кнопка отсутствует, вывести сообщение в консоль
                cy.log('Элемент "Откликнуться на вакансию" отсутствует');
            }
        });
    });      
});
