# Imagem oficial do PostgreSQL
FROM postgres:18.3

# Variáveis de ambiente
ENV POSTGRES_USER=postgres
ENV POSTGRES_PASSWORD=12345678
ENV POSTGRES_DB=postgre

# (Opcional) Copia scripts SQL para inicialização automática
# Tudo que estiver em /docker-entrypoint-initdb.d será executado ao subir o container
#COPY init.sql /docker-entrypoint-initdb.d/

# Expõe a porta padrão
EXPOSE 5432