import 'cypress-file-upload';
describe('WorkspaceVacancyNegative', () => {
    it('Успешная авторизация', () => {
        cy.fixture('testData').then(data => {

            cy.visit('https://dev.profteam.su/login'); 
            cy.log('Переход на страницу авторизации');

            cy.get('.form-input--text.form-input').type(data.avtorisation.login); 
            cy.log('Ввод логина');

            cy.get('.form-input--password.form-input').type(data.avtorisation.password); 
            cy.log('Ввод пароля');

            cy.contains("Войти").click(); 
            cy.log('Клик по кнопке "Войти"');
        });
    });

    it('Неправильное взаимодействие с комментариями', () => {

        cy.get("#app > div.page > div > div.page-navigation > div.page-nav > div:nth-child(5) > p").click(); 
        cy.log('Клик по разделу Отклики');

        cy.contains('div[class="responses-list-item__action"]').first().click(); 
        cy.log('Одобрение первого отклика');

        cy.contains("Рабочее пространство").first().click(); 
        cy.log('Переход в рабочее пространство');

        cy.get("#app > div.page > div > section > section > section > div > div > div.detailed-workspace-activity-comments__menu > article > div.comment-textarea__textarea > div.comment-textarea__buttons > button:nth-child(2)").click(); 
        cy.log('Попытка отправить пустой комментарий');
    });
});


