import {BrushIcon} from "@/components/icons/BrushIcon";
import {PackageIcon} from "@/components/icons/PackageIcon";
import {TerminalIcon} from "@/components/icons/TerminalIcon";
import {ZapIcon} from "@/components/icons/ZapIcon";

export function Section() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container space-y-12 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Supercharge Your Development Environment
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Unlock the power of a seamless development workflow with these essential tools.
            </p>
          </div>
        </div>
        <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-4">
          <div className="grid gap-1">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-primary p-2 text-primary-foreground">
                <TerminalIcon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold">zsh</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              A powerful and flexible shell that enhances your command-line experience.
            </p>
          </div>
          <div className="grid gap-1">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-primary p-2 text-primary-foreground">
                <PackageIcon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold">Homebrew</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              The missing package manager for macOS, making it easy to install and manage software.
            </p>
          </div>
          <div className="grid gap-1">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-primary p-2 text-primary-foreground">
                <ZapIcon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold">Oh My Zsh</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              An open-source, community-driven framework for managing your zsh configuration.
            </p>
          </div>
          <div className="grid gap-1">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-primary p-2 text-primary-foreground">
                <BrushIcon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold">Oh My Posh</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              A fast and flexible prompt for any shell, with a rich ecosystem of themes.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
