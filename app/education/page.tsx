import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PawPrint, BookOpen, ArrowRight } from "lucide-react"

export default function EducationPage() {
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
            <Link href="/education" className="text-sm font-medium text-teal-600 underline underline-offset-4">
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
      <main className="flex-1 py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-5xl space-y-12">
            <div className="space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Pet Education Center</h1>
              <p className="text-gray-500 md:text-xl max-w-3xl mx-auto">
                Comprehensive resources to help you understand your pet's behavior, nutrition, and healthcare needs
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <Card className="bg-teal-50 border-2 border-teal-100">
                <CardHeader>
                  <CardTitle>Behavior & Training</CardTitle>
                  <CardDescription>Understanding pet psychology and effective training techniques</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src="https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&w=600&q=80"
                    alt="Dog training"
                    width={300}
                    height={200}
                    className="rounded-md object-cover w-full h-40"
                  />
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full bg-teal-600 hover:bg-teal-700">
                    <Link href="/education/behavior">
                      Explore
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="bg-teal-50 border-2 border-teal-100">
                <CardHeader>
                  <CardTitle>Nutrition & Diet</CardTitle>
                  <CardDescription>Dietary requirements and feeding guidelines for optimal health</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src="https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=600&q=80"
                    alt="Pet nutrition"
                    width={300}
                    height={200}
                    className="rounded-md object-cover w-full h-40"
                  />
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full bg-teal-600 hover:bg-teal-700">
                    <Link href="/education/nutrition">
                      Explore
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="bg-teal-50 border-2 border-teal-100">
                <CardHeader>
                  <CardTitle>Preventive Care</CardTitle>
                  <CardDescription>Vaccination schedules, parasite control, and routine check-ups</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80"
                    alt="Preventive care"
                    width={300}
                    height={200}
                    className="rounded-md object-cover w-full h-40"
                  />
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full bg-teal-600 hover:bg-teal-700">
                    <Link href="/education/preventive-care">
                      Explore
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold tracking-tight">Featured Articles</h2>

              <Tabs defaultValue="dogs" className="w-full">
                <TabsList className="grid w-full grid-cols-1 mb-8">
                  <TabsTrigger value="dogs">Dogs</TabsTrigger>
                </TabsList>

                <TabsContent value="dogs" className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Understanding Canine Body Language</CardTitle>
                        <CardDescription>Learn to interpret what your dog is trying to tell you</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-500 line-clamp-3">
                          Dogs communicate primarily through body language. Understanding the subtle cues in their
                          posture, tail position, ear position, and facial expressions can help you better respond to
                          tail position, ear position, and facial expressions can help you better respond to their needs
                          and emotions. This article explores common canine body language signals and what they mean.
                        </p>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" size="sm" className="gap-1" asChild>
                          <a
                            href="https://www.guidedogs.org.uk/getting-support/information-and-advice/dog-care-and-welfare/dog-body-language/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Read Full Article
                            <ArrowRight className="h-4 w-4" />
                          </a>
                        </Button>
                      </CardFooter>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Puppy Socialization Guide</CardTitle>
                        <CardDescription>
                          Critical periods and best practices for raising a well-adjusted dog
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-500 line-clamp-3">
                          The first few months of a puppy's life are crucial for their social development. Proper
                          socialization during this period helps prevent behavioral problems and ensures your puppy
                          grows into a confident, well-adjusted adult dog.
                        </p>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" size="sm" className="gap-1" asChild>
                          <a
                            href="https://www.whole-dog-journal.com/puppies/pre_puppy_prep/the-complete-puppy-socialization-guide/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Read Full Article
                            <ArrowRight className="h-4 w-4" />
                          </a>
                        </Button>
                      </CardFooter>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Senior Dog Care: Special Considerations</CardTitle>
                        <CardDescription>Adapting care routines for your aging canine companion</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-500 line-clamp-3">
                          As dogs age, their needs change. From dietary adjustments to exercise modifications and
                          regular health screenings, this guide covers everything you need to know to keep your senior
                          dog comfortable and healthy in their golden years.
                        </p>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" size="sm" className="gap-1" asChild>
                          <a
                            href="https://vcahospitals.com/know-your-pet/senior-dog-care-special-considerations-for-dogs"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Read Full Article
                            <ArrowRight className="h-4 w-4" />
                          </a>
                        </Button>
                      </CardFooter>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Common Behavioral Problems and Solutions</CardTitle>
                        <CardDescription>
                          Addressing issues like separation anxiety, excessive barking, and more
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-500 line-clamp-3">
                          Many dogs develop behavioral issues that can be challenging for owners. This comprehensive
                          guide explores the most common problems, their underlying causes, and effective, humane
                          training techniques to address them.
                        </p>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" size="sm" className="gap-1" asChild>
                          <a
                            href="https://www.thesprucepets.com/common-dog-behavior-problems-1118278"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Read Full Article
                            <ArrowRight className="h-4 w-4" />
                          </a>
                        </Button>
                      </CardFooter>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Common Canine Allergies</CardTitle>
                        <CardDescription>Symptoms and treatments</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Image
                          src="https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=600&q=80"
                          alt="Dog with allergies"
                          width={300}
                          height={200}
                          className="rounded-md object-cover w-full h-40"
                        />
                        <p className="text-sm text-gray-500 line-clamp-3">
                          Allergies are common in dogs and can cause itching, skin problems, and digestive issues. Learn about symptoms, causes, and how to help your pet.
                        </p>
                      </CardContent>
                      <CardFooter>
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
                      <CardHeader>
                        <CardTitle className="text-lg">Digestive Issues in Dogs</CardTitle>
                        <CardDescription>Causes and solutions</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Image
                          src="https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=600&q=80"
                          alt="Dog with digestive issues"
                          width={300}
                          height={200}
                          className="rounded-md object-cover w-full h-40"
                        />
                        <p className="text-sm text-gray-500 line-clamp-3">
                          Digestive problems can affect your dog's health and happiness. Discover common causes, symptoms, and what you can do to help.
                        </p>
                      </CardContent>
                      <CardFooter>
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
                      <CardHeader>
                        <CardTitle className="text-lg">Canine Behavioral Guide</CardTitle>
                        <CardDescription>Understanding your dog</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Image
                          src="https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&w=600&q=80"
                          alt="Dog behavior"
                          width={300}
                          height={200}
                          className="rounded-md object-cover w-full h-40"
                        />
                        <p className="text-sm text-gray-500 line-clamp-3">
                          Understanding your dog's behavior is key to a happy relationship. Learn about common behaviors and positive training techniques.
                        </p>
                      </CardContent>
                      <CardFooter>
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
                  <div className="text-center">
                    <Button asChild>
                      <Link href="/education/dogs">
                        View All Dog Articles
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            <div className="bg-teal-50 border border-teal-100 rounded-lg p-6 space-y-4">
              <div className="flex items-center gap-3">
                <BookOpen className="h-8 w-8 text-teal-600" />
                <h2 className="text-xl font-bold">Educational Resources</h2>
              </div>
              <p className="text-gray-600">
                Our educational content is developed in collaboration with veterinarians, animal behaviorists, and pet
                care specialists to provide you with accurate, up-to-date information.
              </p>
              <div className="grid gap-4 md:grid-cols-3">
                <Button variant="outline" className="justify-start" asChild>
                  <Link href="/education/videos">
                    <BookOpen className="mr-2 h-4 w-4" />
                    Video Tutorials
                  </Link>
                </Button>
                <Button variant="outline" className="justify-start" asChild>
                  <Link href="/education/guides">
                    <BookOpen className="mr-2 h-4 w-4" />
                    Downloadable Guides
                  </Link>
                </Button>
                <Button variant="outline" className="justify-start" asChild>
                  <Link href="/education/webinars">
                    <BookOpen className="mr-2 h-4 w-4" />
                    Expert Webinars
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="border-t bg-gray-50">
        <div className="container py-6 text-center text-sm text-gray-500">
          <p>© 2025 PetCare Diagnostics. All rights reserved.</p>
          <p className="mt-1">
            This platform is for educational purposes only and is not a substitute for professional veterinary care.
          </p>
        </div>
      </footer>
    </div>
  )
}
