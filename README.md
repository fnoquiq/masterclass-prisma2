<h3 align="center">
  :rocket: Prisma 2 - Beta
</h3>

<h1 align="center">
    <img alt="prisma-logo" title="prisma-logo" src="http://www.w3.org/2000/svg" width="250px" />
</h1>

- Estudo do framework **Prisma 2**, que nesta (17/05/2020) data ainda está em desenvolvimento e pode ser acessado em: https://www.prisma.io/.

---

:hammer: Configuração

- Inicie um SGBD. (ex: `sudo docker run --name pg-prisma-example -p 5432:5432 -e POSTGRES_USER=docker -e POSTGRES_PASS=mysecretpassword -e POSTGRES_DBNAME=prisma2-example -d -t kartoza/postgis`);

- Para rodar as migrations, execute `prisma migrate up --experimental`. Obs: Garanta que um servidor de banco de dados esteja sendo executado e com um banco de dados criado com o nome de prisma2-example);

- Rode no terminal `npx prisma generate` para disponibilizar a api do prisma;

- Por fim, execute `yarn dev` para iniciar a aplicação;

---

:art: Prisma studio

- Execute `npx prisma studio --experimental` para ter acesso a um 'database admin', ele pode ser acessado em `http://localhost:5555/`.
