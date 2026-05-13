import { UserButton, SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import { BrainCircuit } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-6">
      <div className="fixed top-6 right-6">
        <SignedIn><UserButton afterSignOutUrl="/" /></SignedIn>
      </div>
      <div className="text-center space-y-6">
        <BrainCircuit className="w-20 h-20 text-indigo-500 mx-auto" />
        <h1 className="text-6xl font-bold tracking-tighter">Nexus Brain</h1>
        <p className="text-zinc-400 text-lg">Sistema de Comando Estratégico.</p>
        <div className="pt-6">
          <SignedIn>
            <a href="/painel" className="inline-block px-12 py-4 bg-indigo-600 text-white font-bold rounded-2xl hover:bg-indigo-700 shadow-2xl shadow-indigo-500/50 transition-all active:scale-90">
              ENTRAR NO PAINEL
            </a>
          </SignedIn>
          <SignedOut>
            <SignInButton mode="modal">
              <button className="px-12 py-4 bg-white text-black font-bold rounded-2xl">Acessar</button>
            </SignInButton>
          </SignedOut>
        </div>
      </div>
    </main>
  );
}
