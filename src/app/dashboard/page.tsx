export default function DashboardPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-6 text-center">
      <h1 className="text-4xl font-bold text-purple-500 mb-4">Painel de Comando</h1>
      <p className="text-gray-400 mb-8">O Nexus Brain está operacional.</p>
      <a href="/" className="px-4 py-2 border border-zinc-700 rounded-lg hover:bg-zinc-900 transition">
        Voltar ao Início
      </a>
    </div>
  );
}
