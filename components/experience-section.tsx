import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const experiences = [
  {
    company: "TechCorp Solutions",
    position: "Senior Full-Stack Developer",
    duration: "2022 - Present",
    description:
      "Lead development of scalable web applications using React, Node.js, and AWS. Mentored junior developers and implemented CI/CD pipelines.",
    achievements: [
      "Reduced application load time by 40% through optimization",
      "Led a team of 5 developers on major product redesign",
      "Implemented automated testing reducing bugs by 60%",
    ],
  },
  {
    company: "StartupXYZ",
    position: "Full-Stack Developer",
    duration: "2020 - 2022",
    description:
      "Developed and maintained multiple client projects using modern web technologies. Collaborated with design and product teams.",
    achievements: [
      "Built 10+ responsive web applications from scratch",
      "Integrated payment systems and third-party APIs",
      "Improved code quality through code reviews and testing",
    ],
  },
  {
    company: "Digital Agency Pro",
    position: "Frontend Developer",
    duration: "2019 - 2020",
    description:
      "Created responsive websites and web applications for various clients. Focused on user experience and performance optimization.",
    achievements: [
      "Delivered 20+ client projects on time and within budget",
      "Achieved 95+ PageSpeed scores on all projects",
      "Collaborated with designers to implement pixel-perfect UIs",
    ],
  },
]

export function ExperienceSection() {
  return (
    <section className="py-20 px-4 bg-muted/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-balance">Work Experience</h2>
          <p className="text-lg text-muted-foreground text-pretty">My professional journey in software development</p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="relative">
              <div className="absolute left-0 top-6 w-1 h-16 bg-primary rounded-full hidden md:block" />
              <CardHeader className="md:pl-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <CardTitle className="text-xl">{exp.position}</CardTitle>
                    <CardDescription className="text-lg font-medium text-primary">{exp.company}</CardDescription>
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">{exp.duration}</div>
                </div>
              </CardHeader>
              <CardContent className="md:pl-8">
                <p className="text-muted-foreground mb-4 text-pretty">{exp.description}</p>
                <div className="space-y-2">
                  <h4 className="font-medium">Key Achievements:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
