import Link from "next/link"
import { ArrowRight, ArrowLeft } from "lucide-react"

export default function PetCareVideosPage() {
  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6 text-teal-700">Pet Care Video Tutorials</h1>
      <ul className="space-y-4">
        <li>
          <a href="https://www.youtube.com/watch?v=1w1bQkQ9QnY" target="_blank" rel="noopener noreferrer" className="text-teal-700 hover:underline flex items-center">
            How to Bathe Your Dog at Home <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=8pU6M4lL4Dk" target="_blank" rel="noopener noreferrer" className="text-teal-700 hover:underline flex items-center">
            Cat Grooming Tips for Beginners <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=1wX1aQ1a1aA" target="_blank" rel="noopener noreferrer" className="text-teal-700 hover:underline flex items-center">
            Puppy Training Basics <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=Q5v6NDq4Q6g" target="_blank" rel="noopener noreferrer" className="text-teal-700 hover:underline flex items-center">
            How to Trim Your Dog's Nails Safely <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=J6Vd5kA2wzE" target="_blank" rel="noopener noreferrer" className="text-teal-700 hover:underline flex items-center">
            Feeding Your Cat: Tips and Tricks <ArrowRight className="ml-2 h-4 w-4" />
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