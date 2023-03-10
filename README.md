
# Food Explorer

Food Explorer é o ultimo desafio do curso explorer da Rocketseat. Uma aplicação responsiva de um restaurante onde tem os usuários podem criar uma conta, visualizar os pratos e pesquisar pelo nome do prato e o ingrediente que deseja. Já o administrador consegue criar pratos, editar e deletar.

## Preview

![Home](https://user-images.githubusercontent.com/91755263/224166140-ade5e148-8559-441f-8c1d-0c57101e2a64.png)

![Details](https://user-images.githubusercontent.com/91755263/224166260-7575de0e-7932-4e68-a756-d35de7d210ba.png)

## Referência

 - [ReactJs](https://reactjs.org/)
 - [Vite](https://vitejs.dev/)
 - [Styled Components](https://styled-components.com/)
 - [Axios](https://www.npmjs.com/package/axios)
 - [React Icons](https://react-icons.github.io/react-icons/)
 - [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)


## Clone
Para clonar navegue ao local desejado e digite no terminal.

```bash
  $ git clone https://github.com/gabrielbarros23/Food-Explorer-FrontEnd.git
```

## BackEnd

No link abaixo estará o repositório do BackEnd com instruções para ligar o servidor em modo desenvolvimento

[BackEnd](https://github.com/gabrielbarros23/Food-Explorer-API)

## FrontEnd em modo desenvolvimento

O FrontEnd esta conectado com a api hospedada no render. Para conectar com o BackEnd em desenvolvendor basta
navegar ate src/services/api.js e trocar a baseURL para "http://localhost:" e a PORT que seu BackEnd esta rodando.

após isso basta apenas digitar os comandos abaixo em seu terminal.

```bash
  # Instale o node_modules
  $ npm install

  # Agora inicie o servidor do FrontEnd
  $ npm run dev

  # Irá exibir o link para acessar a aplicação, basta colocar o link no seu navegador.
```

## Conta Admin

```bash
  email: admin@admin.com
  senha: admin
```
BackEnd foi hospedado no Render e o FrontEnd no Netlify

  - [Render](https://render.com)
  - [Netlify](https://www.netlify.com/)

**OBS: Por ser uma host gratuita, o BackEnd hiberna após ficar inativo. Ao usar a aplicação, ela dará início normalmente em 1 minuto.**

[Resultado Final](https://food-explorer1.netlify.app/)