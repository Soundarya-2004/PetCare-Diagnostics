import React from "react"
import Link from "next/link"
import { ArrowRight, ArrowLeft } from "lucide-react"

export default function PetCareWebinarsPage() {
  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6 text-teal-700">Expert Pet Care Webinars</h1>
      <ul className="space-y-4">
        <li>
          <a href="https://www.youtube.com/watch?v=2pH2b1g4kGg" target="_blank" rel="noopener noreferrer" className="text-teal-700 hover:underline flex items-center">
            Expert Webinar: Understanding Pet Nutrition <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=3nQNiWdeH2Q" target="_blank" rel="noopener noreferrer" className="text-teal-700 hover:underline flex items-center">
            Webinar: Preventive Health Care for Dogs & Cats <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=4QfKj2gk5g8" target="_blank" rel="noopener noreferrer" className="text-teal-700 hover:underline flex items-center">
            Live Q&A: Common Pet Behavior Problems <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=5v5QkQ9QnYw" target="_blank" rel="noopener noreferrer" className="text-teal-700 hover:underline flex items-center">
            Webinar: Senior Pet Wellness Tips <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=6w6QkQ9QnYx" target="_blank" rel="noopener noreferrer" className="text-teal-700 hover:underline flex items-center">
            Expert Panel: Puppy & Kitten Care Essentials <ArrowRight className="ml-2 h-4 w-4" />
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