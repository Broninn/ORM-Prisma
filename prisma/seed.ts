import { prisma } from "@/prisma";

async function seed() {
  await prisma.user.createMany({
    data: [
      {
        name: "Lúcio Silva",
        email: "lucio@email.com",
      },
      {
        name: "Michelle Silva",
        email: "michelle@email.com",
      },
    ],
  });
}

seed().then(() => {
  console.log("Seeding finished.");
  prisma.$disconnect();
});
