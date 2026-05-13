export default function PainelPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-6 text-center">
      <h1 className="text-4xl font-bold text-purple-600 mb-4">Painel Operacional</h1>
      <p className="text-zinc-400">Sistema Nexus Brain online.</p>
      <a href="/" className="mt-8 px-6 py-2 bg-zinc-800 rounded-full text-sm text-white transition-all hover:bg-zinc-700">
        Voltar ao Início
      </a>
    </div>
  );
}
