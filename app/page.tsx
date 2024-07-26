import Image from "next/image";
import Link from "next/link";

import {Input} from "@/components/ui/input";
import {Footer} from "@/components/Footer";
import {Features} from "@/components/Features";
import {Install} from "@/components/Install";
import {Tools} from "@/components/Tools";
import {Header} from "@/components/Header";

import desktopScreenshot from "@/public/desktop-screenshot.png";

export default function Home() {
  return (
      <div className="flex flex-col min-h-[100dvh]">
        <Header/>
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
                <Image
                    src={desktopScreenshot}
                    alt="DevEx"
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-video"
                />
              </div>
            </div>
          </section>
          <Features/>
          <Install/>
          <Tools/>
          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
              <div className="space-y-3">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Get Started with DevEx</h2>
                <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Streamline your development workflow and focus on building great products.
                </p>
              </div>
              <div className="mx-auto w-full max-w-sm space-y-2">
                <Input type="text" value="wget -qO- https://devex.sh/install | bash" readOnly className="w-full"/>
              </div>
            </div>
          </section>
        </main>
        <Footer/>
      </div>
  );
}
