import 'cypress-file-upload';
describe('ChangeWorkspace', () => {
    it('Авторизация', () => {
        cy.fixture('testData').then(data => {
            cy.visit('https://dev.profteam.su/login');
            cy.log('Переход на страницу авторизации');

            cy.get('.form-input--text.form-input').type(data.avtorisation.login);
            cy.log('Ввод логина');

            cy.get('.form-input--password.form-input').type(data.avtorisation.password);
            cy.log('Ввод пароля');

            cy.contains("Войти").click();
            cy.log('Клик по кнопке "Войти"');

            cy.get('#app > div.page > div > div.page-navigation > div.page-nav > div:nth-child(5) > p').click();
            cy.log('Клик по разделу Отклики');
        });
    });

    it('Изменение статуса рабочего пространства', () => {

        cy.get("#app > div.page > div > div.page-navigation > div.page-nav > div:nth-child(5) > p", { timeout: 6000 }).click();
        cy.log('Клик по разделу Отклики');

        cy.contains('div[class="responses-list-item__action"]').first().click();
        cy.log('Одобрение первого отклика');

        cy.contains("Рабочее пространство").first().click();
        cy.log('Переход в рабочее пространство');


        cy.contains("Принят на вакансию").click();
        cy.log('Принятие на вакансию');

        cy.get("#app > div.page > div > section > div.detailed-workspace-header > header > button").click();
        cy.log('Переход к другой вакансии');

        cy.contains('div[class="responses-list-item__action"]').first().click();
        cy.log('Одобрение нового отклика');

        cy.contains("Рабочее пространство").eq(1).click();
        cy.log('Переход в рабочее пространство для новой вакансии');

        cy.contains("В вакансии отказано").click();
        cy.log('Отказ от принятия на вакансию');
    });
});
