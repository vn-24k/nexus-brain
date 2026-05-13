import { UserButton, SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import Link from "next/link";
import { BrainCircuit } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-6">
      <div className="fixed top-6 right-6">
        <SignedIn><UserButton afterSignOutUrl="/" /></SignedIn>
      </div>
      
      <div className="text-center space-y-6">
        <BrainCircuit className="w-16 h-16 text-purple-500 mx-auto" />
        <h1 className="text-5xl font-bold">Nexus Brain</h1>
        <p className="text-gray-400">Seu centro de comando estratégico via Termux.</p>
        
        <div className="pt-4">
          <SignedIn>
            <Link href="/dashboard" className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-purple-500 hover:text-white transition-all">
              Começar Agora
            </Link>
          </SignedIn>
          <SignedOut>
            <SignInButton mode="modal">
              <button className="px-8 py-3 bg-white text-black font-bold rounded-full">
                Fazer Login
              </button>
            </SignInButton>
          </SignedOut>
        </div>
      </div>
    </main>
  );
}
