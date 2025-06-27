# advanced_react_stuff

Este repositório reúne exemplos avançados de padrões de projeto em React, com foco em componentes controlados, não controlados e o padrão Container Component.

## Projetos

### 1. container-pattern

Demonstra o uso do padrão Container Component, separando lógica de dados e apresentação.

- **Principais componentes:**
  - `DataSource`: Componente genérico para buscar dados e injetar como prop.
  - `ResourceLoader`: Carrega recursos de uma URL e injeta como prop.
  - `CurrentUserLoader`: Carrega dados do usuário atual e injeta como prop.
  - `DataSourceWithRender`: Variante que utiliza prop `render` para renderização customizada.
- **Exemplo de uso:**
  - Veja os arquivos em `container-pattern/src/components/`
- **Como rodar:**
  1. `cd container-pattern`
  2. `npm install`
  3. `node server.js` (backend)
  4. `npm start` (frontend)

### 2. uncontrolled-controlled-components

Demonstra a diferença entre componentes controlados e não controlados em React, utilizando Vite para o setup do ambiente.

- **Principais componentes:**
  - `UncontrolledForm`: Formulário não controlado usando refs (`useRef`).
  - `ControlledForm`: Formulário controlado usando estado (`useState`).
- **Exemplo de uso:**
  - Veja os arquivos em `uncontrolled-controlled-components/src/components/`
- **Como rodar:**
  1. `cd uncontrolled-controlled-components`
  2. `npm install`
  3. `npm run dev`

## Objetivo

Facilitar o entendimento prático de padrões avançados de componentes em React, promovendo a separação de responsabilidades e boas práticas de composição.
