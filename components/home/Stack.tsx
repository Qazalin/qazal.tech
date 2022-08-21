export const Stack = () => {
  const techStack = [
    "NextJs",
    "React",
    "TailwindCss",
    "Solidity",
    "GoLang",
    "Python",
    "Prisma",
    "TypeScript",
    "GraphQl",
  ];
  return (
    <>
      <h3>Tech Stack</h3>
      <p>
        always changing, I'm constantly looking for a balance of cutting-edge
        and established technologies
      </p>
      {techStack.map((tech, i) => (
        <button key={`tech-${i}`} className="btn btn-lg mx-2">
          {tech}
        </button>
      ))}
    </>
  );
};
