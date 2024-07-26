import Link from "next/link";

export function Tools() {
    return <section id="tools" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                    <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Tools</div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Tools Installed by DevEx</h2>
                    <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        DevEx sets up a variety of tools to enhance your development workflow. Here's a list of the tools
                        installed, categorized by their purpose.
                    </p>
                </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                <div className="flex flex-col justify-start space-y-4">
                    <h3 className="text-xl font-bold">Terminal Tools</h3>
                    <ul className="grid gap-2">
                        <li>
                            <div className="grid gap-1">
                                <h4 className="font-semibold">
                                    <Link href="#" target="_blank" rel="noopener noreferrer" prefetch={false}>
                                        Zsh
                                    </Link>
                                </h4>
                                <p className="text-muted-foreground">
                                    A powerful shell with advanced features and scripting capabilities.
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className="grid gap-1">
                                <h4 className="font-semibold">
                                    <Link href="#" target="_blank" rel="noopener noreferrer" prefetch={false}>
                                        Homebrew
                                    </Link>
                                </h4>
                                <p className="text-muted-foreground">
                                    A package manager for macOS that simplifies installing and managing software.
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className="grid gap-1">
                                <h4 className="font-semibold">
                                    <Link href="#" target="_blank" rel="noopener noreferrer" prefetch={false}>
                                        Oh My Zsh
                                    </Link>
                                </h4>
                                <p className="text-muted-foreground">
                                    A community-driven framework for managing your Zsh configuration.
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className="grid gap-1">
                                <h4 className="font-semibold">
                                    <Link href="#" target="_blank" rel="noopener noreferrer" prefetch={false}>
                                        Oh My Posh
                                    </Link>
                                </h4>
                                <p className="text-muted-foreground">
                                    A prompt theme engine for customizing your terminal prompt.
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col justify-start space-y-4">
                    <h3 className="text-xl font-bold">Color Schemes</h3>
                    <ul className="grid gap-2">
                        <li>
                            <div className="grid gap-1">
                                <h4 className="font-semibold">
                                    <Link href="#" target="_blank" rel="noopener noreferrer" prefetch={false}>
                                        SynthWave 84
                                    </Link>
                                </h4>
                                <p className="text-muted-foreground">
                                    A retro-futuristic color scheme inspired by the synthwave music genre.
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className="grid gap-1">
                                <h4 className="font-semibold">
                                    <Link href="#" target="_blank" rel="noopener noreferrer" prefetch={false}>
                                        Tokyo Night
                                    </Link>
                                </h4>
                                <p className="text-muted-foreground">
                                    A clean and modern color scheme with a dark and calming aesthetic.
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>;
}