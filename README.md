## Build e Run

Executar o servidor de desenvolvimento:

```bash
npm run dev
```

Abrir com seu navegador [http://localhost:3000](http://localhost:3000) hot reload habilitado

Build do projeto
```bash
npm run build
```

## Container PostgreSQL

Build da imagem:
```bash
docker build -t postgres .
```

Rodar container do PostgreSQL
```bash
docker run --name postgres-db -d -p 5432:5432 postgres
```

## Drizzle ORM

Criar seed no banco
```bash
DOTENV_CONFIG_PATH=.env npx tsx db/seed.ts
```

Gerar/aplicar schema do banco de dados
```bash
npx drizzle-kit push
```

Abrir interface gráfica do banco de dados com Drizzle
```bash
npx drizzle-kit studio
```