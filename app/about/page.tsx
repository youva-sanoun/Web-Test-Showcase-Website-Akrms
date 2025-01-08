import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Clock, Package, Truck } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#191919]">
      <Navbar />
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            <div>
              <h1 className="text-4xl font-bold text-white mb-6">
                Crafting Miniature Excellence Since 2010
              </h1>
              <p className="text-gray-400 mb-8">
                At Akrms Corner, we&apos;re passionate about bringing the
                world&apos;s most iconic automobiles to life in perfect
                miniature form. Our dedication to detail and quality has made us
                the premier destination for collectors and enthusiasts alike.
              </p>
              <Button className="bg-orange-400 hover:bg-orange-500">
                Our Story
              </Button>
            </div>
            <div className="relative aspect-square">
              <Image
                src="/images/about.png"
                alt="About Akrms Corner"
                width={600}
                height={600}
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Features */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            {[
              {
                icon: Award,
                title: "Premium Quality",
                description: "Highest grade materials and craftsmanship",
              },
              {
                icon: Package,
                title: "Exclusive Packaging",
                description: "Luxury presentation boxes for each model",
              },
              {
                icon: Truck,
                title: "Global Shipping",
                description: "Secure worldwide delivery service",
              },
              {
                icon: Clock,
                title: "Limited Editions",
                description: "Rare and numbered collections",
              },
            ].map((feature, i) => (
              <Card key={i} className="bg-neutral-900 border-neutral-800">
                <CardContent className="p-6">
                  <feature.icon className="w-10 h-10 text-orange-400 mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-400">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Stats */}
          <div className="text-center mb-24">
            <h2 className="text-3xl font-bold text-white mb-12">
              Our Achievement
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { number: "10K+", label: "Collectors Worldwide" },
                { number: "500+", label: "Unique Models" },
                { number: "50+", label: "Limited Editions" },
                { number: "13", label: "Years of Excellence" },
              ].map((stat, i) => (
                <div key={i} className="p-6 bg-neutral-900 rounded-lg">
                  <div className="text-3xl font-bold text-orange-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
