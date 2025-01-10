"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Crown } from "lucide-react";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { useEffect, useState } from "react";

export default function ExclusivePage() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`min-h-screen relative transition-colors duration-500 ${isScrolled ? 'bg-transparent' : 'bg-black'}`}>
      <div className="absolute inset-0 bg-[url('/images/bg.jpg')] bg-cover bg-fixed bg-center bg-black/80 backdrop-blur-sm opacity-10" />
      <div className="relative">
        <Navbar />
        <div className="pt-24 pb-12">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-3 mb-8">
              <Crown className="w-8 h-8 text-orange-400" />
              <h1 className="text-4xl font-bold text-white">
                Exclusive Models
              </h1>
            </div>

            {/* Featured Exclusive */}
            <div className="relative rounded-lg overflow-hidden mb-12">
              <Image
                src="/images/premium.png"
                alt="Exclusive collection hero"
                width={1200}
                height={600}
                className="w-full h-[60vh] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h2 className="text-3xl font-bold text-white mb-4">
                    Limited Edition Series
                  </h2>
                  <p className="text-gray-300 mb-6 max-w-2xl">
                    Experience our most prestigious collection of handcrafted
                    miniature cars. Each piece is meticulously detailed and
                    comes with a certificate of authenticity.
                  </p>
                  <Button className="bg-orange-400 hover:bg-orange-500">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>

            {/* Exclusive Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {Array.from({ length: 4 }).map((_, i) => (
                <Card key={i} className="bg-neutral-900 border-neutral-800">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">
                          Collector&apos;s Edition #{i + 1}
                        </h3>
                        <p className="text-sm text-gray-400">
                          Limited to 100 pieces worldwide
                        </p>
                      </div>
                      <span className="px-3 py-1 bg-orange-400 text-white text-sm rounded-full">
                        Exclusive
                      </span>
                    </div>
                    <div className="relative aspect-[16/9] mb-6">
                      <Image
                        src="/images/limited.jpg"
                        alt={`Exclusive model ${i + 1}`}
                        width={600}
                        height={400}
                        className="rounded-lg object-cover w-full h-full"
                      />
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="block text-2xl font-bold text-white">
                          $999.99
                        </span>
                        <span className="text-sm text-gray-400">
                          Certificate included
                        </span>
                      </div>
                      <Button
                        variant="outline"
                        className="text-white hover:text-orange-400"
                      >
                        Reserve Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
