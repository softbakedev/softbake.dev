import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-gray-100">Privacy Policy</h1>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h2>1. Information Collection</h2>
          <p>We collect information you provide directly to us when you use our services, create an account, or communicate with us.</p>

          <h2>2. Use of Information</h2>
          <p>We use the information we collect to provide, maintain, and improve our services, to develop new ones, and to protect SoftBake.dev and our users.</p>

          <h2>3. Information Sharing and Disclosure</h2>
          <p>We may share information about you in the following ways: with your consent, for legal reasons, or in connection with a merger, sale of company assets, financing, or acquisition of all or a portion of our business.</p>

          <h2>4. Data Security</h2>
          <p>We use reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction.</p>

          <h2>5. Your Choices</h2>
          <p>You may update, correct, or delete information about you at any time by logging into your online account or by contacting us.</p>

          <h2>6. Changes to this Policy</h2>
          <p>We may change this privacy policy from time to time. If we make changes, we will notify you by revising the date at the top of the policy.</p>

          <h2>7. Contact Us</h2>
          <p>If you have any questions about this privacy policy, please contact us at: privacy@softbake.dev</p>
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