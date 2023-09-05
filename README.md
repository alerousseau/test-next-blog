# Fullstack Authentication Example with Next.js and NextAuth.js

This is the starter project for the fullstack tutorial with Next.js and Prisma. You can find the final version of this project in the [`final`](https://github.com/prisma/blogr-nextjs-prisma/tree/final) branch of this repo.


## Issues

### Using .env.local with prisma

[Solution](https://stackoverflow.com/questions/67796217/prisma-getting-environment-variable-not-found-error-message-when-running-graph)

```sh
dotenv -e .env.local -- npx prisma db push

dotenv -e .env.local -- npx prisma studio
```
