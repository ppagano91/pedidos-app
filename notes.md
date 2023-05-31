npm i -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

Para desarrollo (-D)
npm i -D prisma

Para interactuar con base de datos
npm i @prisma/client

Migrar modelos a DB
npx prisma migrate dev

Eliminar todos los registros de DB (resetea la DB), NO borra las tablas
npx prisma migrate dev

Administrador de DB de primsa
npx prisma studio
