import HeadingChip from "./ui/heading-chip";
import ExperienceCard from "./ui/experience-card";

export type Experience = {
  title: string;
  company: string;
  date: string;
  isCurrent: boolean;
  projects: Project[];
};
export type Project = {
  title: string;
  technologies: string[];
  description: string;
};

export default function WorkExperience() {
  return (
    <div className="flex flex-col gap-6">
      <HeadingChip textColor="text-primary" bgColor="bg-primary/10">
        Work Experience
      </HeadingChip>
      <div className="grid grid-cols-1 gap-6">
        {workExperience.map((experience: Experience, index: number) => (
          <ExperienceCard key={index} experience={experience} index={index} />
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
    projects: [
      {
        title: "Static 3D Roulette Configurator",
        technologies: [
          "React",
          "Vanilla CSS",
          "React Router",
          "react-unity-webGL",
        ],
        description: (
          <ul className="list-disc pl-2 md:pl-5 space-y-2">
            <li>
              Developed a static responsive UI for a 3D roulette configurator
              based on customer requirements.
            </li>
            <li>
              Integrated Unity built 3D roulette model with React using
              unity-webgl library. Added a material change feature with the
              given materials.
            </li>
            <li>Camera angle change feature with the given cameras.</li>
            <li>High Quality screenshots of product.</li>
            <li>
              Link sharing functionality allowing users to share the
              configurator with others.
            </li>
            <li>
              Email your custom configurator to the customer with the given
              email template (EmailJS).
            </li>
          </ul>
        ),
      },
      {
        title: "Static POC Configurator",
        technologies: [
          "React",
          "Vanilla CSS",
          "React Router",
          "react-unity-webGL",
        ],
        description: (
          <ul className="list-disc pl-2 md:pl-5 space-y-2">
            <li>
              I developed the static roulette configurator as a base template
              for the POC configurators.
            </li>
            <li>
              If the 3D model and option thumbnails are ready we can use this
              project to create a configurator POC in a 1 to 2 days depending
              extra functionalities that might your configurator need.
            </li>
          </ul>
        ),
      },
    ],
  },

  {
    title: "Software Developer",
    company: "Codeo",
    date: "Feb 2024 - Current",
    isCurrent: true,
    projects: [
      {
        title: "Configurator Dashboard",
        technologies: ["React", "Tailwind", "TypeScript", "React Query"],
        description: (
          <ul className="list-disc pl-2 md:pl-5 space-y-2">
            <li>
              Built an administrative dashboard for managing multiple
              configurator products.
            </li>
            <li>
              User can add multiple configurators, edit them, delete them, add
              features in their products, add new materials, add new 3D models
              to products, add cameras, add dynamic rules and actions and much
              more.
            </li>
            <li>
              User can chose options thumbnail for every option. Select if
              feature single or multiple select. Select feature thumbnail size
              (2x1, 1x1).
            </li>
            <li>
              Real-time updates using React Query for efficient data fetching
              and caching.
            </li>
            <li>
              Dynamic nested rule builder and action adding with the given
              options.
            </li>
          </ul>
        ),
      },

      {
        title: "Dynamic 3D Roulette Configurator",
        technologies: [
          "React",
          "react-unity-webGL",
          "Vanilla CSS",
          "React Router",
        ],
        description: (
          <ul className="list-disc pl-0 md:pl-5 space-y-2">
            <li>
              While i was working on the configurator dashboard, i also worked
              on the dynamic 3D roulette configurator.
            </li>
            <li>
              At first i created the roulette configurator on the dashboard.
            </li>
            <li>
              Then i added features, feature option groups and feature options
              along with option thumbnails.
            </li>
            <li>
              Then i added dynamic nested rules and actions with the given
              options.User can select which feature, option or option groups
              hide or disable when the rule triggers.
            </li>
            <li>
              After finishing the dashboard i implemented the API calls in
              frontend to display the data in the configurator.
            </li>
          </ul>
        ),
      },
    ],
  },
];
