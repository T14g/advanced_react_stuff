# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Higher Order Components (HOC)

Um Higher Order Component (HOC) é uma função que recebe um componente React e retorna um novo componente, adicionando funcionalidades extras ao componente original sem modificar seu código diretamente.

**Exemplo clássico:**
- O HOC `logProps` recebe um componente e retorna outro que faz log das props recebidas antes de renderizar o componente original.

```jsx
export const logProps = Component => {
    return (props) => {
        console.log(props);
        return <Component {...props} />;
    }
}
```

**Vantagens dos HOCs:**
- Reutilização de lógica entre múltiplos componentes.
- Separação de responsabilidades.
- Composição flexível de funcionalidades (ex: logging, autenticação, manipulação de dados).

HOCs são amplamente usados em React para abstrair comportamentos comuns e criar componentes mais limpos e reutilizáveis.
