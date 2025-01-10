import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Award,
  Clock,
  Package,
  Truck,
  ArrowRight,
  Sparkles,
  Globe,
  Trophy,
  Rocket,
  ChevronRight,
  Dot,
  ArrowUpRight,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen relative bg-[#0a0a0a]">
      {/* Hero Section - Enhanced */}
      <div className="relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-0 w-72 h-72 bg-orange-400/10 rounded-full filter blur-3xl" />
          <div className="absolute top-40 right-0 w-72 h-72 bg-purple-400/10 rounded-full filter blur-3xl" />
          <div className="absolute -bottom-20 left-1/2 w-96 h-96 bg-blue-400/10 rounded-full filter blur-3xl" />
          {/* Decorative grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1212121a_1px,transparent_1px),linear-gradient(to_bottom,#1212121a_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        </div>

        <Navbar />
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16 pt-32 pb-24">
            <div className="lg:w-1/2 space-y-8 relative">
              {/* Decorative elements */}
              <div className="absolute -left-4 top-0 w-20 h-20 bg-orange-400/20 rounded-full filter blur-xl animate-pulse" />

              {/* Main content */}
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-[2px] w-12 bg-gradient-to-r from-orange-400 to-orange-600" />
                  <span className="text-orange-400 font-medium tracking-wider text-sm uppercase">
                    Since 2010
                  </span>
                </div>
                <h1 className="text-7xl font-bold text-white leading-tight mb-6">
                  Crafting
                  <span className="relative">
                    <span className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-orange-600 blur-lg opacity-50"></span>
                    <span className="relative text-orange-400"> Miniature</span>
                  </span>
                  <br />
                  Excellence
                </h1>
                <div className="flex items-center gap-2 text-gray-400 mb-8">
                  <Dot className="text-orange-400" />
                  <span>Premium Quality</span>
                  <Dot className="text-orange-400" />
                  <span>Hand Crafted</span>
                  <Dot className="text-orange-400" />
                  <span>Limited Edition</span>
                </div>
                <p className="text-gray-400 text-lg leading-relaxed max-w-xl mb-8">
                  At miniature, we transform iconic automobiles into perfect
                  miniature masterpieces, where every detail tells a story of
                  precision and passion.
                </p>
                <div className="flex gap-6 items-center">
                  <Button className="group bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 px-8 py-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-orange-600/20">
                    Discover More
                    <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <div className="flex items-center gap-4">
                    <div className="text-sm">
                      <p className="text-white font-semibold">500+ Models</p>
                      <p className="text-gray-400">In Collection</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Image Section - Enhanced */}
            <div className="lg:w-1/2 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 via-transparent to-purple-400/20 rounded-full filter blur-3xl animate-pulse" />
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-400 to-black-400 rounded-2xl blur opacity-15 group-hover:opacity-40 transition duration-1000"></div>
                <div className="relative aspect-square rotate-6 hover:rotate-0 transition-all duration-700 transform hover:scale-105">
                  <Image
                    src="/images/about.png"
                    alt="About miniature"
                    width={600}
                    height={600}
                    className="rounded-2xl object-cover w-full h-full shadow-2xl"
                  />
                  {/* Floating Stats */}
                  <div className="absolute -right-8 top-1/4 bg-neutral-900/90 backdrop-blur-sm p-4 rounded-xl border border-orange-400/20 transform hover:scale-110 transition-transform duration-300">
                    <p className="text-orange-400 font-bold text-2xl">13+</p>
                    <p className="text-gray-400 text-sm">Years of Excellence</p>
                  </div>
                  <div className="absolute -left-8 bottom-1/4 bg-neutral-900/90 backdrop-blur-sm p-4 rounded-xl border border-orange-400/20 transform hover:scale-110 transition-transform duration-300">
                    <p className="text-orange-400 font-bold text-2xl">10K+</p>
                    <p className="text-gray-400 text-sm">Happy Collectors</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features - Enhanced */}
      <div className="relative py-24">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5" />
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4 space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[2px] w-12 bg-gradient-to-r from-orange-400 to-orange-600" />
                <span className="text-orange-400 font-medium tracking-wider text-sm uppercase">
                  Features
                </span>
              </div>
              <h2 className="text-4xl font-bold text-white">
                Why Choose Our Miniatures
              </h2>
              <p className="text-gray-400 text-lg">
                Experience unparalleled craftsmanship in every miniature detail.
              </p>
              <Button className="group bg-neutral-800 hover:bg-neutral-700 mt-4">
                View Collection
                <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Button>
            </div>
            <div className="lg:col-span-8 grid sm:grid-cols-2 gap-6">
              {[
                {
                  icon: Award,
                  title: "Premium Quality",
                  description: "Highest grade materials and craftsmanship",
                  gradient: "from-orange-400/20",
                },
                {
                  icon: Package,
                  title: "Exclusive Packaging",
                  description: "Luxury presentation boxes for each model",
                  gradient: "from-blue-400/20",
                },
                {
                  icon: Truck,
                  title: "Global Shipping",
                  description: "Secure worldwide delivery service",
                  gradient: "from-purple-400/20",
                },
                {
                  icon: Clock,
                  title: "Limited Editions",
                  description: "Rare and numbered collections",
                  gradient: "from-yellow-400/20",
                },
              ].map((feature, i) => (
                <Card
                  key={i}
                  className="group bg-neutral-900/50 border-neutral-800 backdrop-blur-sm hover:border-orange-400/50 transition-all duration-300"
                >
                  <CardContent className="p-8">
                    <div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.gradient} to-transparent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-orange-400 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Timeline - Enhanced */}
      <div className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-400/5 via-transparent to-transparent" />
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-16 gap-4">
            <Sparkles className="text-orange-400 w-6 h-6" />
            <h2 className="text-4xl font-bold text-white text-center">
              Our Journey
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-orange-400/50 via-orange-400/20 to-transparent rounded-full" />
            <div className="space-y-24">
              {[
                {
                  year: "2010",
                  title: "Founded",
                  desc: "Started in a small workshop with a vision to create the finest miniature cars.",
                  align: "left",
                  icon: Sparkles,
                  color: "from-orange-400/20",
                },
                {
                  year: "2015",
                  title: "Global Expansion",
                  desc: "Reached collectors across 50+ countries, sharing our passion worldwide.",
                  align: "right",
                  icon: Globe,
                  color: "from-blue-400/20",
                },
                {
                  year: "2018",
                  title: "Innovation Award",
                  desc: "Recognized for exceptional craftsmanship and attention to detail.",
                  align: "left",
                  icon: Trophy,
                  color: "from-yellow-400/20",
                },
                {
                  year: "2023",
                  title: "Digital Evolution",
                  desc: "Embracing technology to enhance the collector's experience.",
                  align: "right",
                  icon: Rocket,
                  color: "from-purple-400/20",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`flex ${
                    item.align === "left" ? "justify-start" : "justify-end"
                  } relative group`}
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-orange-400 shadow-lg shadow-orange-400/50 z-10" />
                  <div
                    className={`w-1/2 relative bg-neutral-900/80 backdrop-blur-sm p-8 rounded-2xl border border-neutral-800 
                    hover:border-orange-400/50 transition-all duration-500 group-hover:scale-105
                    bg-gradient-to-br ${item.color} to-transparent`}
                  >
                    <div className="absolute top-4 right-4">
                      <item.icon className="w-6 h-6 text-orange-400/50" />
                    </div>
                    <span className="inline-block px-3 py-1 bg-orange-400/10 rounded-full text-orange-400 text-sm font-medium mb-4">
                      {item.year}
                    </span>
                    <h3 className="text-white font-semibold text-xl mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-400">{item.desc}</p>
                    <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-0.5 bg-orange-400/50" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Stats - Enhanced */}
      <div className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-orange-400/5 via-transparent to-transparent" />
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "10K+",
                label: "Collectors Worldwide",
                gradient: "from-orange-400",
              },
              {
                number: "500+",
                label: "Unique Models",
                gradient: "from-blue-400",
              },
              {
                number: "50+",
                label: "Limited Editions",
                gradient: "from-purple-400",
              },
              {
                number: "13",
                label: "Years of Excellence",
                gradient: "from-yellow-400",
              },
            ].map((stat, i) => (
              <div
                key={i}
                className="group relative p-8 bg-neutral-900/80 backdrop-blur-sm rounded-xl border border-neutral-800 hover:border-orange-400/50 transition-all duration-300"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${stat.gradient}/5 to-transparent rounded-xl transition-opacity group-hover:opacity-100 opacity-0`}
                />
                <div className="relative">
                  <div className="text-4xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer - New */}
      <footer className="relative pt-24 pb-12 border-t border-neutral-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white mb-4">Miniature</h3>
              <p className="text-gray-400">
                Crafting dreams into perfect miniature reality since 2010.
              </p>
              <div className="flex gap-4">
                {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="text-gray-400 hover:text-orange-400 transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
            {[
              {
                title: "Company",
                links: ["About", "Careers", "News", "Partners"],
              },
              {
                title: "Products",
                links: [
                  "Collections",
                  "Limited Editions",
                  "New Arrivals",
                  "Best Sellers",
                ],
              },
              {
                title: "Support",
                links: [
                  "Help Center",
                  "Contact Us",
                  "Returns",
                  "Shipping Info",
                ],
              },
            ].map((column, i) => (
              <div key={i}>
                <h4 className="text-white font-semibold mb-4">
                  {column.title}
                </h4>
                <ul className="space-y-2">
                  {column.links.map((link, j) => (
                    <li key={j}>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-orange-400 transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="pt-8 border-t border-neutral-800 text-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Miniature. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
