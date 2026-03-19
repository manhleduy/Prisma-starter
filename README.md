A simple expressjs using prismaORM with neon postgres database
run the prisma init to create the prisma folder and the schema.prisma file
*in prisma.config.ts file:
- schema: the schema.prisma file location
- migration: migrate the schema to the root postgres database(in this project is neon)
- seed: the seed file( must also config the path on the package.json and run "npx prisma db seed" to insert the seed data)
- datasource: the url to your database

* use the generated to config the structure of the database in your project run it first whenever you finish modify the data structure 
 
