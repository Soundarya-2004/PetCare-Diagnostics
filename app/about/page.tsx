import Link from "next/link"
import { PawPrint } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
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
            <Link href="/about" className="text-sm font-medium text-teal-600 underline underline-offset-4">
              About
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        <div className="max-w-2xl bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold mb-4 text-teal-700">About PetCare Diagnostics</h1>
          <p className="mb-4 text-gray-700">
            <strong>PetCare Diagnostics</strong> is an educational platform designed to help pet owners better understand common diseases, symptoms, and treatments for their beloved animals.
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>Use our <span className="font-semibold">Symptom Checker</span> to get an idea of what might be affecting your pet.</li>
            <li>Browse the <span className="font-semibold">Disease Database</span> for detailed information about common pet illnesses.</li>
            <li>Access <span className="font-semibold">Educational Resources</span> to learn more about pet health and wellness.</li>
          </ul>
          <p className="mb-4 text-gray-700">
            <span className="font-semibold text-amber-700">Disclaimer:</span> This website is for informational and educational purposes only. It is not a substitute for professional veterinary advice, diagnosis, or treatment. Always consult a qualified veterinarian for your pet's health concerns.
          </p>
          <p className="text-gray-500 text-sm">
            © 2025 PetCare Diagnostics. All rights reserved.
          </p>
        </div>
      </main>
    </div>
  )
}