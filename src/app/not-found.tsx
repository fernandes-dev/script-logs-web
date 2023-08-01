import Link from "next/link";

export default function NotFound() {
  return <main className="h-screen w-screen flex flex-col justify-center align-middle bg-purple-100">
    <div className="flex justify-center">
      <h1 className="text-2xl">Página não encontrada</h1>
    </div>
    <div className="flex justify-center">
      <Link className="text-2xl font-bold text-purple-700" href={'/'}>Voltar para página inicial</Link>
    </div>
  </main>
}