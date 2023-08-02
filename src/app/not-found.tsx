"use client"
import {useRouter} from "next/navigation";

export default function NotFound() {
  const router = useRouter()

  return <main className="h-screen w-screen flex flex-col justify-center align-middle bg-purple-100">
    <div className="flex justify-center">
      <h1 className="text-2xl">Página não encontrada</h1>
    </div>
    <div className="flex justify-center">
      <button className="text-2xl font-bold text-purple-700" onClick={() => router.back()}>
        Voltar para página anterior
      </button>
    </div>
  </main>
}