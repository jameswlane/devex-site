import Link from "next/link"

import { Input } from "@/components/ui/input"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import {TerminalIcon} from "@/components/icons/TerminalIcon";
import {GitHubIcon} from "@/components/icons/GitHubIcon";


export function Main() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <TerminalIcon className="h-6 w-6" />
          <span className="sr-only">DevEx</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Features
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Install
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Tools
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Support
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    DevEx - Developer Setup in 10 Minutes
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Streamline your development environment setup with DevEx. Get your tools, dependencies, and
                    configurations up and running in no time.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <div className="flex gap-2">
                    <Input
                      type="text"
                      value="wget -qO- https://devex.sh/install | bash"
                      readOnly
                      className="flex-1 w-full"
                    />
                  </div>
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <img
                src="/placeholder.svg"
                alt="DevEx"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              />
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
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
                alt="Placeholder"
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
        </section>
        <section id="install" className="w-full py-12 md:py-24 lg:py-32">
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
                    <Input type="text" value="wget -qO- https://devex.sh/install | bash" readOnly className="flex-1" />
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
                                    <GitHubIcon className="w-4 h-4" />
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
                                    <GitHubIcon className="w-4 h-4" />
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
                                    <GitHubIcon className="w-4 h-4" />
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
                                    <GitHubIcon className="w-4 h-4" />
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
        </section>
        <section id="tools" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
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
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Get Started with DevEx</h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Streamline your development workflow and focus on building great products.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <Input type="text" value="wget -qO- https://devex.sh/install | bash" readOnly className="w-full" />
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 DevEx. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}
