import Link from "next/link"

import { Card } from "@/components/ui/card"
import { TagIcon }  from "@/components/icons/TagIcon"
import { LinkIcon } from "@/components/icons/LinkIcon"
import { GitHubIcon } from "@/components/icons/GitHubIcon"
import { StarIcon } from "@/components/icons/StarIcon"

export function ApplicationCard() {
  return (
    <Card className="w-full max-w-md p-6 grid gap-6 relative">
      <div className="flex items-center gap-4">
        <div className="bg-primary rounded-md p-3 flex items-center justify-center">
          <img
            src="/placeholder.svg"
            width={32}
            height={32}
            alt="Tool Logo"
            className="w-8 h-8 text-primary-foreground"
          />
        </div>
        <div className="grid gap-1">
          <h3 className="text-xl font-semibold">Vercel</h3>
          <p className="text-muted-foreground flex-1">
            The easiest way to deploy your React, Vue, Angular, and more...
          </p>
        </div>
      </div>
      <div className="grid gap-2 text-sm">
        <div className="flex items-center gap-2 text-muted-foreground">
          <TagIcon className="w-4 h-4" />
          <span>Developer Tools</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <LinkIcon className="w-4 h-4" />
          <Link href="#" className="hover:underline" prefetch={false}>
            vercel.com
          </Link>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <GitHubIcon className="w-4 h-4" />
          <Link href="#" className="hover:underline" prefetch={false}>
            vercel/vercel
          </Link>
        </div>
      </div>
      <div className="absolute bottom-2 right-2 bg-muted rounded-full p-1">
        <StarIcon className="w-4 h-4 text-primary" />
      </div>
    </Card>
  )
}
