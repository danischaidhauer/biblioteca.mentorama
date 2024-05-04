
Cypress.Commands.add('pesquisarLivro', () => {
    cy.get('.content').should('contain', 'Saudade');
});

Cypress.Commands.add('pesquisarAutor', () => {
    cy.get('.content').should('contain', 'Casimiro de Abreu');
});

