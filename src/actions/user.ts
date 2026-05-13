"use server";
import { auth, currentUser } from "@clerk/nextjs/server";

export async function syncUser() {
  const { userId } = await auth();
  const user = await currentUser();
  if (!userId || !user) return null;
  return { userId, name: user.firstName };
}
