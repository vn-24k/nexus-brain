import { UserButton, SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import { BrainCircuit } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-6">
      <div className="fixed top-6 right-6">
        <SignedIn><UserButton afterSignOutUrl="/" /></SignedIn>
      </div>
      <div className="text-center">
        <BrainCircuit className="w-20 h-20 text-purple-500 mx-auto mb-6" />
        <h1 className="text-6xl font-bold mb-4">Nexus Brain</h1>
        <p className="text-zinc-400 text-lg mb-8">Sistema Operacional Estratégico</p>
        <SignedIn>
          <a href="/painel" className="px-12 py-4 bg-purple-600 text-white font-bold rounded-2xl shadow-lg shadow-purple-500/50 hover:bg-purple-700 transition-all">
            ENTRAR NO PAINEL
          </a>
        </SignedIn>
        <SignedOut>
          <SignInButton mode="modal">
            <button className="px-12 py-4 bg-white text-black font-bold rounded-2xl">Acessar</button>
          </SignInButton>
        </SignedOut>
      </div>
    </main>
  );
}
