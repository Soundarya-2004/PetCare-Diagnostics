import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PawPrint, Search, BookOpen, AlertCircle, ArrowRight } from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <Link href="/" className="flex items-center gap-2">
            <PawPrint className="h-6 w-6 text-teal-600" />
            <span className="text-xl font-bold">PetCare Diagnostics</span>
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link href="/diagnosis" className="text-sm font-medium hover:underline underline-offset-4">
              Diagnosis
            </Link>
            <Link href="/education" className="text-sm font-medium hover:underline underline-offset-4">
              Education
            </Link>
            <Link href="/diseases" className="text-sm font-medium hover:underline underline-offset-4">
              Disease Database
            </Link>
            <Link href="/about" className="text-sm font-medium hover:underline underline-offset-4">
              About
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-teal-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Your Pet's Health, In Your Hands
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl">
                    Understand and diagnose potential health issues in your pets with our interactive platform. Access
                    expert resources on pet habits, diseases, and overall well-being.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/diagnosis">
                    <Button size="lg" className="bg-teal-600 hover:bg-teal-700">
                      Start Diagnosis
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/education">
                    <Button size="lg" variant="outline">
                      Explore Resources
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="mx-auto lg:mr-0 relative">
                <Image

                  src="https://images.unsplash.com/photo-1560807707-8cc77767d783"
                  alt="Happy pets - a dog and cat together"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform combines veterinary knowledge with technology to help you understand your pet's health
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-8">
              <Card className="border-2 border-teal-100">
                <CardHeader className="pb-2">
                  <Search className="h-12 w-12 text-teal-600 mb-2" />
                  <CardTitle>Symptom Checker</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    Input symptoms you've observed in your pet and receive potential diagnoses based on veterinary data
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="/diagnosis" className="text-teal-600 text-sm font-medium hover:underline">
                    Try it now →
                  </Link>
                </CardFooter>
              </Card>
              <Card className="border-2 border-teal-100">
                <CardHeader className="pb-2">
                  <BookOpen className="h-12 w-12 text-teal-600 mb-2" />
                  <CardTitle>Educational Resources</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    Access comprehensive guides on pet behavior, nutrition, and routine care tailored to different pets
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="/education" className="text-teal-600 text-sm font-medium hover:underline">
                    Learn more →
                  </Link>
                </CardFooter>
              </Card>
              <Card className="border-2 border-teal-100">
                <CardHeader className="pb-2">
                  <AlertCircle className="h-12 w-12 text-teal-600 mb-2" />
                  <CardTitle>Disease Database</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    Explore our extensive database of pet diseases, symptoms, treatments, and prevention methods
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="/diseases" className="text-teal-600 text-sm font-medium hover:underline">
                    Explore database →
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Resources</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore our most popular educational content and diagnostic tools
                </p>
              </div>
            </div>
            <Tabs defaultValue="dogs" className="mt-8 max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="dogs">Dogs</TabsTrigger>
                <TabsTrigger value="cats">Cats</TabsTrigger>
                <TabsTrigger value="other">Other Pets</TabsTrigger>
              </TabsList>
              <TabsContent value="dogs" className="mt-6">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardHeader className="p-4">
                      <CardTitle className="text-lg">Common Canine Allergies</CardTitle>
                      <CardDescription>Symptoms and treatments</CardDescription>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <Image
                        src="https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=600&q=80"
                        alt="Dog with allergies"
                        width={300}
                        height={200}
                        className="rounded-md object-cover w-full h-40"
                      />
                    </CardContent>
                    <CardFooter className="p-4">
                      <Button variant="outline" size="sm" className="gap-1" asChild>
                        <a
                          href="https://www.akc.org/expert-advice/health/common-allergies-in-dogs/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Read More
                          <ArrowRight className="h-4 w-4" />
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                  <Card>
                    <CardHeader className="p-4">
                      <CardTitle className="text-lg">Digestive Issues in Dogs</CardTitle>
                      <CardDescription>Causes and solutions</CardDescription>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <Image
                        src="https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=600&q=80"
                        alt="Dog with digestive issues"
                        width={300}
                        height={200}
                        className="rounded-md object-cover w-full h-40"
                      />
                    </CardContent>
                    <CardFooter className="p-4">
                      <Button variant="outline" size="sm" className="gap-1" asChild>
                        <a
                          href="https://www.petmd.com/dog/general-health/dog-digestive-problems-symptoms-causes-and-treatment"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Read More
                          <ArrowRight className="h-4 w-4" />
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                  <Card>
                    <CardHeader className="p-4">
                      <CardTitle className="text-lg">Canine Behavioral Guide</CardTitle>
                      <CardDescription>Understanding your dog</CardDescription>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <Image
                        src="https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&w=600&q=80"
                        alt="Dog behavior"
                        width={300}
                        height={200}
                        className="rounded-md object-cover w-full h-40"
                      />
                    </CardContent>
                    <CardFooter className="p-4">
                      <Button variant="outline" size="sm" className="gap-1" asChild>
                        <a
                          href="https://www.humanesociety.org/resources/dog-behavior-tips"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Read More
                          <ArrowRight className="h-4 w-4" />
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
                <div className="flex justify-end mt-4">
                  <Link href="/education/dogs">
                    <Button variant="outline" size="sm">
                      Explore All Dog Resources
                    </Button>
                  </Link>
                </div>
              </TabsContent>
              <TabsContent value="cats" className="mt-6">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardHeader className="p-4">
                      <CardTitle className="text-lg">Feline Urinary Health</CardTitle>
                      <CardDescription>Prevention and care</CardDescription>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <Image
                        src="https://images.unsplash.com/photo-1518715308788-3005759c61d3?auto=format&fit=crop&w=600&q=80"
                        alt="Cat urinary health"
                        width={300}
                        height={200}
                        className="rounded-md object-cover w-full h-40"
                      />
                    </CardContent>
                    <CardFooter className="p-4">
                      <Button variant="outline" size="sm" className="gap-1" asChild>
                        <a
                          href="https://www.petmd.com/cat/general-health/urinary-tract-problems-cats"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Read More
                          <ArrowRight className="h-4 w-4" />
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                  <Card>
                    <CardHeader className="p-4">
                      <CardTitle className="text-lg">Cat Grooming Guide</CardTitle>
                      <CardDescription>Keeping your cat healthy</CardDescription>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <Image
                        src="https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=600&q=80"
                        alt="Cat grooming"
                        width={300}
                        height={200}
                        className="rounded-md object-cover w-full h-40"
                      />
                    </CardContent>
                    <CardFooter className="p-4">
                      <Button variant="outline" size="sm" className="gap-1" asChild>
                        <a
                          href="https://www.humanesociety.org/resources/grooming-your-cat"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Read More
                          <ArrowRight className="h-4 w-4" />
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                  <Card>
                    <CardHeader className="p-4">
                      <CardTitle className="text-lg">Feline Nutrition</CardTitle>
                      <CardDescription>Dietary needs and tips</CardDescription>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <Image
                        src="https://images.unsplash.com/photo-1518715308788-3005759c61d3?auto=format&fit=crop&w=600&q=80"
                        alt="Cat nutrition"
                        width={300}
                        height={200}
                        className="rounded-md object-cover w-full h-40"
                      />
                    </CardContent>
                    <CardFooter className="p-4">
                      <Button variant="outline" size="sm" className="gap-1" asChild>
                        <a
                          href="https://www.aspca.org/pet-care/cat-care/cat-nutrition-tips"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Read More
                          <ArrowRight className="h-4 w-4" />
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
                <div className="flex justify-end mt-4">
                  <Link href="/education/cats">
                    <Button variant="outline" size="sm">
                      Explore All Cat Resources
                    </Button>
                  </Link>
                </div>
              </TabsContent>
              <TabsContent value="other" className="mt-6">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardHeader className="p-4">
                      <CardTitle className="text-lg">Small Mammal Care</CardTitle>
                      <CardDescription>Hamsters, guinea pigs, and more</CardDescription>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <Image
                        src="https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=600&q=80"
                        alt="Small mammals"
                        width={300}
                        height={200}
                        className="rounded-md object-cover w-full h-40"
                      />
                    </CardContent>
                    <CardFooter className="p-4">
                      <Button variant="outline" size="sm" className="gap-1" asChild>
                        <a
                          href="https://www.rspca.org.uk/adviceandwelfare/pets/rodents"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Read More
                          <ArrowRight className="h-4 w-4" />
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                  <Card>
                    <CardHeader className="p-4">
                      <CardTitle className="text-lg">Bird Health Essentials</CardTitle>
                      <CardDescription>Common issues and care</CardDescription>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <Image
                        src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80"
                        alt="Bird health"
                        width={300}
                        height={200}
                        className="rounded-md object-cover w-full h-40"
                      />
                    </CardContent>
                    <CardFooter className="p-4">
                      <Button variant="outline" size="sm" className="gap-1" asChild>
                        <a
                          href="https://vcahospitals.com/know-your-pet/bird-care"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Read More
                          <ArrowRight className="h-4 w-4" />
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                  <Card>
                    <CardHeader className="p-4">
                      <CardTitle className="text-lg">Reptile Care Guide</CardTitle>
                      <CardDescription>Habitat and health</CardDescription>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <Image
                        src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80"
                        alt="Reptile care"
                        width={300}
                        height={200}
                        className="rounded-md object-cover w-full h-40"
                      />
                    </CardContent>
                    <CardFooter className="p-4">
                      <Button variant="outline" size="sm" className="gap-1" asChild>
                        <a
                          href="https://www.rspca.org.uk/adviceandwelfare/pets/other/reptiles"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Read More
                          <ArrowRight className="h-4 w-4" />
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
                <div className="flex justify-end mt-4">
                  <Link href="/education/other">
                    <Button variant="outline" size="sm">
                      Explore All Other Pet Resources
                    </Button>
                  </Link>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <footer className="border-t bg-gray-50">
        <div className="container flex flex-col gap-4 py-10 md:flex-row md:gap-8">
          <div className="flex flex-col gap-2 md:gap-4 md:flex-1">
            <Link href="/" className="flex items-center gap-2">
              <PawPrint className="h-5 w-5 text-teal-600" />
              <span className="text-lg font-bold">PetCare Diagnostics</span>
            </Link>
            <p className="text-sm text-gray-500">Helping pet owners understand and care for their animal companions.</p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:flex-1">
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Platform</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/diagnosis" className="text-sm text-gray-500 hover:text-gray-900">
                    Diagnosis Tool
                  </Link>
                </li>
                <li>
                  <Link href="/education" className="text-sm text-gray-500 hover:text-gray-900">
                    Education Center
                  </Link>
                </li>
                <li>
                  <Link href="/diseases" className="text-sm text-gray-500 hover:text-gray-900">
                    Disease Database
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-sm text-gray-500 hover:text-gray-900">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-sm text-gray-500 hover:text-gray-900">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-sm text-gray-500 hover:text-gray-900">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/privacy" className="text-sm text-gray-500 hover:text-gray-900">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-sm text-gray-500 hover:text-gray-900">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/disclaimer" className="text-sm text-gray-500 hover:text-gray-900">
                    Medical Disclaimer
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t py-6">
          <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-xs text-gray-500">© 2025 PetCare Diagnostics. All rights reserved.</p>
            <p className="text-xs text-gray-500">
              This platform is for educational purposes only and is not a substitute for professional veterinary care.
            </p>
          </div>
        </div>
        <div className="text-center text-xs text-gray-500 mt-4">
          Developed by <span className="font-semibold text-teal-700">Ruchita L</span> &amp;{" "}
          <span className="font-semibold text-teal-700">Soundarya R</span>
        </div>
      </footer>
    </div>
  )
}
