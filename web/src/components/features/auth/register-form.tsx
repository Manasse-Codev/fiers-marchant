'use client'

export function RegisterForm() {
  return (
    <div className="rounded-lg border bg-white p-8 shadow-md">
      <h1 className="mb-6 text-2xl font-bold text-gray-900">Créer un compte</h1>
      <form className="space-y-4">
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">Nom complet</label>
          <input type="text" className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">Email</label>
          <input type="email" className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">Mot de passe</label>
          <input type="password" className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <button type="submit" className="w-full rounded-md bg-blue-600 py-2 text-white hover:bg-blue-700">
          Créer mon compte
        </button>
      </form>
    </div>
  )
}
