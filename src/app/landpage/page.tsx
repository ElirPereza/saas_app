import Link from "next/link";
import { Input } from "@/Components/ui/input";
import {
  BotIcon,
  CombineIcon,
  ImportIcon,
  InfoIcon,
  LockIcon,
  ScalingIcon,
} from "@/Components/Icons";
import Image from "next/image";
import { Button } from "@/Components/ui/button";
import Header from "@/Components/header";
import Footer from "@/Components/footer";

const keyFeature = [
  {
    title: "Advanced Analytics",
    description:
      "Gain deep insights into your business performance with our powerful analytics tools.",
    icons: <InfoIcon className="h-8 w-8 text-primary" />,
  },
  {
    title: " Automation",
    description:
      "Streamline your workflows and boost productivity with our intelligent automation features.",
    icons: <BotIcon className="h-8 w-8 text-primary" />,
  },
  {
    title: "Scalability",
    description:
      "Easily scale your business as you grow with our flexible and scalable platform.",
    icons: <ScalingIcon className="h-8 w-8 text-primary" />,
  },
  {
    title: "Collaboration",
    description:
      "Foster seamless collaboration among your team with our built-in communication tools.",

    icons: <CombineIcon className="h-8 w-8 text-primary" />,
  },
  {
    title: "Security",
    description:
      "Protect your data and ensure compliance with our robust security features.",
    icons: <LockIcon className="h-8 w-8 text-primary" />,
  },
  {
    title: "Integrations",
    description:
      "Seamlessly integrate our SaaS platform with your existing tools and systems.",
    icons: <ImportIcon className="h-8 w-8 text-primary" />,
  },
];

export default function Component() {
  return (
    <div className="flex min-h-[100dvh]">
      <main className="flex-1 ">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <Image
                src="https://i.pinimg.com/originals/75/90/f8/7590f891af94580b4e7b76e6fdffbd01.gif"
                alt="Saas-img"
                width={300}
                height={300}
                className="mx-auto h-full w-full aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
                loading="lazy"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Streamline Your Business with Our SaaS Platform
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Unlock the power of our cutting-edge SaaS solution to
                    transform your business operations and drive growth.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Start Free Trial
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Contact Sales
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                 Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Unlock Your Business Potential
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our SaaS platform offers a comprehensive suite of tools to
                  streamline your operations, boost productivity, and drive
                  growth.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              {keyFeature.map((items, index) => (
                <div className="grid gap-1" key={index}>
                  {items.icons}
                  <h3 className="text-xl font-bold">{items.title}</h3>
                  <p className="text-muted-foreground">{items.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Take Your Business to New Heights
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Sign up for our SaaS platform and start transforming your
                business today.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="max-w-lg flex-1"
                />
                <Button type="submit">Start Free Trial</Button>
              </form>
              <p className="text-xs text-muted-foreground">
                By signing up, you agree to our{" "}
                <Link
                  href="#"
                  className="underline underline-offset-2"
                  prefetch={false}
                >
                  Terms &amp; Conditions
                </Link>
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
