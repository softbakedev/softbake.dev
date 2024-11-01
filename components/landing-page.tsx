'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { CookingPot, Menu, CloudCog, Code2, Zap, Database, ChefHat, Linkedin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import { Toaster, toast } from 'sonner'
import { Inter, JetBrains_Mono } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
})

export default function LandingPageComponent() {
  const formRef = useRef<HTMLFormElement>(null)
  const [darkMode, setDarkMode] = useState(false)
  const [isSending, setIsSending] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true'
    setDarkMode(isDarkMode)
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    if (darkMode) {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('darkMode', 'false')
    } else {
      document.documentElement.classList.add('dark')
      localStorage.setItem('darkMode', 'true')
    }
  }

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
    setMobileMenuOpen(false)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSending(true)
    setProgress(0)

    const formData = new FormData(event.currentTarget)
    const name = formData.get('name')
    const email = formData.get('email')
    const message = formData.get('message')

    // Simulate sending email with progress
    for (let i = 0; i <= 100; i += 10) {
      setProgress(i)
      await new Promise(resolve => setTimeout(resolve, 200))
    }

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))

    console.log(`Sending email to jan.vaca@softbake.dev:
  From: ${name} (${email})
  Message: ${message}`)

    setIsSending(false)
    setProgress(0)
    if (formRef.current) {
      formRef.current.reset()
    }
    toast.success('Email sent successfully!')
  }

  return (
    <div className={`flex flex-col min-h-screen bg-gradient-to-br from-white via-[#f29727] to-[#ff3000] dark:from-black dark:via-gray-900 dark:to-[#1a0500] transition-colors duration-200 ${inter.variable} ${jetbrainsMono.variable} font-sans`}>
      <style jsx global>{`
        :root {
          --font-inter: ${inter.style.fontFamily};
          --font-jetbrains-mono: ${jetbrainsMono.style.fontFamily};
        }
        body {
          font-family: var(--font-inter);
        }
        code, pre {
          font-family: var(--font-jetbrains-mono);
        }
      `}</style>
      <Toaster />
      <header className="sticky top-0 z-50 w-full px-4 lg:px-6 h-16 flex items-center justify-between border-b border-[#f96012]/20 dark:border-[#f29727]/20 bg-white/80 dark:bg-black/80 backdrop-blur-sm">
        <div className="flex items-center gap-6">
          <button onClick={scrollToTop} className="text-2xl font-bold text-gray-900 dark:text-gray-100 hover:text-[#f96012] dark:hover:text-[#f29727] transition-colors">
            softbake.dev
          </button>
          <nav className="hidden md:flex gap-4 sm:gap-6">
            <button 
              onClick={() => scrollToSection('ingredients')} 
              className="text-sm font-medium text-gray-900 dark:text-gray-100 hover:text-[#f96012] dark:hover:text-[#f29727] focus:text-[#f96012] dark:focus:text-[#f29727] transition-colors"
            >
              Our Ingredients
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-sm font-medium text-gray-900 dark:text-gray-100 hover:text-[#f96012] dark:hover:text-[#f29727] focus:text-[#f96012] dark:focus:text-[#f29727] transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-sm font-medium text-gray-900 dark:text-gray-100 hover:text-[#f96012] dark:hover:text-[#f29727] focus:text-[#f96012] dark:focus:text-[#f29727] transition-colors"
            >
              Contact
            </button>
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleDarkMode} 
            aria-label="Toggle dark mode"
            className="text-gray-900 dark:text-gray-100 hover:text-[#f96012] dark:hover:text-[#f29727] transition-colors"
          >
            <CookingPot className="h-[1.2rem] w-[1.2rem]" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden text-gray-900 dark:text-gray-100 hover:text-[#f96012] dark:hover:text-[#f29727] focus:text-[#f96012] dark:focus:text-[#f29727] transition-colors" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="h-[1.2rem] w-[1.2rem]" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </header>
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white/80 dark:bg-black/80 border-b border-[#f96012]/20 dark:border-[#f29727]/20 py-2">
          <button 
            onClick={() => scrollToSection('ingredients')} 
            className="block w-full text-left px-4 py-2 text-sm font-medium text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 focus:bg-gray-100 dark:focus:bg-gray-700 focus:text-[#f96012] dark:focus:text-[#f29727] transition-colors"
          >
            Our Ingredients
          </button>
          <button 
            onClick={() => scrollToSection('about')} 
            className="block w-full text-left px-4 py-2 text-sm font-medium text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 focus:bg-gray-100 dark:focus:bg-gray-700 focus:text-[#f96012] dark:focus:text-[#f29727] transition-colors"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className="block w-full text-left px-4 py-2 text-sm font-medium text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 focus:bg-gray-100 dark:focus:bg-gray-700 focus:text-[#f96012] dark:focus:text-[#f29727] transition-colors"
          >
            Contact
          </button>
        </div>
      )}
      <main className="flex-1 flex flex-col items-center">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-white/80 dark:bg-black/80 flex justify-center">
          <div className="container px-4 md:px-6 flex flex-col items-center">
            <div className="flex flex-col items-center space-y-4 text-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/softbake%20logo-svg-3sYfHzKk3szrxIhWneQUuqJYQZGqN0.svg"
                alt="SoftBake Logo"
                width={400}
                height={400}
                className="mb-8 w-64 h-64 md:w-96 md:h-96"
              />
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-gray-900 dark:text-gray-100">
                  Baking Innovation in the Cloud
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl dark:text-gray-300">
                  We're a group of tech-savvy bakers, whipping up delicious solutions in cloud development, app creation,
                  and data management.
                </p>
              </div>
              <div className="space-x-4">
                <Button onClick={() => scrollToSection('ingredients')}>Get Started</Button>
              </div>
            </div>
          </div>
        </section>
        <section id="ingredients" className="w-full py-12 md:py-24 lg:py-32 bg-white/80 dark:bg-black/80 flex justify-center">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-gray-900 dark:text-gray-100">Our Secret Ingredients</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm border-[#f96012]/20 dark:border-[#f29727]/20 transition-all hover:shadow-lg hover:scale-105">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-[#f96012]/10 dark:bg-[#f29727]/10 flex items-center justify-center mb-4">
                    <CloudCog className="w-6 h-6 text-[#f96012] dark:text-[#f29727]" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 dark:text-gray-100">Cloud Architecture</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 dark:text-gray-300">Designing scalable and resilient cloud infrastructures on AWS, Azure, and GCP to optimize performance and reduce costs.</p>
                </CardContent>
              </Card>
              <Card className="bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm border-[#f96012]/20 dark:border-[#f29727]/20 transition-all hover:shadow-lg hover:scale-105">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-[#f96012]/10 dark:bg-[#f29727]/10 flex items-center justify-center mb-4">
                    <Code2 className="w-6 h-6 text-[#f96012] dark:text-[#f29727]" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 dark:text-gray-100">Custom Software Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 dark:text-gray-300">Crafting bespoke applications and solutions tailored to your unique business needs using cutting-edge technologies.</p>
                </CardContent>
              </Card>
              <Card className="bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm border-[#f96012]/20 dark:border-[#f29727]/20 transition-all hover:shadow-lg hover:scale-105">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-[#f96012]/10 dark:bg-[#f29727]/10 flex items-center justify-center mb-4">
                    <Zap className="w-6 h-6 text-[#f96012] dark:text-[#f29727]" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 dark:text-gray-100">IoT Solutions</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 dark:text-gray-300">Developing innovative IoT systems that connect devices, collect data, and provide real-time insights for smarter decision-making.</p>
                </CardContent>
              </Card>
              <Card className="bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm border-[#f96012]/20 dark:border-[#f29727]/20 transition-all hover:shadow-lg hover:scale-105">
                <CardHeader>
                  <div  className="w-12 h-12 rounded-full  bg-[#f96012]/10 dark:bg-[#f29727]/10 flex items-center justify-center mb-4">
                    <Database className="w-6 h-6 text-[#f96012] dark:text-[#f29727]" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 dark:text-gray-100">Data Analytics & AI</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 dark:text-gray-300">Leveraging advanced analytics and AI to extract valuable insights from your data, driving innovation and business growth.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-white/80 dark:bg-black/80 flex justify-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center mb-12">
              <ChefHat className="w-16 h-16 text-[#f96012] dark:text-[#f29727] mb-4" />
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900 dark:text-gray-100">About Our Kitchen</h2>
                <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl dark:text-gray-300">
                  At SoftBake, we're not just developers – we're digital pastry chefs. Each project is a unique recipe,
                  blending the finest ingredients of technology to create solutions that are both functional and delightful.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm border-[#f96012]/20 dark:border-[#f29727]/20">
                <CardHeader className="text-center">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/jan_baker_v1-KRe2fMgcgafG4bpMC8LiMOg3hSEkkb.png"
                    alt="Jan Váca"
                    width={200}
                    height={200}
                    className="rounded-full mx-auto mb-4"
                  />
                  <CardTitle className="text-xl font-bold text-gray-900 dark:text-gray-100">Jan Váca</CardTitle>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Senior Architect</p>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="space-y-2">
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-gray-100">Skills</h3>
                      <div className="flex flex-wrap justify-center gap-2 mt-2">
                        <Badge variant="secondary">Golang</Badge>
                        <Badge variant="secondary">Rust</Badge>
                        <Badge variant="secondary">Python</Badge>
                        <Badge variant="secondary">TypeScript</Badge>
                        <Badge variant="secondary">Terraform</Badge>
                        <Badge variant="secondary">Bicep</Badge>
                        <Badge variant="secondary">Azure</Badge>
                        <Badge variant="secondary">AWS</Badge>
                        <Badge variant="secondary">GCP</Badge>
                        <Badge variant="secondary">Azure DevOps</Badge>
                        <Badge variant="secondary">GitHub Actions</Badge>
                        <Badge variant="secondary">PostgreSQL</Badge>
                        <Badge variant="secondary">MSSQL</Badge>
                        <Badge variant="secondary">Oracle</Badge>
                        <Badge variant="secondary">CosmosDB</Badge>
                        <Badge variant="secondary">MongoDB</Badge>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <a href="https://cz.linkedin.com/in/jan-vaca-a335a2152" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm text-[#f96012] dark:text-[#f29727] hover:underline">
                      <Linkedin className="w-4 h-4 mr-1" />
                      LinkedIn Profile
                    </a>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm border-[#f96012]/20 dark:border-[#f29727]/20">
                <CardHeader className="text-center">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/jan_baker_v2-zJvxYqJjo934Bred21HjacSnnnsN6T.png"
                    alt="Daniel Barabash"
                    width={200}
                    height={200}
                    className="rounded-full mx-auto mb-4"
                  />
                  <CardTitle className="text-xl font-bold text-gray-900 dark:text-gray-100">Daniel Barabash</CardTitle>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Senior Developer</p>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="space-y-2">
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-gray-100">Skills</h3>
                      <div className="flex flex-wrap justify-center gap-2 mt-2">
                        <Badge variant="secondary">JavaScript</Badge>
                        <Badge variant="secondary">TypeScript</Badge>
                        <Badge variant="secondary">Python</Badge>
                        <Badge variant="secondary">Java</Badge>
                        <Badge variant="secondary">React</Badge>
                        <Badge variant="secondary">Node.js</Badge>
                        <Badge variant="secondary">Express</Badge>
                        <Badge variant="secondary">Next.js</Badge>
                        <Badge variant="secondary">AWS</Badge>
                        <Badge variant="secondary">Docker</Badge>
                        <Badge variant="secondary">Kubernetes</Badge>
                        <Badge variant="secondary">CI/CD</Badge>
                        <Badge variant="secondary">MongoDB</Badge>
                        <Badge variant="secondary">PostgreSQL</Badge>
                        <Badge variant="secondary">MySQL</Badge>
                        <Badge variant="secondary">Redis</Badge>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <a href="https://cz.linkedin.com/in/barabdaniel" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm text-[#f96012] dark:text-[#f29727] hover:underline">
                      <Linkedin className="w-4 h-4 mr-1" />
                      LinkedIn Profile
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-white/80 dark:bg-black/80 flex justify-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900 dark:text-gray-100">Let's Bake Something Amazing</h2>
                <p className="mx-auto max-w-[600px] text-gray-700 md:text-xl dark:text-gray-300">
                  Ready to cook up your next big idea? Drop us a line and let's start mixing!
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form ref={formRef} className="flex flex-col space-y-4" onSubmit={handleSubmit}>
                  <Input type="text" name="name" placeholder="Name" required />
                  <Input type="email" name="email" placeholder="Email" required />
                  <Textarea name="message" placeholder="Your message" required />
                  <Button 
                    type="submit" 
                    className="bg-[#f96012] hover:bg-[#ff3000] text-white"
                    disabled={isSending}
                  >
                    {isSending ? 'Sending...' : 'Send Message'}
                  </Button>
                  {isSending && (
                    <Progress value={progress} className="w-full bg-[#f96012]" />
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 px-4 md:px-6 border-t border-[#f96012]/20 dark:border-[#f29727]/20 bg-white/80 dark:bg-black/80 backdrop-blur-sm">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-700 dark:text-gray-300">© 2024 SoftBake. All rights reserved.</p>
          <nav className="flex gap-4 sm:gap-6">
            <a className="text-xs hover:underline underline-offset-4 text-gray-700 dark:text-gray-300" href="#">
              Terms of Service
            </a>
            <a className="text-xs hover:underline underline-offset-4 text-gray-700 dark:text-gray-300" href="#">
              Privacy
            </a>
          </nav>
        </div>
      </footer>
    </div>
  )
}