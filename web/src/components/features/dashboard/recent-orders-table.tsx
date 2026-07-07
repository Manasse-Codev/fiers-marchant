// Server Component
export function RecentOrdersTable() {
  return (
    <div className="rounded-lg border bg-white p-6 shadow-sm">
      <h3 className="mb-4 font-semibold">Commandes récentes</h3>
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b text-gray-500">
            <th className="pb-2 text-left">ID</th>
            <th className="pb-2 text-left">Client</th>
            <th className="pb-2 text-left">Statut</th>
            <th className="pb-2 text-right">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr><td colSpan={4} className="py-4 text-center text-gray-400">Aucune commande récente</td></tr>
        </tbody>
      </table>
    </div>
  )
}
