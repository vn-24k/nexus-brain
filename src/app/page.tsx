import { UserButton, SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import { BrainCircuit } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-6">
      <div className="fixed top-6 right-6">
        <SignedIn><UserButton afterSignOutUrl="/" /></SignedIn>
      </div>
      <div className="text-center space-y-6">
        <BrainCircuit className="w-20 h-20 text-purple-600 mx-auto" />
        <h1 className="text-6xl font-bold tracking-tighter text-white">Nexus Brain</h1>
        <p className="text-zinc-400 text-lg">Seu centro de comando estratégico.</p>
        <div className="pt-6">
          <SignedIn>
            <a href="/dashboard" className="inline-block px-12 py-4 bg-purple-600 text-white font-bold rounded-2xl hover:bg-purple-700 transition-all active:scale-95 shadow-2xl shadow-purple-500/20">
              Começar Agora
            </a>
          </SignedIn>
          <SignedOut>
            <SignInButton mode="modal">
              <button className="px-12 py-4 bg-white text-black font-bold rounded-2xl hover:bg-zinc-200">
                Acessar Sistema
              </button>
            </SignInButton>
          </SignedOut>
        </div>
      </div>
    </main>
  );
}
