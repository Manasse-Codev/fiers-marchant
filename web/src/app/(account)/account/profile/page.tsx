import type { Metadata } from 'next'
export const metadata: Metadata = { title: 'Mon profil' }
export default function ProfilePage() {
  return <div><h1 className="text-2xl font-bold">Mon profil</h1></div>
}
