// cypress/integration/loginPage.spec.js

describe('LoginPage', () => {
    beforeEach(() => {
        // Visit the Login Page before each test
        cy.visit('/login'); // Update the path as per your routing setup
    });

    it('should render the Author section', () => {
        cy.get('section').contains('Author').should('be.visible');
    });

    it('should render the Header with navigation links', () => {
        cy.get('header').within(() => {
            cy.contains('Github').should('have.attr', 'href', 'https://github.com/Makhor01');
        });
    });

    it('should render the Login form', () => {
        cy.get('form').within(() => {
            cy.get('input[name="username"]').should('be.visible');
            cy.get('input[name="password"]').should('be.visible');
            cy.get('button[type="submit"]').should('be.visible').contains('Log In');
        });
    });

    it('should display a toast notification on login attempt', () => {
        cy.get('form').within(() => {
            cy.get('input[name="username"]').type('testuser');
            cy.get('input[name="password"]').type('password');
            cy.get('button[type="submit"]').click();
        });

        cy.get('.react-hot-toast').should('be.visible').contains('Login attempt');
    });

    it('should render the Footer', () => {
        cy.get('footer').should('be.visible');
    });

    it('should display the toaster in the bottom-right corner', () => {
        cy.get('form').within(() => {
            cy.get('input[name="username"]').type('testuser');
            cy.get('input[name="password"]').type('password');
            cy.get('button[type="submit"]').click();
        });

        cy.get('.react-hot-toast').should('have.css', 'bottom').and('match', /px/);
        cy.get('.react-hot-toast').should('have.css', 'right').and('match', /px/);
    });
});
