import prisma from "@/lib/prismadb";

export const getUser = async (email: string) => {
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  return user;
};
