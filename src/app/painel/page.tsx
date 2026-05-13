export default function PainelPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-6">
      <h1 className="text-4xl font-bold text-purple-600">Acesso Confirmado</h1>
      <p className="text-zinc-400 mt-2">Bem-vindo ao Centro de Comando, Vinicius.</p>
      <a href="/" className="mt-8 px-6 py-2 bg-zinc-900 rounded-full text-sm">Sair</a>
    </div>
  );
}
