# News Explorer

News Explorer é uma aplicação React para pesquisar notícias por palavra-chave. Os resultados são exibidos em cards, e a palavra-chave e os artigos da pesquisa são mantidos no armazenamento local do navegador para restaurar a busca após recarregar a página.

## Tecnologias

- React
- Vite
- JavaScript
- CSS
- News API
- Proxy da TripleTen para as requisições de notícias em produção

## Funcionalidades

- Busca de notícias por palavra-chave.
- Exibição de notícias em cards, com opção para carregar mais resultados.
- Persistência local da palavra-chave e dos resultados da pesquisa.
- Layout responsivo com listas em três, duas ou uma coluna, conforme a largura da tela.
- Modais de login e cadastro.
- Página de artigos salvos na interface.

> Nesta fase, a interface de login, cadastro e artigos salvos está implementada. A integração dessas funcionalidades com a API própria será realizada nas etapas seguintes do projeto.

## Executar localmente

1. Clone este repositório e acesse a pasta do projeto.
2. Instale as dependências:

   ```bash
   npm install
   ```

3. Crie um arquivo `.env` na raiz do projeto e configure sua chave da News API:

   ```env
   VITE_NEWS_API_KEY=sua_chave
   ```

4. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

Para gerar e visualizar o build de produção localmente:

```bash
npm run build
npm run preview
```

Não envie o arquivo `.env` nem sua chave da News API ao GitHub. Para que a busca funcione no deploy, configure `VITE_NEWS_API_KEY` nas variáveis de ambiente do projeto na Vercel e faça um novo deploy. A aplicação usa o proxy da TripleTen para as requisições de notícias em produção.

## Scripts disponíveis

- `npm run dev`: inicia o servidor de desenvolvimento do Vite.
- `npm run build`: gera o build de produção.
- `npm run lint`: executa o ESLint.
- `npm run preview`: serve localmente o build de produção.

## Deploy

Aplicação publicada: [News Explorer](https://news-explorer-frontend-gamma.vercel.app/)
