import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import { Navbar } from "@/components/navbar";

export default function ContactPage() {
  return (
    <div className="min-h-screen relative bg-black">
      <div className="absolute inset-0 bg-[url('/images/bg.jpg')] bg-cover bg-fixed bg-center bg-black/80 backdrop-blur-sm opacity-40" />
      <div className="relative">
        <Navbar />
        <div className="pt-24 pb-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl font-bold text-white text-center mb-8">
                Get in Touch
              </h1>
              <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
                Have questions about our collection or need assistance? Our team
                is here to help you find the perfect miniature car for your
                collection.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-12">
                {[
                  {
                    icon: Phone,
                    title: "Call Us",
                    details: "+1 (555) 000-0000",
                    action: "Call now",
                  },
                  {
                    icon: Mail,
                    title: "Email Us",
                    details: "contact@akrmscorner.com",
                    action: "Send email",
                  },
                  {
                    icon: MapPin,
                    title: "Visit Us",
                    details: "123 Collector's Avenue",
                    action: "Get directions",
                  },
                ].map((item, i) => (
                  <Card key={i} className="bg-neutral-900 border-neutral-800">
                    <CardContent className="p-6 text-center">
                      <item.icon className="w-8 h-8 text-orange-400 mx-auto mb-4" />
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 mb-4">{item.details}</p>
                      <Button
                        variant="outline"
                        className="text-white hover:text-orange-400"
                      >
                        {item.action}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="bg-neutral-900 border-neutral-800">
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm text-gray-400">
                          First Name
                        </label>
                        <Input
                          className="bg-neutral-800 border-neutral-700 text-white"
                          placeholder="John"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm text-gray-400">
                          Last Name
                        </label>
                        <Input
                          className="bg-neutral-800 border-neutral-700 text-white"
                          placeholder="Doe"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm text-gray-400">Email</label>
                      <Input
                        type="email"
                        className="bg-neutral-800 border-neutral-700 text-white"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm text-gray-400">Subject</label>
                      <Input
                        className="bg-neutral-800 border-neutral-700 text-white"
                        placeholder="How can we help?"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm text-gray-400">Message</label>
                      <Textarea
                        className="bg-neutral-800 border-neutral-700 text-white min-h-[150px]"
                        placeholder="Your message..."
                      />
                    </div>
                    <Button className="w-full bg-orange-400 hover:bg-orange-500">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
