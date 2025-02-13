describe('VacancyCreateNegative', () => {
  it('авторизация', () => {
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

  it('Создание вакансии', () => {
      
      cy.get("#app > div.page > div > div.page-navigation > div.page-nav > div:nth-child(7) > p").click(); 
      cy.log('Клик по разделу вакансий');

     
      cy.contains("Создать вакансию").click(); 
      cy.log('Переход к созданию вакансии');

     
      cy.get('body > div:nth-child(9) > div.desktop-modal > div > div.vacancy-add-form-wrapper > form > div.form__buttons > div > button')
        .should('have.attr', 'disabled'); 
      cy.log('Проверка, что кнопка "Обновить вакансию" отключена');

      
      cy.get('body > div:nth-child(9) > div.desktop-modal > div > div.vacancy-add-form-wrapper > form > div:nth-child(1) > div.form__labels > div > div:nth-child(1) > div > input')
        .type('пупыпкараваывнаиыаншиуыаиыова мпвлрпкпреноглдапвлмишнмауаены сяылаыиурщыдм идлвчмр воыкаясвыясвр п'); 
      cy.log('Ввод длинной должности');

      
      cy.contains("Обязательное поле, максимум 255 символов"); 
      cy.log('Проверка сообщения об обязательном поле');

      cy.get('input[value="По диапазону"]').click(); 
      cy.log('Выбор варианта "По диапазону"');

      
      cy.get("body > div:nth-child(9) > div.desktop-modal > div > div.vacancy-add-form-wrapper > form > div:nth-child(1) > div.form__labels > div > div:nth-child(2) > div > div:nth-child(3) > div:nth-child(1) > div > input")
        .type('56'); 
      cy.log('Ввод некорректных значений (от большего к меньшему)');

      cy.contains("Оба поля обязательные, числа положительные, должны соответствовать формату от 0 до 100000 ₽"); 
      cy.log('Проверка сообщения о некорректных значениях');

      
      cy.get("body > div:nth-child(9) > div.desktop-modal > div > div.vacancy-add-form-wrapper > form > div:nth-child(1) > div.form__labels > div > div:nth-child(2) > div > div:nth-child(3) > div:nth-child(1) > div > input")
        .type('777777777777777'); 
      cy.log('Ввод слишком большого значения');

      
      cy.contains("100000"); 
      cy.log('Проверка сообщения о превышении максимального значения');

     
      cy.get('body > div:nth-child(9) > div.desktop-modal > div > div.vacancy-add-form-wrapper > form > div:nth-child(1) > div.form__labels > div > div:nth-child(5) > div.form-control.form-control--max > textarea')
        .type('Умение дышать '.repeat(100)); 
      cy.log('Ввод длинных требований');
  });
});
