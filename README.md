![image](https://github.com/user-attachments/assets/6ce3fd2e-d091-449f-b751-0470cc574815)
  
Aplicação web full-stack para gerenciamento de metas pessoais desenvolvido durante a NLW Pocket Javascript (evento promovido pela [Rocketseat](https://www.rocketseat.com.br/))

## Server

O back-end da aplicação foi construído em Typescript + Node.js, utilizando PostgreSQL como banco de dados. Para mapeamento das entidades e gerenciamento de migrations foi utilizado o Drizzle ORM.
Para uma melhor organização das consultas ao banco de dados, foi utilizado o conceito de Common Table Expressions (CTE) para buscar informações de resumo das metas de um usuário.

## Web

Já no front-end da aplicação, foi utilizado Typescript + React.js. Para estilização da aplicação foi utilizada a biblioteca TailwindCSS. Boa parte dos componentes usam de componentes prontos da biblioteca RadixUI,
permitindo ter componentes de fácil estilização e acessibilidade melhorada. Além disso, foi utilizado React Query para consultas ao back-end e React Hook Forms para gerenciamento do formulário de criação de metas.

## Instalação

Para iniciar a aplicação, você precisará ter instalado:

- [Node.js](https://nodejs.org/en/download/package-manager)
- [Docker](https://docs.docker.com/engine/install/)

Agora basta clonar este repositório e instalar suas dependências. Para isso acesse cada uma das pastas (`server` e `web`) e rode o comando `npm install` ou simplesmente `npm i`.

Dentro da pasta `server`, também será necessário criar um arquivo que guardará as variáveis ambiente. Para isso, crie um arquivo chamado `.env`, insira as seguintes propriedades e preencha o conteúdo delas
conforme preferir:

```bash
DATABASE_URL=
POSTGRES_USER=
POSTGRES_PASSWORD=
POSTGRES_DB=
```

Para subir o banco, você precisará estar no diretório `server` e utilizar o comando `docker compose up -d`. Dessa forma, o Docker irá baixar a imagem do banco e executá-la em background, graças à flag `-d`.

Depois disso, basta rodar o comando `npm run dev` nas pastas `server` e `web` e a aplicação estará pronta para ser utilizada.

## Screenshots

![image](https://github.com/user-attachments/assets/1fce5c26-c923-4e43-8673-75fadf1f5560)
![image](https://github.com/user-attachments/assets/14d11c8d-04d8-4dcc-8cbb-8475bb8d2894)
![image](https://github.com/user-attachments/assets/7d554a2e-3340-4f4e-8d95-2492017b0eed)

