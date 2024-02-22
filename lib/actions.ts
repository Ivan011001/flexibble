import prisma from "@/lib/prismadb";

export const getUser = async (email: string) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    return user;
  } catch (error: any) {
    return error.message;
  }
};

export const createUser = async ({
  name,
  email,
  avatarUrl,
  description = "",
  githubUrl = "",
  linkedInUrl = "",
}: {
  name: string;
  email: string;
  avatarUrl: string;
  description?: string;
  githubUrl?: string;
  linkedInUrl?: string;
}) => {
  try {
    const data = {
      name,
      email,
      avatarUrl,
      description,
      githubUrl,
      linkedInUrl,
    };

    return await prisma.user.create({ data });
  } catch (error: any) {
    return error.message;
  }
};
