describe('WorkspaceVacancy', () => {
    it('comment_functionality', () => {
        // Загружаем данные из фикстуры
        cy.fixture('testData').then((data) => {
            // Переход на страницу авторизации
            cy.visit('https://dev.profteam.su/login');

            // Логин
            cy.get('.form-input--text.form-input').type(data.avtorisation.login);
            cy.get('.form-input--password.form-input').type(data.avtorisation.password);
            cy.contains("Войти").click();

            // Клик по разделу Отклики
            cy.get('#app > div.page > div > div.page-navigation > div.page-nav > div:nth-child(5) > p').click();

            // Переход в рабочее пространство
            cy.contains("Рабочее пространство").first().click();

            // Wait for the textarea to be enabled
            cy.get('textarea[placeholder="Напишите комментарий..."]').should('not.be.disabled');

            // Написание комментария
            cy.get('textarea[placeholder="Напишите комментарий..."]').type('Абоба', { force: true });

            // Отправка комментария
            cy.get('.comment-textarea__buttons button').eq(1).click();

            // Проверка отправки комментария
            cy.contains('Абоба').should('be.visible');

            // Ответ на комментарий
            cy.contains("Ответить").click();
            cy.get('textarea[placeholder="Напишите комментарий..."]').should('not.be.disabled');
            cy.get('textarea[placeholder="Напишите комментарий..."]').type("Баобаб", { force: true });
            cy.get('.comment-textarea__buttons button').eq(1).click();

            // Проверка отправки ответа на комментарий
            cy.get('.comment-message').contains("Баобаб").should('exist');

            // Прикрепление файла
            const filePath = 'test.txt'; // Путь к файлу относительно cypress/fixtures
            
            // Проверка существования файла перед его прикреплением
            cy.readFile(`cypress/fixtures/${filePath}`).should('exist');

            // Прикрепление файла
            cy.get("input[type='file']").attachFile(filePath);

            // Отправка файла
            // Повторно кликаем, чтобы отправить файл в комментариях
            cy.get('.comment-textarea__buttons button').eq(1).click();
            
            // Проверка, что файл был отправлен (это может быть ваше комментарий с названием файла)
            cy.contains('test.txt').should('exist'); // Проверьте, как именно отображается прикрепленный файл
        });
    });
});