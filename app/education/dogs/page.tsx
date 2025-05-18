import React from "react"
import Link from "next/link"
import { ArrowRight, ArrowLeft } from "lucide-react"

export default function AllDogArticlesPage() {
  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6 text-teal-700">All Dog Articles</h1>
      <ul className="space-y-4">
        <li>
          <a href="https://www.guidedogs.org.uk/getting-support/information-and-advice/dog-care-and-welfare/dog-body-language/" target="_blank" rel="noopener noreferrer" className="text-teal-700 hover:underline flex items-center">
            Understanding Canine Body Language <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </li>
        <li>
          <a href="https://www.whole-dog-journal.com/puppies/pre_puppy_prep/the-complete-puppy-socialization-guide/" target="_blank" rel="noopener noreferrer" className="text-teal-700 hover:underline flex items-center">
            Puppy Socialization Guide <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </li>
        <li>
          <a href="https://vcahospitals.com/know-your-pet/senior-dog-care-special-considerations-for-dogs" target="_blank" rel="noopener noreferrer" className="text-teal-700 hover:underline flex items-center">
            Senior Dog Care: Special Considerations <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </li>
        <li>
          <a href="https://www.thesprucepets.com/common-dog-behavior-problems-1118278" target="_blank" rel="noopener noreferrer" className="text-teal-700 hover:underline flex items-center">
            Common Behavioral Problems and Solutions <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </li>
        <li>
          <a href="https://www.akc.org/expert-advice/health/dog-nutrition-tips/" target="_blank" rel="noopener noreferrer" className="text-teal-700 hover:underline flex items-center">
            Dog Nutrition Tips <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </li>
        <li>
          <a href="https://www.aspca.org/pet-care/dog-care/dog-grooming-tips" target="_blank" rel="noopener noreferrer" className="text-teal-700 hover:underline flex items-center">
            Dog Grooming Tips <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </li>
        <li>
          <a href="https://www.cesarsway.com/how-to-exercise-your-dog/" target="_blank" rel="noopener noreferrer" className="text-teal-700 hover:underline flex items-center">
            How to Exercise Your Dog <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </li>
        <li>
          <a href="https://www.humanesociety.org/resources/keeping-your-dog-safe-summer" target="_blank" rel="noopener noreferrer" className="text-teal-700 hover:underline flex items-center">
            Keeping Your Dog Safe in Summer <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </li>
        <li>
          <a href="https://www.petmd.com/dog/general-health/evr_multi_dog_vaccination_schedule" target="_blank" rel="noopener noreferrer" className="text-teal-700 hover:underline flex items-center">
            Dog Vaccination Schedule <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </li>
        <li>
          <a href="https://www.avma.org/resources-tools/pet-owners/petcare/first-aid-pet-owners" target="_blank" rel="noopener noreferrer" className="text-teal-700 hover:underline flex items-center">
            First Aid for Dog Owners <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </li>
      </ul>
      <div className="mt-8">
        <Link href="/education" className="inline-flex items-center text-teal-600 hover:underline">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Link>
      </div>
    </div>
  )
}