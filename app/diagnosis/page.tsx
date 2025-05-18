"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { PawPrint, AlertTriangle, ArrowLeft, ArrowRight } from "lucide-react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function DiagnosisPage() {
  const [petType, setPetType] = useState("")
  const [step, setStep] = useState(1)
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([])
  const [results, setResults] = useState<any[]>([])

  const handleSymptomChange = (symptom: string) => {
    if (selectedSymptoms.includes(symptom)) {
      setSelectedSymptoms(selectedSymptoms.filter((s) => s !== symptom))
    } else {
      setSelectedSymptoms([...selectedSymptoms, symptom])
    }
  }

  const handleSubmit = () => {
    const mockResults = []

    // Improved logic for handling symptoms and providing results
    const symptomConditions: { [key: string]: any } = {
      dog: [
        {
          condition: "Canine Parvovirus",
          probability: "High",
          description:
            "A highly contagious viral illness that affects dogs, particularly puppies. Symptoms include severe vomiting, diarrhea, and lethargy.",
          urgency: "High",
          recommendations:
            "Seek immediate veterinary care. This condition can be life-threatening, especially in puppies.",
          symptoms: ["vomiting", "diarrhea", "lethargy"],
        },
        {
          condition: "Allergic Dermatitis",
          probability: "High",
          description:
            "Skin inflammation caused by allergic reactions to food, environmental factors, or parasites.",
          urgency: "Low",
          recommendations:
            "Consult with your veterinarian for appropriate antihistamines or other treatments.",
          symptoms: ["itching", "red skin"],
        },
        {
          condition: "Kennel Cough (Bordetella)",
          probability: "Medium",
          description:
            "A highly contagious respiratory disease. Symptoms include persistent cough and sneezing.",
          urgency: "Medium",
          recommendations:
            "Isolate your dog from others and consult your veterinarian for possible antibiotics or cough suppressants.",
          symptoms: ["coughing", "sneezing"],
        },
        {
          condition: "Musculoskeletal Injury",
          probability: "Medium",
          description:
            "Limping can be caused by injury, arthritis, or hip dysplasia.",
          urgency: "Medium",
          recommendations:
            "Limit activity and consult your veterinarian if limping persists or worsens.",
          symptoms: ["limping"],
        },
        {
          condition: "Diabetes Mellitus",
          probability: "Medium",
          description:
            "A chronic condition affecting the body's ability to regulate blood sugar.",
          urgency: "Medium",
          recommendations:
            "Consult your veterinarian for blood tests and management options.",
          symptoms: ["increased thirst", "decreased appetite"],
        },
      ],
      cat: [
        {
          condition: "Feline Lower Urinary Tract Disease (FLUTD)",
          probability: "High",
          description:
            "A group of conditions affecting the bladder and urethra of cats. Can be life-threatening if blocked.",
          urgency: "High",
          recommendations:
            "Seek immediate veterinary care, especially for male cats as urinary blockages can be fatal.",
          symptoms: ["urinating outside litter box", "straining to urinate"],
        },
        {
          condition: "Feline Panleukopenia (Distemper)",
          probability: "Medium",
          description:
            "A highly contagious viral disease, especially dangerous for kittens.",
          urgency: "High",
          recommendations:
            "Seek veterinary care immediately. Supportive care and isolation are critical.",
          symptoms: ["vomiting", "diarrhea"],
        },
        {
          condition: "Feline Infectious Peritonitis",
          probability: "Low",
          description:
            "A viral disease caused by certain strains of feline coronavirus.",
          urgency: "Medium",
          recommendations:
            "Consult with your veterinarian for proper diagnosis and supportive care.",
          symptoms: ["lethargy", "decreased appetite"],
        },
        {
          condition: "Feline Allergic Dermatitis",
          probability: "Medium",
          description:
            "Skin inflammation caused by allergies or parasites.",
          urgency: "Low",
          recommendations:
            "Consult your veterinarian for allergy testing and treatment.",
          symptoms: ["excessive grooming", "red skin"],
        },
        {
          condition: "Chronic Kidney Disease",
          probability: "Medium",
          description:
            "Common in older cats, symptoms include increased thirst and vomiting.",
          urgency: "Medium",
          recommendations:
            "Consult your veterinarian for blood and urine tests.",
          symptoms: ["increased thirst", "vomiting"],
        },
      ],
    }

    const conditions = symptomConditions[petType] || []
    for (const condition of conditions) {
      const { symptoms } = condition
      const hasAllSymptoms = symptoms.every((symptom: string) => selectedSymptoms.includes(symptom))
      if (hasAllSymptoms) {
        mockResults.push(condition)
      }
    }

    // If no specific matches, provide a general response
    if (mockResults.length === 0) {
      mockResults.push({
        condition: "Unspecified Condition",
        probability: "Unknown",
        description:
          "Based on the symptoms provided, we cannot determine a specific condition.",
        urgency: "Medium",
        recommendations:
          "Monitor your pet closely and consult with a veterinarian if symptoms persist or worsen.",
      })
    }

    setResults(mockResults)
    setStep(3)
  }

  const resetDiagnosis = () => {
    setPetType("")
    setSelectedSymptoms([])
    setResults([])
    setStep(1)
  }

  const dogSymptoms = [
    { id: "vomiting", label: "Vomiting" },
    { id: "diarrhea", label: "Diarrhea" },
    { id: "lethargy", label: "Lethargy/Weakness" },
    { id: "decreased appetite", label: "Decreased Appetite" },
    { id: "increased thirst", label: "Increased Thirst" },
    { id: "itching", label: "Excessive Scratching/Itching" },
    { id: "red skin", label: "Red or Inflamed Skin" },
    { id: "coughing", label: "Coughing" },
    { id: "sneezing", label: "Sneezing" },
    { id: "limping", label: "Limping/Lameness" },
  ]

  const catSymptoms = [
    { id: "vomiting", label: "Vomiting" },
    { id: "diarrhea", label: "Diarrhea" },
    { id: "lethargy", label: "Lethargy/Weakness" },
    { id: "decreased appetite", label: "Decreased Appetite" },
    { id: "increased thirst", label: "Increased Thirst" },
    { id: "urinating outside litter box", label: "Urinating Outside Litter Box" },
    { id: "straining to urinate", label: "Straining to Urinate" },
    { id: "excessive grooming", label: "Excessive Grooming" },
    { id: "hiding", label: "Hiding/Withdrawal" },
    { id: "vocalization", label: "Excessive Vocalization" },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <Link href="/" className="flex items-center gap-2">
            <PawPrint className="h-6 w-6 text-teal-600" />
            <span className="text-xl font-bold">PetCare Diagnostics</span>
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link href="/diagnosis" className="text-sm font-medium text-teal-600 underline underline-offset-4">
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
      <main className="flex-1 py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-8">
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Pet Symptom Checker</h1>
              <p className="text-gray-500 md:text-xl">
                Identify potential health issues in your pet based on observed symptoms
              </p>
            </div>

            <Card className="border-2 border-teal-100">
              <CardHeader className="bg-teal-50 border-b border-teal-100">
                <div className="flex justify-between items-center">
                  <CardTitle>Symptom-Based Diagnosis</CardTitle>
                  <div className="text-sm text-gray-500">Step {step} of 3</div>
                </div>
                <CardDescription>
                  {step === 1 && "Select your pet type to begin"}
                  {step === 2 && "Select all symptoms that your pet is experiencing"}
                  {step === 3 && "Review potential conditions based on symptoms"}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                {step === 1 && (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="pet-type">What type of pet do you have?</Label>
                      <Select value={petType} onValueChange={setPetType}>
                        <SelectTrigger id="pet-type">
                          <SelectValue placeholder="Select pet type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="dog">Dog</SelectItem>
                          <SelectItem value="cat">Cat</SelectItem>
                          <SelectItem value="other" disabled>
                            Other (Coming Soon)
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {petType && (
                      <div className="space-y-2">
                        <Label>Pet age range:</Label>
                        <RadioGroup defaultValue="adult">
                          <div className="flex flex-col space-y-2">
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="puppy-kitten" id="puppy-kitten" />
                              <Label htmlFor="puppy-kitten">
                                {petType === "dog" ? "Puppy (< 1 year)" : "Kitten (< 1 year)"}
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="adult" id="adult" />
                              <Label htmlFor="adult">
                                {petType === "dog" ? "Adult (1-7 years)" : "Adult (1-10 years)"}
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="senior" id="senior" />
                              <Label htmlFor="senior">
                                {petType === "dog" ? "Senior (8+ years)" : "Senior (11+ years)"}
                              </Label>
                            </div>
                          </div>
                        </RadioGroup>
                      </div>
                    )}
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <Label className="text-base">Select all symptoms your {petType} is experiencing:</Label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {(petType === "dog" ? dogSymptoms : catSymptoms).map((symptom) => (
                          <div key={symptom.id} className="flex items-center space-x-2">
                            <Checkbox
                              id={symptom.id}
                              checked={selectedSymptoms.includes(symptom.id)}
                              onCheckedChange={() => handleSymptomChange(symptom.id)}
                            />
                            <Label htmlFor={symptom.id} className="font-normal">
                              {symptom.label}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-base">How long has your pet been showing these symptoms?</Label>
                      <RadioGroup defaultValue="days">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="hours" id="hours" />
                            <Label htmlFor="hours" className="font-normal">
                              Hours
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="days" id="days" />
                            <Label htmlFor="days" className="font-normal">
                              Days
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="weeks" id="weeks" />
                            <Label htmlFor="weeks" className="font-normal">
                              Weeks or longer
                            </Label>
                          </div>
                        </div>
                      </RadioGroup>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-6">
                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 flex items-start gap-3">
                      <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5" />
                      <div className="space-y-1">
                        <p className="font-medium text-amber-800">Medical Disclaimer</p>
                        <p className="text-sm text-amber-700">
                          This tool provides general information only and is not a substitute for professional
                          veterinary advice. Always consult with a qualified veterinarian regarding the health of your
                          pet.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Potential Conditions</h3>

                      {results.map((result, index) => (
                        <Card
                          key={index}
                          className={`border-l-4 ${
                            result.urgency === "High"
                              ? "border-l-red-500"
                              : result.urgency === "Medium"
                                ? "border-l-amber-500"
                                : "border-l-green-500"
                          }`}
                        >
                          <CardHeader className="pb-2">
                            <div className="flex justify-between">
                              <CardTitle className="text-lg">{result.condition}</CardTitle>
                              <span
                                className={`text-sm font-medium px-2 py-1 rounded-full ${
                                  result.urgency === "High"
                                    ? "bg-red-100 text-red-800"
                                    : result.urgency === "Medium"
                                      ? "bg-amber-100 text-amber-800"
                                      : "bg-green-100 text-green-800"
                                }`}
                              >
                                {result.urgency} Urgency
                              </span>
                            </div>
                            <CardDescription>Probability: {result.probability}</CardDescription>
                          </CardHeader>
                          <CardContent className="pb-2">
                            <p className="text-sm">{result.description}</p>
                          </CardContent>
                          <CardFooter className="flex flex-col items-start">
                            <p className="text-sm font-medium">Recommendations:</p>
                            <p className="text-sm">{result.recommendations}</p>
                          </CardFooter>
                        </Card>
                      ))}

                      <div className="pt-2">
                        <Link href="/diseases">
                          <Button variant="outline" size="sm" className="w-full">
                            Learn more about these conditions
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
              <CardFooter className="flex justify-between border-t bg-gray-50 px-6 py-4">
                {step > 1 ? (
                  <Button variant="outline" onClick={() => setStep(step - 1)}>
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back
                  </Button>
                ) : (
                  <Button variant="outline" asChild>
                    <Link href="/">
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Home
                    </Link>
                  </Button>
                )}

                {step === 1 && (
                  <Button onClick={() => setStep(2)} disabled={!petType} className="bg-teal-600 hover:bg-teal-700">
                    Next
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                )}

                {step === 2 && (
                  <Button
                    onClick={handleSubmit}
                    disabled={selectedSymptoms.length === 0}
                    className="bg-teal-600 hover:bg-teal-700"
                  >
                    Get Results
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                )}

                {step === 3 && (
                  <Button onClick={resetDiagnosis} className="bg-teal-600 hover:bg-teal-700">
                    Start New Diagnosis
                  </Button>
                )}
              </CardFooter>
            </Card>

            <div className="text-center text-sm text-gray-500">
              <p>
                If your pet is experiencing a medical emergency, please contact your veterinarian or emergency animal
                hospital immediately.
              </p>
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
