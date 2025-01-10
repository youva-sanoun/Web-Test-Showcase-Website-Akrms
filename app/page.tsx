"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Power } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/navbar";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#191919] text-[#dddddd]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20 z-10" />
        <Image
          src="/images/bg.jpg"
          alt="Luxury miniature cars collection"
          width={1920}
          height={1080}
          className="object-cover w-full h-full"
          priority
        />
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-wider mb-4">
            miniature
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 tracking-wide mb-8">
            the choice to feel the drive
          </p>
          <Link href="/collection">
            <div className="relative group cursor-pointer">
              <div className="bg-[#191919] w-20 h-20 rounded-full border-2 border-[#939393] flex items-center justify-center group-hover:border-[#ea7924] transition-colors">
                <Power className="w-9 h-9 text-[#dddddd] group-hover:text-[#ea7924] transition-colors" />
              </div>
              <p className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm text-[#939393] whitespace-nowrap">
                Explore Collection
              </p>
            </div>
          </Link>
        </div>
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20">
          <div className="relative group cursor-pointer">
            <p className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm text-white/50 whitespace-nowrap">
              the best miniature cars marketplace
            </p>
          </div>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="py-24 bg-[#191919]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Featured Collection
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-neutral-800 border-neutral-700 overflow-hidden group">
              <CardContent className="p-0">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/images/category1.jpg"
                    alt={`Luxury miniature car`}
                    width={600}
                    height={400}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                    <div>
                      <h3 className="text-xl font-bold mb-2">
                        Limited Edition Model
                      </h3>
                      <p className="text-sm text-gray-300">
                        Premium die-cast collection
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-neutral-800 border-neutral-700 overflow-hidden group">
              <CardContent className="p-0">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/images/category2.jpg"
                    alt={`Luxury miniature car`}
                    width={600}
                    height={400}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                    <div>
                      <h3 className="text-xl font-bold mb-2">
                        Limited Edition Model
                      </h3>
                      <p className="text-sm text-gray-300">
                        Premium die-cast collection
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-neutral-800 border-neutral-700 overflow-hidden group">
              <CardContent className="p-0">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/images/category3.jpg"
                    alt={`Luxury miniature car`}
                    width={600}
                    height={400}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                    <div>
                      <h3 className="text-xl font-bold mb-2">
                        Limited Edition Model
                      </h3>
                      <p className="text-sm text-gray-300">
                        Premium die-cast collection
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-12">
            <Link href="/collection">
              <Button className="bg-[#ea7924] hover:bg-[#ea7924]/80 text-[#dddddd]">
                View All Models
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Crafting Miniature Excellence
              </h2>
              <p className="text-gray-400 mb-8">
                At miniature, we&apos;re passionate about bringing the
                world&apos;s most iconic automobiles to life in perfect
                miniature form. Our dedication to detail and quality has made us
                the premier destination for collectors and enthusiasts alike.
              </p>
              <Link href="/about">
                <Button
                  variant="outline"
                  className="text-white hover:text-[#ea7924]"
                >
                  Learn More About Us
                </Button>
              </Link>
            </div>
            <div className="relative aspect-square">
              <Image
                src="/images/showcase.jpg"
                alt="About miniature"
                width={600}
                height={600}
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-[#191919]">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Stay Updated
            </h2>
            <p className="text-gray-400 mb-8">
              Subscribe to our newsletter for exclusive releases and special
              offers
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-[#191919] rounded-md border border-[#939393] text-[#dddddd] focus:outline-none focus:border-[#ea7924]"
              />
              <Button className="bg-[#ea7924] hover:bg-[#ea7924]/80 text-[#dddddd]">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-neutral-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold mb-2">miniature</h3>
              <p className="text-sm text-gray-400">
                The choice to feel the drive
              </p>
            </div>
            <div className="flex gap-8">
              <Link
                href="/privacy"
                className="text-sm text-gray-400 hover:text-[#ea7924]"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-gray-400 hover:text-[#ea7924]"
              >
                Terms of Service
              </Link>
              <Link
                href="/contact"
                className="text-sm text-gray-400 hover:text-[#ea7924]"
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-neutral-800 text-center text-sm text-gray-400">
            © {new Date().getFullYear()} miniature. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
