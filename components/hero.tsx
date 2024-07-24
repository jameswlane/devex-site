"use client"

import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import React from "react"

export function Hero() {
  return (
    <>
      <header className="flex items-center justify-between px-4 py-2 bg-slate-800 text-white">
        <div className="flex items-center space-x-2">
          <TerminalIcon className="w-6 h-6" />
          <span className="text-lg font-semibold">Dev Setup</span>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="#" className="hover:text-gray-300" prefetch={false}>
                Home
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-gray-300" prefetch={false}>
                Features
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-gray-300" prefetch={false}>
                DevEx.sh
              </Link>
            </li>
          </ul>
        </nav>
        <Link
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 hover:text-gray-300"
          prefetch={false}
        >
          <GithubIcon className="w-5 h-5" />
          <span>GitHub</span>
        </Link>
      </header>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-900">
        <div className="container px-4 md:px-6 flex flex-col items-center text-center space-y-6">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Set up your dev environment in a snap
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
              Copy and run this one-liner to install everything you need for development on Debian-based Linux and
              macOS.
            </p>
          </div>
          <div className="bg-gray-800 rounded-md w-full max-w-2xl p-4 flex items-center space-x-4">
            <Input
              type="text"
              defaultValue="curl -sSL https://example.com/setup.sh | bash"
              className="flex-1 bg-transparent border-none focus:ring-0 text-white"
              readOnly
            />
            <Button variant="ghost" size="icon" className="rounded-full">
              <CopyIcon className="w-5 h-5 text-white" />
              <span className="sr-only">Copy script</span>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
