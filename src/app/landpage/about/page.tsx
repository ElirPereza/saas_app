import Image from 'next/image'
import React, { lazy } from 'react'

const About = () => {
  return (
    <div>
       <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">About Acme SaaS</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Empowering Businesses with Innovative Solutions
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Acme SaaS is a leading provider of cloud-based software solutions that help businesses of all sizes
                streamline their operations, increase productivity, and drive growth. Our mission is to empower our
                customers with the tools and technologies they need to succeed in today&apos;s fast-paced digital landscape.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <Image
              src="https://i.pinimg.com/originals/75/90/f8/7590f891af94580b4e7b76e6fdffbd01.gif"
              width={550}
              height={310}
              alt="About Image"
              className="mx-auto h-full aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              loading='lazy'
            />
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Our Story</h3>
                <p className="text-muted-foreground">
                  Acme SaaS was founded in 2015 by a team of experienced entrepreneurs and software engineers who saw
                  the need for a more efficient and user-friendly way for businesses to manage their operations. Since
                  then, we&apos;ve grown to become a trusted partner for thousands of companies around the world.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Our Values</h3>
                <p className="text-muted-foreground">
                  At the heart of Acme SaaS are our core values of innovation, customer-centricity, and integrity. We
                  are constantly exploring new ways to enhance our products and services, and we are dedicated to
                  providing our customers with the best possible experience.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Our Team</h3>
                <p className="text-muted-foreground">
                  Our team is made up of talented and passionate individuals who are committed to helping our customers
                  succeed. We pride ourselves on our diverse backgrounds and expertise, and we work together to create
                  innovative solutions that drive real-world results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
