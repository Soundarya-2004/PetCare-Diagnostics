"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PawPrint, Search, ChevronRight, BookOpen } from "lucide-react"

export default function DiseasesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedSymptom, setSelectedSymptom] = useState("")

  // Map prompt symptoms to actual disease symptoms
  const symptomMap = {
    "Vomiting": "Severe vomiting",
    "Diarrhea": "Bloody diarrhea",
    "Lethargy/Weakness": "Lethargy",
    "Decreased Appetite": "Loss of appetite",
    "Increased Thirst": "Increased thirst",
    "Excessive Scratching/Itching": "Itchy skin",
    "Red or Inflamed Skin": "Redness",
    "Coughing": "Coughing",
    "Sneezing": "Nasal discharge",
    "Limping/Lameness": "Lameness",
  }

  // Only show these symptoms in the dropdown
  const promptSymptoms = Object.keys(symptomMap)

  const diseases = {
    dog: [
      {
        id: "canine-parvovirus",
        name: "Canine Parvovirus",
        category: "Infectious",
        description:
          "A highly contagious viral disease affecting dogs, particularly puppies. It attacks the gastrointestinal tract and immune system.",
        symptoms: [
          "Severe vomiting",
          "Bloody diarrhea",
          "Lethargy",
          "Loss of appetite",
          "Fever",
          "Weight loss",
          "Dehydration",
        ],
        treatments: ["Hospitalization", "IV fluids", "Antibiotics", "Anti-nausea medication", "Isolation"],
        prevention: ["Vaccination", "Limiting exposure to infected dogs", "Proper sanitation"],
      },
      {
        id: "canine-distemper",
        name: "Canine Distemper",
        category: "Infectious",
        description:
          "A contagious and serious viral illness with no known cure. It affects a dog's respiratory, gastrointestinal, and nervous systems.",
        symptoms: ["Fever", "Nasal discharge", "Coughing", "Lethargy", "Reduced appetite", "Vomiting", "Seizures"],
        treatments: [
          "Supportive care",
          "Antibiotics for secondary infections",
          "Anti-seizure medications",
          "IV fluids",
        ],
        prevention: ["Vaccination", "Avoiding contact with infected animals"],
      },
      {
        id: "hip-dysplasia",
        name: "Hip Dysplasia",
        category: "Genetic/Developmental",
        description:
          "A skeletal condition where the hip joint doesn't develop properly, leading to arthritis and pain.",
        symptoms: [
          "Decreased activity",
          "Difficulty rising",
          "Reluctance to run or climb stairs",
          "Bunny-hopping gait",
          "Loss of muscle mass in thighs",
        ],
        treatments: [
          "Weight management",
          "Exercise modification",
          "Anti-inflammatory medications",
          "Joint supplements",
          "Surgery in severe cases",
        ],
        prevention: ["Selective breeding", "Maintaining healthy weight", "Appropriate exercise during growth"],
      },
      {
        id: "kennel-cough",
        name: "Kennel Cough (Bordetella)",
        category: "Infectious",
        description:
          "A highly contagious respiratory disease. It's named kennel cough because it can quickly spread through kennels and other places where dogs congregate.",
        symptoms: [
          "Persistent, forceful cough",
          "Retching",
          "Watery nasal discharge",
          "In severe cases: fever, lethargy",
        ],
        treatments: ["Rest", "Antibiotics", "Cough suppressants", "Isolation from other dogs"],
        prevention: ["Bordetella vaccination", "Avoiding contact with infected dogs"],
      },
      {
        id: "diabetes-mellitus",
        name: "Diabetes Mellitus",
        category: "Endocrine",
        description:
          "A chronic condition affecting the body's ability to produce or respond to insulin, resulting in abnormal metabolism of carbohydrates and elevated blood sugar.",
        symptoms: [
          "Increased thirst",
          "Frequent urination",
          "Weight loss despite normal eating",
          "Increased appetite",
          "Lethargy",
        ],
        treatments: [
          "Insulin therapy",
          "Dietary management",
          "Regular exercise",
          "Regular monitoring of blood glucose",
        ],
        prevention: ["Weight management", "Regular veterinary check-ups", "Proper diet"],
      },
      {
        id: "otitis-externa",
        name: "Otitis Externa (Ear Infection)",
        category: "Infectious/Inflammatory",
        description:
          "Inflammation or infection of the external ear canal, common in dogs with floppy ears or allergies.",
        symptoms: [
          "Ear scratching",
          "Head shaking",
          "Redness in ear canal",
          "Odor from ear",
          "Discharge from ear",
        ],
        treatments: [
          "Ear cleaning",
          "Topical or oral antibiotics",
          "Anti-inflammatory medications",
        ],
        prevention: ["Regular ear cleaning", "Managing allergies", "Keeping ears dry"],
      },
      {
        id: "lyme-disease",
        name: "Lyme Disease",
        category: "Infectious (Tick-borne)",
        description:
          "A tick-borne disease caused by Borrelia burgdorferi, leading to joint pain, fever, and lethargy.",
        symptoms: [
          "Lameness",
          "Fever",
          "Swollen joints",
          "Loss of appetite",
          "Lethargy",
        ],
        treatments: [
          "Antibiotics (usually doxycycline)",
          "Pain relief medications",
        ],
        prevention: ["Tick prevention", "Avoiding tick-infested areas", "Vaccination (where available)"],
      },
      {
        id: "allergic-dermatitis",
        name: "Allergic Dermatitis",
        category: "Allergic",
        description:
          "A skin condition caused by allergies to food, fleas, or environmental factors, resulting in itching and inflammation.",
        symptoms: [
          "Itchy skin",
          "Redness",
          "Hair loss",
          "Hot spots",
          "Excessive licking or chewing",
        ],
        treatments: [
          "Antihistamines",
          "Steroids",
          "Flea control",
          "Hypoallergenic diet",
        ],
        prevention: ["Flea prevention", "Identifying and avoiding allergens"],
      },
    ],
    cat: [
      {
        id: "feline-lower-urinary-tract-disease",
        name: "Feline Lower Urinary Tract Disease (FLUTD)",
        category: "Urinary",
        description:
          "A group of conditions affecting a cat's bladder and urethra. It can be particularly dangerous in male cats due to potential urinary blockages.",
        symptoms: [
          "Straining to urinate",
          "Urinating outside the litter box",
          "Blood in urine",
          "Excessive licking of genital area",
          "Crying when urinating",
        ],
        treatments: [
          "Increased water intake",
          "Special diet",
          "Medication for pain/inflammation",
          "Surgery in case of blockage",
        ],
        prevention: ["Increased water consumption", "Stress reduction", "Regular litter box cleaning", "Proper diet"],
      },
      {
        id: "feline-infectious-peritonitis",
        name: "Feline Infectious Peritonitis (FIP)",
        category: "Infectious",
        description:
          "A viral disease caused by certain strains of feline coronavirus. It's a progressive disease that is often fatal.",
        symptoms: [
          "Fever",
          "Weight loss",
          "Loss of appetite",
          "Fluid accumulation in abdomen",
          "Jaundice",
          "Neurological symptoms",
        ],
        treatments: [
          "Supportive care",
          "Anti-inflammatory drugs",
          "Immunosuppressive drugs",
          "New antiviral treatments under investigation",
        ],
        prevention: ["Isolation of infected cats", "Good hygiene", "Stress reduction"],
      },
      {
        id: "hyperthyroidism",
        name: "Hyperthyroidism",
        category: "Endocrine",
        description:
          "A common endocrine disorder in older cats caused by an overactive thyroid gland, resulting in increased metabolism.",
        symptoms: [
          "Weight loss despite increased appetite",
          "Increased thirst and urination",
          "Hyperactivity",
          "Vomiting",
          "Diarrhea",
          "Poor coat condition",
        ],
        treatments: ["Medication", "Radioactive iodine therapy", "Surgery", "Dietary management"],
        prevention: ["Regular veterinary check-ups", "Thyroid screening for older cats"],
      },
      {
        id: "feline-asthma",
        name: "Feline Asthma",
        category: "Respiratory",
        description:
          "A chronic inflammation of the small passageways of a cat's lungs. When these passageways become irritated, they narrow and make breathing difficult.",
        symptoms: [
          "Wheezing",
          "Persistent cough",
          "Difficulty breathing",
          "Open-mouth breathing",
          "Blue lips and gums (in severe cases)",
        ],
        treatments: [
          "Bronchodilators",
          "Corticosteroids",
          "Environmental modifications",
          "Oxygen therapy in severe cases",
        ],
        prevention: ["Avoiding triggers like smoke, dust, and certain aerosols", "Regular veterinary care"],
      },
      {
        id: "feline-panleukopenia",
        name: "Feline Panleukopenia (Feline Distemper)",
        category: "Infectious",
        description:
          "A highly contagious viral disease that is often fatal, especially in kittens. It attacks rapidly dividing cells, particularly in the digestive system, bone marrow, and lymph tissue.",
        symptoms: [
          "Severe vomiting",
          "Diarrhea (often bloody)",
          "High fever",
          "Depression",
          "Loss of appetite",
          "Dehydration",
        ],
        treatments: ["Supportive care", "IV fluids", "Antibiotics for secondary infections", "Anti-nausea medication"],
        prevention: ["Vaccination", "Isolation of infected cats", "Proper sanitation"],
      },
      {
        id: "chronic-kidney-disease",
        name: "Chronic Kidney Disease",
        category: "Renal",
        description:
          "A progressive loss of kidney function, common in older cats. Early detection and management can improve quality of life.",
        symptoms: [
          "Increased thirst",
          "Frequent urination",
          "Weight loss",
          "Poor appetite",
          "Vomiting",
          "Lethargy",
        ],
        treatments: [
          "Special kidney diet",
          "Fluid therapy",
          "Medications to manage symptoms",
        ],
        prevention: ["Regular veterinary check-ups", "Early detection and management"],
      },
      {
        id: "feline-diabetes",
        name: "Feline Diabetes Mellitus",
        category: "Endocrine",
        description:
          "A disorder in which the body cannot properly produce or respond to insulin, leading to high blood sugar.",
        symptoms: [
          "Increased thirst",
          "Frequent urination",
          "Weight loss despite increased appetite",
          "Lethargy",
          "Poor coat condition",
        ],
        treatments: [
          "Insulin therapy",
          "Dietary management",
          "Regular monitoring of blood glucose",
        ],
        prevention: ["Weight management", "Proper diet", "Regular exercise"],
      },
      {
        id: "feline-allergic-dermatitis",
        name: "Feline Allergic Dermatitis",
        category: "Allergic",
        description:
          "A skin condition caused by allergies to food, fleas, or environmental factors, resulting in itching and inflammation.",
        symptoms: [
          "Itchy skin",
          "Redness",
          "Hair loss",
          "Scabs or sores",
          "Excessive grooming",
        ],
        treatments: [
          "Antihistamines",
          "Steroids",
          "Flea control",
          "Hypoallergenic diet",
        ],
        prevention: ["Flea prevention", "Identifying and avoiding allergens"],
      },
    ],
  }

  // Gather all unique symptoms for dropdown, only from symptoms actually present in the diseases data
  const allSymptoms = Array.from(
    new Set([
      ...diseases.dog.flatMap((d) => d.symptoms),
      ...diseases.cat.flatMap((d) => d.symptoms),
    ])
  ).sort((a, b) => a.localeCompare(b))

  // Filter diseases by mapped symptom
  const filteredDiseases = {
    dog: diseases.dog.filter(
      (disease) =>
        (searchQuery
          ? disease.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            disease.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            disease.symptoms.some((symptom) => symptom.toLowerCase().includes(searchQuery.toLowerCase()))
          : true) &&
        (selectedSymptom
          ? disease.symptoms.some((symptom) => symptom === symptomMap[selectedSymptom])
          : true)
    ),
    cat: diseases.cat.filter(
      (disease) =>
        (searchQuery
          ? disease.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            disease.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            disease.symptoms.some((symptom) => symptom.toLowerCase().includes(searchQuery.toLowerCase()))
          : true) &&
        (selectedSymptom
          ? disease.symptoms.some((symptom) => symptom === symptomMap[selectedSymptom])
          : true)
    ),
  }

  // Show suggestion only for single symptom and no search
  const showSuggestion =
    selectedSymptom &&
    !searchQuery &&
    (filteredDiseases.dog.length > 0 || filteredDiseases.cat.length > 0)

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
            <Link href="/diseases" className="text-sm font-medium text-teal-600 underline underline-offset-4">
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
          <div className="mx-auto max-w-5xl space-y-8">
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Pet Disease Database</h1>
              <p className="text-gray-500 md:text-xl">
                Comprehensive information about common pet diseases, symptoms, and treatments
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-4 items-center mb-6">
              <div className="relative w-full md:w-1/2">
                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <Input
                  type="search"
                  placeholder="Search diseases, symptoms, or treatments..."
                  className="pl-10 py-6 text-base"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="w-full md:w-1/2">
                <select
                  className="w-full border rounded px-3 py-2 text-base"
                  value={selectedSymptom}
                  onChange={(e) => setSelectedSymptom(e.target.value)}
                >
                  <option value="">Select a Symptom</option>
                  {promptSymptoms.map((symptom) => (
                    <option key={symptom} value={symptom}>
                      {symptom}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {showSuggestion && (
              <div className="mb-8 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                <h3 className="font-semibold mb-2 text-yellow-800">
                  Possible diseases for symptom: <span className="italic">{selectedSymptom}</span>
                </h3>
                <ul className="list-disc pl-5 text-sm text-yellow-900">
                  {filteredDiseases.dog.map((disease) => (
                    <li key={disease.id}>
                      <span className="font-medium">{disease.name}</span> (Dog): {disease.description}
                    </li>
                  ))}
                  {filteredDiseases.cat.map((disease) => (
                    <li key={disease.id}>
                      <span className="font-medium">{disease.name}</span> (Cat): {disease.description}
                    </li>
                  ))}
                </ul>
                <div className="mt-2 text-xs text-yellow-700">
                  <b>Note:</b> This is not a diagnosis. Please consult your veterinarian for professional advice.
                </div>
              </div>
            )}

            <Tabs defaultValue="dog" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="dog" className="text-base py-3">
                  Dog Diseases
                </TabsTrigger>
                <TabsTrigger value="cat" className="text-base py-3">
                  Cat Diseases
                </TabsTrigger>
              </TabsList>

              <TabsContent value="dog" className="space-y-6">
                {filteredDiseases.dog.length > 0 ? (
                  filteredDiseases.dog.map((disease) => (
                    <Card key={disease.id} className="overflow-hidden">
                      <CardHeader className="bg-teal-50 border-b">
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-xl">{disease.name}</CardTitle>
                            <CardDescription className="mt-1">Category: {disease.category}</CardDescription>
                          </div>
                          <Button variant="ghost" size="sm" className="gap-1" asChild>
                            <Link href={`/diseases/${disease.id}`}>
                              Details
                              <ChevronRight className="h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                      </CardHeader>
                      <CardContent className="p-6">
                        <div className="space-y-4">
                          <div>
                            <h3 className="font-medium mb-2">Description</h3>
                            <p className="text-sm text-gray-600">{disease.description}</p>
                          </div>

                          <div>
                            <h3 className="font-medium mb-2">Common Symptoms</h3>
                            <ul className="list-disc pl-5 text-sm text-gray-600 grid grid-cols-1 md:grid-cols-2 gap-1">
                              {disease.symptoms.map((symptom, index) => (
                                <li key={index}>{symptom}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="bg-gray-50 border-t px-6 py-4">
                        <div className="flex items-center text-sm text-gray-500">
                          <BookOpen className="h-4 w-4 mr-2" />
                          <span>View full details for treatment options and prevention</span>
                        </div>
                      </CardFooter>
                    </Card>
                  ))
                ) : (
                  <div className="text-center py-12">
                    <p className="text-gray-500">No diseases found matching your search criteria.</p>
                    <Button variant="link" onClick={() => { setSearchQuery(""); setSelectedSymptom(""); }} className="mt-2">
                      Clear search
                    </Button>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="cat" className="space-y-6">
                {filteredDiseases.cat.length > 0 ? (
                  filteredDiseases.cat.map((disease) => (
                    <Card key={disease.id} className="overflow-hidden">
                      <CardHeader className="bg-teal-50 border-b">
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-xl">{disease.name}</CardTitle>
                            <CardDescription className="mt-1">Category: {disease.category}</CardDescription>
                          </div>
                          <Button variant="ghost" size="sm" className="gap-1" asChild>
                            <Link href={`/diseases/${disease.id}`}>
                              Details
                              <ChevronRight className="h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                      </CardHeader>
                      <CardContent className="p-6">
                        <div className="space-y-4">
                          <div>
                            <h3 className="font-medium mb-2">Description</h3>
                            <p className="text-sm text-gray-600">{disease.description}</p>
                          </div>

                          <div>
                            <h3 className="font-medium mb-2">Common Symptoms</h3>
                            <ul className="list-disc pl-5 text-sm text-gray-600 grid grid-cols-1 md:grid-cols-2 gap-1">
                              {disease.symptoms.map((symptom, index) => (
                                <li key={index}>{symptom}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="bg-gray-50 border-t px-6 py-4">
                        <div className="flex items-center text-sm text-gray-500">
                          <BookOpen className="h-4 w-4 mr-2" />
                          <span>View full details for treatment options and prevention</span>
                        </div>
                      </CardFooter>
                    </Card>
                  ))
                ) : (
                  <div className="text-center py-12">
                    <p className="text-gray-500">No diseases found matching your search criteria.</p>
                    <Button variant="link" onClick={() => { setSearchQuery(""); setSelectedSymptom(""); }} className="mt-2">
                      Clear search
                    </Button>
                  </div>
                )}
              </TabsContent>
            </Tabs>
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
