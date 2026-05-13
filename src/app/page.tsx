import { UserButton, SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import { BrainCircuit } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-6 text-center">
      <div className="fixed top-6 right-6">
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
      </div>
      
      <BrainCircuit className="w-20 h-20 text-indigo-500 mx-auto mb-6" />
      <h1 className="text-6xl font-bold mb-4">Nexus Brain</h1>
      <p className="text-zinc-400 text-lg mb-8">Centro de Comando Estratégico.</p>
      
      <div className="pt-6">
        <SignedIn>
          <a href="/painel" className="inline-block px-12 py-4 bg-indigo-600 text-white font-bold rounded-2xl shadow-xl shadow-indigo-500/40">
            ENTRAR NO PAINEL
          </a>
        </SignedIn>
        
        <SignedOut>
          <SignInButton mode="modal">
            <button className="px-12 py-4 bg-white text-black font-bold rounded-2xl">
              Acessar Sistema
            </button>
          </SignInButton>
        </SignedOut>
      </div>
    </main>
  );
}
