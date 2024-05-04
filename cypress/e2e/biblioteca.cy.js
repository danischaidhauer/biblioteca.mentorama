
require('cypress-xpath');

describe('Exemplo de teste Cypress', () => {
    beforeEach(() => {
      cy.visit('/');
      cy.wait(2000); 
    });
  
    it('Verificar a existência do logo e se o mesmo está visível', () => {
      cy.get('#logo > a').should('exist');
      cy.get('#logo > a').should('be.visible');
      cy.get('#logo > a').should('contain', 'Livraria');
    });
    
    //teste comando personalizado

    it.only('Pesquisar um livro e um autor na página', () => {
      cy.pesquisarLivro(Cypress.env('NomeLivro'));
      cy.pesquisarAutor(Cypress.env('NomeAutor'));
  });

    it('Buscar um livro pelo nome do Livro e pelo nome do autor', () =>{
      cy.get('.content').should('contain', 'Saudades');
      cy.get('.content').should('contain', 'Casimiro de Abreu');
    });

    it('Verificar a existência de um livro na página principal da loja', () => {
      cy.get('.content').contains('Drácula').should('exist');
    });

    it('Adicionar um livro no carrinho, por meio do xpath', () => {
      cy.xpath('/html/body/div/div[1]/div[1]/div[2]/button').click();
    });

    it('Verificar se o livro foi adicionado corretamente no carrinho, por meio do título do livro', () => {
      cy.xpath('/html/body/div/div[1]/div[1]/div[2]/button').click();
      cy.get(':nth-child(5) > a').click();
      cy.get('#orders').contains('A Revolta de Atlas').should('be.visible');

    });

    it('Testar a funcionalidade do botão "Pagamento", que consta no Carrinho de Compras', () => {
      cy.xpath('/html/body/div/div[1]/div[1]/div[2]/button').click();
      cy.get(':nth-child(5) > a').click();
      cy.get('#orders').contains('A Revolta de Atlas').should('be.visible');
      cy.get('#order-info > button').click();
      cy.get('.alert-ok').click();
    });

    it('Assert nos botões "Livros", "Novidades", "Mais Vendidos", "Envio e Pagamento", "Carrinho de Compras", "Contatos", "Busca" e "Suporte"', () => {
      cy.get('.menu-main').contains('Livros').click();
      cy.get('.menu-main > :nth-child(2) > a').click();
      cy.get('.menu-main').contains('Mais vendidos').should('exist');
      cy.get('.menu-main').contains('Mais vendidos').click({force: true});
      cy.get('.menu-main').contains('Envio e pagamento').should('exist');
      cy.get('.menu-main').contains('Envio e pagamento').click();
      cy.xpath('/html/body/ul/li[5]/a').should('exist');
      cy.get('.menu-main').contains('Contatos').should('exist');
      cy.get('.menu-main').contains('Busca').should('exist');
      cy.get('.menu-main').contains('Suporte').should('exist');
    })

    it('Assert e clicar nos botões inferiores "Opinião", "Pedidos Antecipados" e "Sobre a loja"', () => {
      cy.get('#footer').contains('Opinião').should('exist');
      cy.xpath('/html/body/footer/div[1]/a').click();
      cy.get('#footer').contains('Pedidos antecipados').should('exist');
      cy.xpath('/html/body/footer/div[2]/a').click();
      cy.get('#footer').contains('Sobre a loja').should('exist');
      cy.xpath('/html/body/footer/div[3]/a').click();
    })
    
  });
  