import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-gray-100">Terms of Service</h1>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h2>1. Acceptance of Terms</h2>
          <p>By accessing and using the services provided by SoftBake.dev, you agree to comply with and be bound by these Terms of Service.</p>

          <h2>2. Description of Service</h2>
          <p>SoftBake.dev provides cloud development, app creation, and data management services. We reserve the right to modify or discontinue any aspect of our services at any time.</p>

          <h2>3. User Responsibilities</h2>
          <p>You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.</p>

          <h2>4. Intellectual Property</h2>
          <p>All content and materials available on SoftBake.dev are the property of SoftBake.dev or its licensors and are protected by applicable intellectual property laws.</p>

          <h2>5. Limitation of Liability</h2>
          <p>SoftBake.dev shall not be liable for any indirect, incidental, special, consequential or punitive damages resulting from your use of or inability to use the service.</p>

          <h2>6. Governing Law</h2>
          <p>These Terms of Service shall be governed by and construed in accordance with the laws of the jurisdiction in which SoftBake.dev is established.</p>

          <h2>7. Changes to Terms</h2>
          <p>We reserve the right to modify these Terms of Service at any time. Your continued use of the service after any such changes constitutes your acceptance of the new Terms of Service.</p>
        </div>
        <div className="mt-8">
          <Button asChild>
            <Link href="/">Return to Home</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}