import { UserButton, SignInButton, SignIn, SignOutButton } from "@clerk/nextjs";
import { syncUser } from "../actions/user";
import { BrainCircuit } from "lucide-react";

export default async function Home() {
  await syncUser();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-slate-950 text-white">
      <div className="fixed top-6 right-6">
        <SignIn><UserButton afterSignOutUrl="/" /></SignIn>
      </div>
      <div className="max-w-4xl w-full text-center space-y-8">
        <div className="flex justify-center">
          <BrainCircuit className="w-12 h-12 text-purple-500" />
        </div>
        <h1 className="text-5xl font-extrabold tracking-tight">Nexus <span className="text-purple-500">Brain</span></h1>
        <p className="text-slate-400 text-lg">Seu centro de comando estratégico via Termux.</p>
        <div className="pt-4">
          <SignOutButton>
            <SignInButton mode="modal">
              <button className="px-8 py-4 bg-white text-black font-bold rounded-full transition-all hover:scale-105">
                Começar Agora
              </button>
            </SignInButton>
          </SignOutButton>
          <SignIn>
            <a href="/dashboard" className="px-8 py-4 bg-purple-600 font-bold rounded-full">Acessar Dashboard</a>
          </SignIn>
        </div>
      </div>
    </main>
  );
}
