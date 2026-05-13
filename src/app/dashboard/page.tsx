export default function DashboardPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-bold text-purple-500 mb-4">Painel de Comando</h1>
      <p className="text-gray-400 text-center">Bem-vindo ao Nexus Brain. Seus módulos de IA e automação aparecerão aqui.</p>
      <div className="mt-8 grid grid-cols-1 gap-4 w-full max-w-md">
        <div className="p-4 border border-purple-900 bg-zinc-900 rounded-lg">
          <h2 className="font-semibold">Módulo de Automação</h2>
          <p className="text-sm text-gray-500">Status: Ativo via Termux</p>
        </div>
      </div>
    </div>
  );
}
