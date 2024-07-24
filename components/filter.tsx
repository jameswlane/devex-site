"use client"

import { useState, useMemo } from "react"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { categories, os, applications} from "@/data/applications";
import Link from "next/link"

export function Filter() {
  const initialState = {
    category: [],
    required: [],
    os: [],
    search: "",
  };
  const [filters, setFilters] = useState(initialState)
  const items = applications
  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      const searchMatch = item.name.toLowerCase().includes(filters.search.toLowerCase())
      const categoryMatch = filters.category.length === 0 || filters.category.some((cat) => item.category.includes(cat))
      const requiredMatch = filters.required === null || filters.required === undefined || filters.required === item.required;
      const osMatch = filters.os.length === 0 || filters.os.every((os) => item.os.includes(os))
      return searchMatch && categoryMatch && requiredMatch && osMatch
    })
  }, [filters])
  const handleFilterChange = (type, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [type]: prevFilters[type].includes(value)
        ? prevFilters[type].filter((item) => item !== value)
        : [...prevFilters[type], value],
    }))
  }
  const handleSearch = (e) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      search: e.target.value,
    }))
  }
  return (
    <section className="w-full py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col gap-6 md:gap-8">
          <div className="grid gap-4 md:gap-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Discover the perfect app</h2>
            <p className="text-muted-foreground md:text-xl/relaxed">
              Browse our collection of apps and find the one that fits your needs.
            </p>
          </div>
          <div className="grid gap-4 md:gap-6">
            <Input
              placeholder="Search apps..."
              value={filters.search}
              onChange={handleSearch}
              className="bg-white dark:bg-gray-950"
            />
            <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
              <Accordion type="single" collapsible className="w-full" defaultValue="category">
                <AccordionItem value="category">
                  <AccordionTrigger className="text-base">Category</AccordionTrigger>
                  <AccordionContent>
                    <div className="grid gap-2">
                      {categories.map((cat) => (
                        <Label key={cat} className="flex items-center gap-2 font-normal">
                          <Checkbox
                            checked={filters.category.includes(cat)}
                            onCheckedChange={() => handleFilterChange("category", cat)}
                          />
                          {cat}
                        </Label>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Accordion type="single" collapsible className="w-full" defaultValue="required">
                <AccordionItem value="required">
                  <AccordionTrigger className="text-base">Required</AccordionTrigger>
                  <AccordionContent>
                    <div className="grid gap-2">
                      {["True", "False"].map((req) => (
                        <Label key={req} className="flex items-center gap-2 font-normal">
                          <Checkbox
                            checked={filters.required.includes(req)}
                            onCheckedChange={() => handleFilterChange("required", req)}
                          />
                          {req}
                        </Label>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Accordion type="single" collapsible className="w-full" defaultValue="os">
                <AccordionItem value="os">
                  <AccordionTrigger className="text-base">Operating System</AccordionTrigger>
                  <AccordionContent>
                    <div className="grid gap-2">
                      {os.map((os) => (
                        <Label key={os} className="flex items-center gap-2 font-normal">
                          <Checkbox
                            checked={filters.os.includes(os)}
                            onCheckedChange={() => handleFilterChange("os", os)}
                          />
                          {os}
                        </Label>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
          <ul className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {filteredItems.map((item) => (
              <li key={item.name} className="bg-background rounded-lg shadow-lg overflow-hidden group">
                <Link href="#" className="block" prefetch={false}>
                  <img
                    src="/placeholder.svg"
                    alt={item.name}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover group-hover:opacity-80 transition-opacity"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {item.category.map((cat) => (
                        <span key={cat} className="inline-block bg-muted px-2 py-1 rounded-md text-xs">
                          {cat}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {item.required ? (
                        <span className="inline-block bg-muted px-2 py-1 rounded-md text-xs">
                            Required
                        </span>
                      ) : null}
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {item.os.map((os) => (
                        <span key={os} className="inline-block bg-muted px-2 py-1 rounded-md text-xs">
                          {os}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
