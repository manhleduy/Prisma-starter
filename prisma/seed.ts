import {prisma} from "../prisma/client.ts";

async function main() {
  await prisma.user.create({
    data: {
      name: "Bob", 
      email: "bob@prisma.io", 
      posts: {
        create: [
          {
            title: "Hello World", 
            published: true, 
          }, 
          {
            title: "My second post", 
            content: "This is still a draft", 
          }, 
        ], 
      }, 
    }, 
  }); 
  console.log('✅ Seed data inserted');
}

await main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });