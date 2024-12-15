import Image from 'next/image'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { ToolSearch } from './components/ToolSearch'
import { Resources } from './components/Resources'
import { Footer } from './components/Footer'

export default function Home() {
    return (
        <div className="min-h-screen bg-gray-100">
            <Header />
            <main className="container mx-auto px-4 py-8">
                <Hero />
                <ToolSearch />
                <Resources />
            </main>
            <Footer />
        </div>
    )
}

