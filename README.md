## Build e run

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
docker run -d -p 5432:5432 --name postgres-db postgres
```