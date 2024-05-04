# Testes Automatizados - Biblioteca Mentorama

Este projeto, tem como propósito a execução de testes automatizados no site da Biblioteca, disponibilizada no curso Analista de Testes da Mentorama.

## Configuração

- Instalar o node: npm install node
- Instalar o cypress: npm install cypress
- Instalar o pacote xpath: npm install -D cypress-xpath
- Instalar o pacote mochawesome (para gerar relatórios): npm install --save-dev mochawesome

## Como Testar 

- Para executar os testes, você deverá digitar no terminal pela primeira vez: npx cypress run
- As demais, você poderá executar da seguinte maneira: npm run cypress-open 

## Testes Executados

- Verificar a existência do logo da Livraria e se o mesmo está visível;
- Buscar um livro pelo nome do Livro e pelo nome do autor;
- Verificar a existência de um livro na página principal da loja;
- Adicionar um livro no carrinho, por meio do xpath;
- Verificar se o livro foi adicionado corretamente no carrinho, por meio do título do livro;
- Testar a funcionalidade do botão "Pagamento", que consta no Carrinho de Compras;
- Assert nos botões "Livros", "Novidades", "Mais Vendidos", "Envio e Pagamento", "Carrinho de Compras", "Contatos", "Busca" e "Suporte";
- Assert e clicar nos botões inferiores "Opinião", "Pedidos Antecipados" e "Sobre a loja";


## Relatórios de Teste

Para executar os relatórios, você deverá digitar no terminal:
- npx cypress run --reporter mochawesome

## Autores

- Danielle Schaidhauer

