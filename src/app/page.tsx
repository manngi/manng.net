import Image from 'next/image'
import Header from './components/Header'

import { Inter, Pixelify_Sans } from 'next/font/google'

const pixelify_sans = Pixelify_Sans({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#202020]">
      <div className="container mx-auto px-12 py-4">
        <Header />
      </div>
    </main>
  )
}
