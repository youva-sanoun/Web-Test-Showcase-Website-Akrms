import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Filter, SlidersHorizontal } from "lucide-react";
import Image from "next/image";
import { Navbar } from "@/components/navbar";

export default function CollectionPage() {
  return (
    <div className="min-h-screen bg-[#191919]">
      <Navbar />
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-white mb-8">Our Collection</h1>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <div className="flex items-center gap-2">
              <Button variant="outline" className="text-white">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
              <Button variant="outline" className="text-white">
                <SlidersHorizontal className="w-4 h-4 mr-2" />
                Sort
              </Button>
            </div>
            <p className="text-gray-400">Showing 12 models</p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {Array.from({ length: 12 }).map((_, i) => (
              <Card
                key={i}
                className="bg-[#191919] border-[#939393] overflow-hidden group"
              >
                <CardContent className="p-0">
                  <div className="relative aspect-square">
                    <Image
                      src="/images/product.png"
                      alt={`Luxury miniature car ${i + 1}`}
                      width={400}
                      height={400}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-white mb-1">
                      Limited Edition #{i + 1}
                    </h3>
                    <p className="text-sm text-gray-400 mb-3">
                      Premium Die-Cast Model
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-orange-400 font-semibold">
                        $299.99
                      </span>
                      <Button
                        size="sm"
                        variant="outline"
                        className="text-white hover:text-orange-400"
                      >
                        View Details
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <div className="flex gap-2">
              <Button variant="outline" className="text-white" disabled>
                Previous
              </Button>
              <Button variant="outline" className="text-white bg-[#191919]">
                1
              </Button>
              <Button variant="outline" className="text-white">
                2
              </Button>
              <Button variant="outline" className="text-white">
                3
              </Button>
              <Button variant="outline" className="text-white">
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
