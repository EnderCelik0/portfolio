import HeadingChip from "./ui/heading-chip";
import { motion } from "framer-motion";

export default function WorkExperience() {
  return (
    <div className="flex flex-col gap-6">
      <HeadingChip textColor="text-primary" bgColor="bg-primary/10">
        Work Experience
      </HeadingChip>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {workExperience.map((experience, index) => (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.3 }}
            className={`flex flex-col gap-4 rounded-xl border border-primary p-4 ${
              experience.isCurrent ? "" : ""
            }`}
            key={index}
          >
            <div className="flex flex-col items-center justify-between md:justify-between lg:flex-row">
              <h3 className="max-w-64 truncate text-lg font-bold text-foreground">
                {experience.title}
              </h3>
              <p className="text-sm font-bold text-muted-foreground">
                {experience.company} ({experience.date})
              </p>
            </div>
            <p className="text-sm text-muted-foreground">
              {experience.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

const workExperience = [
  {
    title: "Intern Software Developer",
    company: "Codeo",
    date: "June 2023 - Oct 2023",
    isCurrent: false,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
  {
    title: "Part-time Software Developer",
    company: "Codeo",
    date: "Oct 2023 - Feb 2024",
    isCurrent: false,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
  {
    title: "Software Developer",
    company: "Codeo",
    date: "Feb 2024 - Current ",
    isCurrent: true,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
];
