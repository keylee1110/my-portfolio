import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
    image: "/ecommerce-project.jpg",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS"],
    liveUrl: "https://your-ecommerce-demo.vercel.app",
    githubUrl: "https://github.com/yourusername/ecommerce-platform",
  },
  {
    title: "Task Management App",
    description:
      "Collaborative task management application with real-time updates, team collaboration, and project tracking.",
    image: "/task-app-project.jpg",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
    liveUrl: "https://your-task-app-demo.vercel.app",
    githubUrl: "https://github.com/yourusername/task-management-app",
  },
  {
    title: "Weather Analytics Dashboard",
    description:
      "Data visualization dashboard for weather analytics with interactive charts and real-time weather data.",
    image: "/weather-dashboard-project.jpg",
    technologies: ["Python", "Django", "Chart.js", "PostgreSQL", "REST API"],
    liveUrl: "https://your-weather-dashboard.vercel.app",
    githubUrl: "https://github.com/yourusername/weather-analytics",
  },
  {
    title: "Social Media API",
    description:
      "RESTful API for social media platform with user authentication, posts, comments, and real-time notifications.",
    image: "/api-project.jpg",
    technologies: ["Node.js", "Express", "JWT", "MongoDB", "Socket.io"],
    liveUrl: "https://your-api-docs.vercel.app",
    githubUrl: "https://github.com/yourusername/social-media-api",
  },
]

export function ProjectsSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-balance">Featured Projects</h2>
          <p className="text-lg text-muted-foreground text-pretty">Some of the projects I've worked on recently</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-pretty">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button size="sm" className="gap-2" href={project.liveUrl}>
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </Button>
                  <Button size="sm" variant="outline" className="gap-2 bg-transparent" href={project.githubUrl}>
                    <Github className="w-4 h-4" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
