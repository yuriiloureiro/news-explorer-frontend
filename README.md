# News Explorer

News Explorer é uma aplicação React para pesquisar notícias por palavra-chave, criar uma conta e salvar artigos para consultar depois. O front-end está integrado à API própria do projeto para cadastro, autenticação e gerenciamento dos artigos salvos de cada usuário.

Os resultados da pesquisa são exibidos em cards. A palavra-chave e os artigos da pesquisa são mantidos no armazenamento local do navegador para restaurar a busca após recarregar a página.

## Tecnologias

- React
- Vite
- JavaScript
- CSS
- React Router DOM v5
- Context API
- Fetch API
- News API
- Proxy da TripleTen para as requisições de notícias em produção
- API própria para autenticação e gerenciamento de artigos salvos

## Funcionalidades

- Busca de notícias por palavra-chave.
- Exibição de notícias em cards, com opção para carregar mais resultados.
- Persistência local da palavra-chave e dos resultados da pesquisa.
- Layout responsivo com listas em três, duas ou uma coluna, conforme a largura da tela.
- Modais de login e cadastro integrados à API própria.
- Login automático após o cadastro.
- Autenticação com token JWT e recuperação dos dados do usuário pela API.
- Cabeçalho adaptado ao estado de autenticação e opção de sair da conta.
- Salvamento e exclusão de notícias vinculadas ao usuário autenticado.
- Página protegida de artigos salvos em `/saved-news`.
- Redirecionamento para a página inicial com abertura do modal de login ao acessar `/saved-news` sem autenticação.
- Abertura do modal de autenticação ao tentar salvar uma notícia sem estar logado.
- Manutenção dos artigos salvos pela API após atualizar a página.

## Executar localmente

### Pré-requisitos

- Node.js e npm instalados.
- Uma chave da News API.
- Back-end do News Explorer configurado e em execução para testar cadastro, login e artigos salvos localmente.

### Instalação

1. Clone o repositório e acesse a pasta do projeto:

   ```bash
   git clone https://github.com/yuriiloureiro/news-explorer-frontend.git
   cd news-explorer-frontend
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Crie um arquivo `.env` na raiz do projeto e configure sua chave da News API:

   ```env
   VITE_NEWS_API_KEY=sua_chave
   ```

4. Para testar a integração local, configure e inicie o [back-end do News Explorer](https://github.com/yuriiloureiro/news-explorer-backend) seguindo o README desse repositório. No ambiente de desenvolvimento, o front-end utiliza a API própria em `http://localhost:3000`.

5. Inicie o servidor de desenvolvimento do front-end:

   ```bash
   npm run dev
   ```

Para gerar e visualizar o build de produção localmente:

```bash
npm run build
npm run preview
```

Não envie o arquivo `.env` ao GitHub. Variáveis com o prefixo `VITE_` são incorporadas ao código entregue ao navegador; não use esse prefixo para segredos do back-end, como `JWT_SECRET` ou credenciais do banco de dados.

## Scripts disponíveis

- `npm run dev`: inicia o servidor de desenvolvimento do Vite.
- `npm run build`: gera o build de produção.
- `npm run lint`: executa o ESLint.
- `npm run preview`: serve localmente o build de produção.

## Integração com as APIs

### Notícias

A busca utiliza a News API em desenvolvimento e o proxy da TripleTen em produção. A chave é configurada pela variável `VITE_NEWS_API_KEY`.

### API própria

O front-end utiliza a API própria para as seguintes operações:

- `POST /signup`: cadastro de usuário.
- `POST /signin`: autenticação e obtenção do token JWT.
- `GET /users/me`: consulta dos dados do usuário autenticado.
- `GET /articles`: consulta dos artigos salvos.
- `POST /articles`: salvamento de artigo.
- `DELETE /articles/:articleId`: exclusão de artigo salvo.

As requisições protegidas enviam o token JWT no cabeçalho `Authorization`, com o esquema `Bearer`. O token é armazenado no `localStorage`, e os artigos salvos são mantidos no back-end, associados ao usuário autenticado.

API em produção: [News Explorer API](https://news-explorer-backend-tzeq.onrender.com).

## Rotas

- `/`: página inicial com busca de notícias.
- `/saved-news`: página de artigos salvos, acessível apenas após autenticação.

Login e cadastro são realizados por modais da aplicação.

## Deploy

Aplicação publicada: [News Explorer](https://news-explorer-frontend-gamma.vercel.app/).

O front-end está hospedado na Vercel. Para que a busca funcione no deploy, configure `VITE_NEWS_API_KEY` nas variáveis de ambiente do projeto na Vercel e faça um novo deploy. A aplicação usa o proxy da TripleTen para as requisições de notícias em produção.

O arquivo `vercel.json`, na raiz do projeto, encaminha as rotas para `index.html`, permitindo o acesso direto e a atualização de páginas como `/saved-news` sem erro 404 da hospedagem:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

Esse rewrite permite que o React Router processe a rota. A proteção de `/saved-news` é feita pela aplicação, e as operações com dados protegidos também exigem autenticação na API.

O CORS do back-end está configurado para o front-end local em `http://localhost:5173` e para o domínio de produção indicado acima. URLs de Preview da Vercel não estão incluídas nessa lista; para testar autenticação e artigos salvos no deploy, utilize o domínio de produção.

## Repositórios

- [Front-end](https://github.com/yuriiloureiro/news-explorer-frontend)
- [Back-end](https://github.com/yuriiloureiro/news-explorer-backend)

## Autor

Yuri Loureiro
