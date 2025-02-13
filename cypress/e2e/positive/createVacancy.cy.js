describe('CreateVacancyTests', () => {
    it('Успешно созданная вакансия', () => {
        cy.fixture('testData').then((data) => {

            cy.visit('https://dev.profteam.su/login');
            cy.log('Переход на страницу авторизации');

            cy.get('.form-input--text.form-input').type(data.avtorisation.login);
            cy.log('Ввод логина');

            cy.get('.form-input--password.form-input').type(data.avtorisation.password);
            cy.log('Ввод пароля');

            cy.get(":nth-child(3) > .button").click();
            cy.log('Клик по кнопке "Войти"');

            cy.get("#app > div.page > div > div.page-navigation > div.page-nav > div:nth-child(7) > p").click();
            cy.log('Клик по разделу Вакансии');

            cy.get("#app > div.page > div > div.page-navigation > div.page-nav__mobile > div:nth-child(6) > section > div.vacancies-block__filters-wrapper > button").click();
            cy.log('Открытие формы добавления вакансии');

            cy.get("body > div:nth-child(9) > div.desktop-modal > div > div.vacancy-add-form-wrapper > form > div:nth-child(1) > div.form__labels > div > div:nth-child(1) > div > input").type(data.vacancyCreate.name, { force: true });
            cy.log('Ввод названия вакансии');

            cy.log('Ввод требований');
            cy.get("body > div:nth-child(9) > div.desktop-modal > div > div.vacancy-add-form-wrapper > form > div:nth-child(1) > div.form__labels > div > div:nth-child(5) > div > textarea").type(data.vacancyCreate.description);


            cy.log('Ввод обязанностей');
            cy.get("body > div:nth-child(9) > div.desktop-modal > div > div.vacancy-add-form-wrapper > form > div:nth-child(1) > div.form__labels > div > div:nth-child(6) > div > textarea").type(data.vacancyCreate.responsibilities);

            cy.log("Клик на кнопку 'Обновить вакансию'");
            cy.get("body > div:nth-child(9) > div.desktop-modal > div > div.vacancy-add-form-wrapper > form > div.form__buttons > div > button").click({ force: true });
        });
    });
});
