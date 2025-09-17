import { Button } from "@/components/ui/button"
import { Download, Github, Linkedin, Mail, Twitter, Instagram } from "lucide-react"

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <img
            src="/profile-avatar.jpg"
            alt="Profile"
            className="w-48 h-48 rounded-full mx-auto mb-6 border-4 border-primary shadow-lg object-cover"
          />
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-balance">
            {"Hi, I'm "}
            <span className="text-primary">Le Dang Khoa</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-6 text-balance">Backend Software Engineer</p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 text-pretty">
            Building innovative software solutions with modern technologies. Passionate about creating scalable
            applications and solving complex problems.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button size="lg" className="gap-2">
            <Download className="w-5 h-5" />
            Download Resume
          </Button>
          <div className="flex gap-4">
            <Button
              variant="outline"
              size="icon"
              asChild
              className="hover:bg-primary hover:text-primary-foreground transition-colors bg-transparent"
            >
              <a href="https://github.com/keylee1110" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
            <Button
              variant="outline"
              size="icon"
              asChild
              className="hover:bg-blue-600 hover:text-white transition-colors bg-transparent"
            >
              <a href="https://linkedin.com/in/khoale04" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
            <Button
              variant="outline"
              size="icon"
              asChild
              className="hover:bg-red-500 hover:text-white transition-colors bg-transparent"
            >
              <a href="mailto:khoald1110@gmail.com">
                <Mail className="w-5 h-5" />
                <span className="sr-only">Email</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
