import { motion } from "framer-motion";
import { type Project } from "../WorkExperience";

export type ExperienceCardProps = {
  experience: {
    title: string;
    company: string;
    date: string;
    isCurrent: boolean;
    projects: Project[];
  };
  index: number;
};

export default function ExperienceCard({
  experience,
  index,
}: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.3 }}
      className={`flex flex-col gap-4 rounded-xl border border-primary p-4 ${
        experience.isCurrent ? "border-2" : "" }`}
    >
      <div className="flex flex-col items-center justify-between sm:flex-row sm:justify-between">
        <h3 className="text-xl font-bold text-foreground">
          {experience.title}
        </h3>
        <p className="font-bold text-muted-foreground">
          {experience.company} ({experience.date})
        </p>
      </div>

      <div className="flex flex-col gap-6">
        {experience.projects.map((project, projectIndex) => (
          <div
            key={projectIndex}
            className="flex flex-col gap-3 rounded-lg bg-muted/30 p-4"
          >
            <div className="space-y-3">
              <h4 className="text-md font-semibold text-foreground">
                {project.title}
              </h4>
              {project.technologies && (
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map(
                    (tech: string, techIndex: number) => (
                      <span
                        key={techIndex}
                        className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                      >
                        {tech}
                      </span>
                    ),
                  )}
                </div>
              )}
            </div>
            <p className="text-base leading-relaxed text-muted-foreground">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
