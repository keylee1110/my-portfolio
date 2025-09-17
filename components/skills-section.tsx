import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const programmingLanguages = [
  { name: "JavaScript", level: "Advanced", icon: "🟨" },
  { name: "TypeScript", level: "Advanced", icon: "🔷" },
  { name: "Python", level: "Intermediate", icon: "🐍" },
  { name: "Java", level: "Intermediate", icon: "☕" },
  { name: "Go", level: "Beginner", icon: "🐹" },
  { name: "Rust", level: "Beginner", icon: "🦀" },
]

const frameworks = [
  { name: "React", level: "Advanced" },
  { name: "Next.js", level: "Advanced" },
  { name: "Node.js", level: "Advanced" },
  { name: "Express", level: "Intermediate" },
  { name: "Django", level: "Intermediate" },
  { name: "Spring Boot", level: "Beginner" },
]

const tools = [
  { name: "Git", level: "Advanced" },
  { name: "Docker", level: "Intermediate" },
  { name: "AWS", level: "Intermediate" },
  { name: "PostgreSQL", level: "Intermediate" },
  { name: "MongoDB", level: "Intermediate" },
  { name: "Redis", level: "Beginner" },
]

function getLevelColor(level: string) {
  switch (level) {
    case "Advanced":
      return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
    case "Intermediate":
      return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
    case "Beginner":
      return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
  }
}

export function SkillsSection() {
  return (
    <section className="py-20 px-4 bg-muted/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-balance">Skills & Technologies</h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Technologies and tools I work with to build amazing software
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">💻</span>
                Programming Languages
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {programmingLanguages.map((lang) => (
                  <div key={lang.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{lang.icon}</span>
                      <span className="font-medium">{lang.name}</span>
                    </div>
                    <Badge className={getLevelColor(lang.level)}>{lang.level}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">🚀</span>
                Frameworks & Libraries
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {frameworks.map((framework) => (
                  <div key={framework.name} className="flex items-center justify-between">
                    <span className="font-medium">{framework.name}</span>
                    <Badge className={getLevelColor(framework.level)}>{framework.level}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">🛠️</span>
                Tools & Platforms
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {tools.map((tool) => (
                  <div key={tool.name} className="flex items-center justify-between">
                    <span className="font-medium">{tool.name}</span>
                    <Badge className={getLevelColor(tool.level)}>{tool.level}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
