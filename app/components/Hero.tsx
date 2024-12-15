export function Hero() {
    return (
        <section className="text-center py-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Setup Your Development Environment with Ease</h1>
            <p className="text-xl text-gray-600 mb-8">DevEx: The customizable CLI for Linux and macOS</p>
            <div className="bg-gray-800 text-white p-4 rounded-lg inline-block">
                <code className="text-sm">wget -qO- https://devex.sh/install | bash</code>
            </div>
            <p className="mt-4 text-sm text-gray-500">Copy and paste this command to install DevEx</p>
        </section>
    )
}

