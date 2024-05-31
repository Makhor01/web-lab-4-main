describe('Компонент MainPage', () => {
  beforeEach(() => {
    // Переход на страницу, где рендерится компонент MainPage.
    cy.visit('/');
  });

  it('должен отображать компонент Author', () => {
    cy.get('Author').should('exist');
  });

  it('должен отображать компонент Header с навигационными ссылками', () => {
    cy.get('Header').should('exist');
    cy.get('Header').within(() => {
      cy.contains('Github').should('have.attr', 'href', 'https://github.com/Makhor01');
      cy.contains('Log out').should('have.attr', 'href', '/');
    });
  });

  it('должен отображать компонент Input', () => {
    cy.get('Input').should('exist');
  });

  it('должен отображать компонент Footer', () => {
    cy.get('Footer').should('exist');
  });

  it('должен отображать компонент Toaster в нижнем правом углу', () => {
    cy.get('Toaster').should('exist');
    // Предполагая, что тостер появляется при определенном действии, например, нажатии кнопки
    // Пример:
    // cy.get('button').click();
    // cy.get('.react-hot-toast').should('be.visible');
  });
});
