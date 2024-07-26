import {Input} from "@/components/ui/input";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import Link from "next/link";
import {GitHubIcon} from "@/components/icons/GitHubIcon";

export function Install() {
    return <section id="install" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Get Started with DevEx</h2>
                    <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        Setting up your development environment has never been easier. Follow these simple steps to get
                        started with DevEx.
                    </p>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="rounded-lg bg-muted p-4">
                        <h3 className="text-xl font-bold">1. Run DevEx</h3>
                        <p className="text-muted-foreground">
                            Run the DevEx script in your terminal using the following command:
                        </p>
                        <div className="mt-4 flex flex-col gap-2 sm:flex-row">
                            <Input type="text" value="wget -qO- https://devex.sh/install | bash" readOnly className="flex-1"/>
                        </div>
                    </div>
                    <div className="rounded-lg bg-muted p-4">
                        <h3 className="text-xl font-bold">2. Configure Your Projects</h3>
                        <p className="text-muted-foreground">
                            DevEx will automatically set up your development tools and dependencies for each project.
                        </p>
                    </div>
                    <div className="rounded-lg bg-muted p-4">
                        <h3 className="text-xl font-bold">3. Start Coding</h3>
                        <div className="rounded-lg bg-muted p-4">
                            <h3 className="text-xl font-bold">3. Start Coding</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <h4 className="text-lg font-semibold">Terminal Tools</h4>
                                    <ul className="grid gap-2 mt-2">
                                        <li>
                                            <Card>
                                                <CardHeader>
                                                    <CardTitle>
                                                        <Link href="#" target="_blank" rel="noopener noreferrer" prefetch={false}>
                                                            Zsh
                                                        </Link>
                                                    </CardTitle>
                                                    <CardDescription>
                                                        A powerful shell with advanced features and scripting capabilities.
                                                    </CardDescription>
                                                </CardHeader>
                                                <CardContent>
                                                    <div className="flex justify-between">
                                                        <span className="text-muted-foreground">Category: Terminal</span>
                                                        <Link href="#" target="_blank" rel="noopener noreferrer" prefetch={false}>
                                                            <GitHubIcon className="w-4 h-4"/>
                                                        </Link>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </li>
                                        <li>
                                            <Card>
                                                <CardHeader>
                                                    <CardTitle>
                                                        <Link href="#" target="_blank" rel="noopener noreferrer" prefetch={false}>
                                                            Homebrew
                                                        </Link>
                                                    </CardTitle>
                                                    <CardDescription>
                                                        A package manager for macOS that simplifies installing and managing software.
                                                    </CardDescription>
                                                </CardHeader>
                                                <CardContent>
                                                    <div className="flex justify-between">
                                                        <span className="text-muted-foreground">Category: Package Manager</span>
                                                        <Link href="#" target="_blank" rel="noopener noreferrer" prefetch={false}>
                                                            <GitHubIcon className="w-4 h-4"/>
                                                        </Link>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold">Desktop Tools</h4>
                                    <ul className="grid gap-2 mt-2">
                                        <li>
                                            <Card>
                                                <CardHeader>
                                                    <CardTitle>
                                                        <Link href="#" target="_blank" rel="noopener noreferrer" prefetch={false}>
                                                            Visual Studio Code
                                                        </Link>
                                                    </CardTitle>
                                                    <CardDescription>
                                                        A powerful code editor with a rich ecosystem of extensions and tools.
                                                    </CardDescription>
                                                </CardHeader>
                                                <CardContent>
                                                    <div className="flex justify-between">
                                                        <span className="text-muted-foreground">Category: Code Editor</span>
                                                        <Link href="#" target="_blank" rel="noopener noreferrer" prefetch={false}>
                                                            <GitHubIcon className="w-4 h-4"/>
                                                        </Link>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </li>
                                        <li>
                                            <Card>
                                                <CardHeader>
                                                    <CardTitle>
                                                        <Link href="#" target="_blank" rel="noopener noreferrer" prefetch={false}>
                                                            IntelliJ IDEA
                                                        </Link>
                                                    </CardTitle>
                                                    <CardDescription>
                                                        A powerful IDE for Java development with advanced features and tools.
                                                    </CardDescription>
                                                </CardHeader>
                                                <CardContent>
                                                    <div className="flex justify-between">
                                                        <span className="text-muted-foreground">Category: IDE</span>
                                                        <Link href="#" target="_blank" rel="noopener noreferrer" prefetch={false}>
                                                            <GitHubIcon className="w-4 h-4"/>
                                                        </Link>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>;
}