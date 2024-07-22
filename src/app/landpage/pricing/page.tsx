import { CheckIcon, MountainIcon } from "@/Components/global/Icons"
import Link from "next/link"

export default function Component() {
  return (
    <div className="flex min-h-[100dvh]">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Pricing</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Affordable Pricing for Businesses of All Sizes
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Choose the plan that best fits your business needs and budget.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <div className="rounded-lg border bg-background p-6 shadow-sm">
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Starter</h3>
                  <p className="text-4xl font-bold">
                    $19<span className="text-lg font-normal text-muted-foreground">/month</span>
                  </p>
                  <p className="text-sm text-muted-foreground">Ideal for small businesses and startups</p>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li>
                    <CheckIcon className="mr-2 inline-block h-4 w-4" />
                    1 User
                  </li>
                  <li>
                    <CheckIcon className="mr-2 inline-block h-4 w-4" />
                    Basic Features
                  </li>
                  <li>
                    <CheckIcon className="mr-2 inline-block h-4 w-4" />
                    Limited Integrations
                  </li>
                  <li>
                    <CheckIcon className="mr-2 inline-block h-4 w-4" />
                    24/7 Support
                  </li>
                </ul>
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Get Started
                </Link>
              </div>
            </div>
            <div className="rounded-lg border bg-background p-6 shadow-sm">
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Pro</h3>
                  <p className="text-4xl font-bold">
                    $49<span className="text-lg font-normal text-muted-foreground">/month</span>
                  </p>
                  <p className="text-sm text-muted-foreground">Ideal for growing businesses</p>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li>
                    <CheckIcon className="mr-2 inline-block h-4 w-4" />
                    5 Users
                  </li>
                  <li>
                    <CheckIcon className="mr-2 inline-block h-4 w-4" />
                    Advanced Features
                  </li>
                  <li>
                    <CheckIcon className="mr-2 inline-block h-4 w-4" />
                    Unlimited Integrations
                  </li>
                  <li>
                    <CheckIcon className="mr-2 inline-block h-4 w-4" />
                    Priority Support
                  </li>
                </ul>
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Get Started
                </Link>
              </div>
            </div>
            <div className="rounded-lg border bg-background p-6 shadow-sm">
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Enterprise</h3>
                  <p className="text-4xl font-bold">
                    $99<span className="text-lg font-normal text-muted-foreground">/month</span>
                  </p>
                  <p className="text-sm text-muted-foreground">Ideal for large enterprises</p>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li>
                    <CheckIcon className="mr-2 inline-block h-4 w-4" />
                    Unlimited Users
                  </li>
                  <li>
                    <CheckIcon className="mr-2 inline-block h-4 w-4" />
                    Customized Features
                  </li>
                  <li>
                    <CheckIcon className="mr-2 inline-block h-4 w-4" />
                    Dedicated Support
                  </li>
                  <li>
                    <CheckIcon className="mr-2 inline-block h-4 w-4" />
                    SLA Guarantees
                  </li>
                </ul>
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}