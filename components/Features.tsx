export function Features() {
    return <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                    <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Features</div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                        Streamline Your Development Workflow
                    </h2>
                    <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        DevEx takes care of setting up your development environment, so you can focus on writing code and
                        shipping features.
                    </p>
                </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                <img
                    src="/placeholder.svg"
                    alt="terminal"
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                />
                <div className="flex flex-col justify-center space-y-4">
                    <ul className="grid gap-6">
                        <li>
                            <div className="grid gap-1">
                                <h3 className="text-xl font-bold">One-Click Setup</h3>
                                <p className="text-muted-foreground">
                                    Get your development environment up and running in minutes with a single command.
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className="grid gap-1">
                                <h3 className="text-xl font-bold">Consistent Environments</h3>
                                <p className="text-muted-foreground">
                                    Ensure your team is working with the same tools and configurations across all projects.
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className="grid gap-1">
                                <h3 className="text-xl font-bold">Automated Updates</h3>
                                <p className="text-muted-foreground">
                                    Keep your development tools and dependencies up-to-date with automatic updates.
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>;
}