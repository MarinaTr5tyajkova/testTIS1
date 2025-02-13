describe('SearchVacancyTest', () => {
        it('Успешный просмотр страницы с вакансиями', () => {
            cy.visit('https://dev.profteam.su/');
            cy.fixture('testData').then((data) => {

            cy.get("#app > div.page > header:nth-child(1) > nav > a:nth-child(1)").click();

            cy.get("#app > div.page > div > section > div > div.vacancies-block__vacancies-filters-wrapper > div.vacancies-block__filters-wrapper > div > div.filters-block__filter-list > div.search-input > div > input").type(data.vacancySearch.name);
            
            cy.get("input[value='По договорённости']").click();
            cy.get("input[value='Любой']").click();
            cy.get("input[value='По диапазону']").click();
                cy.get("#app > div.page > div > section > div > div.vacancies-block__vacancies-filters-wrapper > div.vacancies-block__filters-wrapper > div > div.filters-block__filter-list > div.salary-field > div:nth-child(3) > div:nth-child(1) > div > input").type("6000000");
                cy.get("#app > div.page > div > section > div > div.vacancies-block__vacancies-filters-wrapper > div.vacancies-block__filters-wrapper > div > div.filters-block__filter-list > div.salary-field > div:nth-child(3) > div:nth-child(2) > div > input").type("234");

            cy.get("#app > div.page > div > section > div > div.vacancies-block__vacancies-filters-wrapper > div.vacancies-block__filters-wrapper > div > div.filters-block__filter-list > div:nth-child(3)").click();
            cy.contains("Полная занятость").click();

            cy.get("#app > div.page > div > section > div > div.vacancies-block__vacancies-filters-wrapper > div.vacancies-block__filters-wrapper > div > div.filters-block__filter-list > div:nth-child(3)").click();
            cy.contains("Любой").click();

            cy.get("#app > div.page > div > section > div > div.vacancies-block__vacancies-filters-wrapper > div.vacancies-block__filters-wrapper > div > div.filters-block__filter-list > div:nth-child(3)").click();
            cy.contains("Не полная занятость").click();
            
            cy.get("#app > div.page > div > section > div > div.vacancies-block__vacancies-filters-wrapper > div.vacancies-block__filters-wrapper > div > div.filters-block__filter-list > div:nth-child(4)").click();
            cy.contains("Любой").click();

            cy.get("#app > div.page > div > section > div > div.vacancies-block__vacancies-filters-wrapper > div.vacancies-block__filters-wrapper > div > div.filters-block__filter-list > div:nth-child(4)").click();
            cy.contains("Очный").click();

            cy.get("#app > div.page > div > section > div > div.vacancies-block__vacancies-filters-wrapper > div.vacancies-block__filters-wrapper > div > div.filters-block__filter-list > div:nth-child(4)").click();
            cy.contains("Дистант").click();
            
            cy.get("#app > div.page > div > section > div > div.vacancies-block__vacancies-filters-wrapper > div.vacancies-block__filters-wrapper > div > div.filters-block__filter-list > div:nth-child(4)").click();
            cy.contains("Совмещенный").click();

            cy.log("Клик на кнопку Сбросить фильтр");
            cy.get("#app > div.page > div > section > div > div.vacancies-block__vacancies-filters-wrapper > div.vacancies-block__filters-wrapper > div > div.filters-block__filter-list > div.custom-modal-mobile__buttons > button").click();

            })
        })
    })