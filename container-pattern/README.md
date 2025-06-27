# Container Pattern (React)

Este projeto demonstra o uso do padrão Container Component em React, separando lógica de dados e apresentação.

## Componentes principais

- **DataSource**: Componente genérico que recebe uma função para buscar dados e injeta o resultado como prop para seus filhos.
- **ResourceLoader**: Carrega recursos de uma URL e injeta como prop para seus filhos.
- **CurrentUserLoader**: Carrega dados do usuário atual e injeta como prop para seus filhos.
- **DataSourceWithRender**: Variante do DataSource que utiliza a prop `render` para renderização customizada.

## Exemplos de uso

- `src/components/data-source.jsx`
- `src/components/resource-loader.jsx`
- `src/components/current-user-loader.jsx`
- `src/components/data-source-with-render.jsx`

## Como rodar o projeto

1. Instale as dependências:
   ```bash
   npm install
   ```
2. Rode o servidor backend:
   ```bash
   node server.js
   ```
3. Rode o frontend:
   ```bash
   npm start
   ```

Acesse o endereço exibido no terminal para visualizar os exemplos.

## Objetivo

Demonstrar padrões avançados de composição e separação de responsabilidades em React usando o padrão Container Component.
