# News Explorer

News Explorer é uma aplicação React para pesquisar notícias por palavra-chave. A interface exibe os resultados em cards e mantém a palavra-chave e os resultados da pesquisa no armazenamento local do navegador, para restaurá-los quando a página é recarregada.

## Tecnologias

- React
- Vite
- JavaScript
- CSS
- News API durante o desenvolvimento local
- Proxy da TripleTen no build de produção

## Funcionalidades

- Pesquisa de notícias por palavra-chave.
- Exibição dos resultados em cards, com opção para mostrar mais notícias.
- Persistência local da busca e dos resultados.
- Layout responsivo, incluindo listas em três, duas ou uma coluna conforme a largura da tela.
- Modais de login e cadastro na interface.

> A interface de login, cadastro e artigos salvos está presente nesta fase. A integração dessas funcionalidades com a API própria faz parte das etapas seguintes do projeto.

## Executar localmente

1. Clone este repositório e entre na pasta do projeto.
2. Instale as dependências:

   ```bash
   npm install
   ```

3. Crie um arquivo `.env` na raiz do projeto e adicione sua chave da News API:

   ```env
   VITE_NEWS_API_KEY=sua_chave
   ```

4. Inicie a aplicação em modo de desenvolvimento:

   ```bash
   npm run dev
   ```

Para testar o comportamento de produção localmente, execute:

```bash
npm run build
npm run preview
```

Não publique nem envie sua chave da News API ao GitHub. No build de produção, a aplicação usa o proxy da TripleTen, sem precisar cadastrar a chave na Vercel.

## Deploy

O link do deploy será adicionado após a publicação na Vercel.
