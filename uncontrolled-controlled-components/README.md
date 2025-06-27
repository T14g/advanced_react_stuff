# Uncontrolled & Controlled Components Example (React + Vite)

Este projeto demonstra a diferença entre componentes controlados e não controlados (controlled e uncontrolled) em React, utilizando Vite para o setup do ambiente.

## O que temos até agora

- **UncontrolledForm**: Um componente de formulário não controlado, que utiliza refs (`useRef`) para acessar os valores dos campos diretamente do DOM.
- **ControlledForm**: Um componente de formulário controlado, que utiliza o estado do React (`useState`) para controlar os valores dos campos em tempo real.
- **App.jsx**: Renderiza ambos os exemplos para fácil comparação.

## Como rodar o projeto

1. Instale as dependências:
   ```bash
   npm install
   ```
2. Rode o projeto:
   ```bash
   npm run dev
   ```

Acesse o endereço exibido no terminal para visualizar os exemplos.

## Estrutura dos componentes

- `src/components/UncontrolledForm.jsx`
- `src/components/ControlledForm.jsx`

## Objetivo

Facilitar o entendimento prático das diferenças entre os padrões controlled e uncontrolled em formulários React.
