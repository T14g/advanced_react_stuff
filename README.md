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

## Controlled vs Uncontrolled Components

### Controlled Components

- O estado (dados, etapa atual, visibilidade) é controlado pelo componente pai.
- Permite lógica condicional, como exibir ou ocultar etapas de um fluxo com base nos dados já preenchidos.
- Facilita a integração com outros estados globais, contextos ou APIs.
- Ideal para fluxos dinâmicos, formulários complexos, validações e quando é necessário compartilhar dados entre componentes.
- Exemplo: O fluxo controlado (`ControlledFlow`) permite que o parent decida quais etapas mostrar, reiniciar ou pular etapas, e acessar todos os dados do usuário em tempo real.

**Vantagens:**
- Flexibilidade total e previsibilidade.
- Fácil de testar e debugar.
- Permite lógica dinâmica e integração com outros sistemas.

### Uncontrolled Components

- O estado interno é gerenciado pelo próprio componente.
- O parent não tem acesso direto ao estado interno, apenas dispara ações (como abrir um modal ou avançar um passo).
- Útil para componentes simples, isolados ou widgets reutilizáveis.
- Exemplo: Um formulário não controlado (`UncontrolledForm`) ou um modal que gerencia sua própria abertura/fechamento.

**Vantagens:**
- Simplicidade e encapsulamento.
- Menos código e responsabilidade no parent.
- Ideal para casos onde o parent não precisa saber do estado interno.

### Resumo
- Use **controlled** quando precisar de integração, lógica condicional, manipulação dinâmica ou compartilhamento de dados.
- Use **uncontrolled** para componentes autocontidos, simples ou quando o parent não precisa controlar o estado.

Esses padrões são essenciais para criar aplicações React escaláveis, reutilizáveis e fáceis de manter.

## Objetivo

Facilitar o entendimento prático de padrões avançados de componentes em React, promovendo a separação de responsabilidades, boas práticas de composição e a escolha consciente entre controlled e uncontrolled components.
