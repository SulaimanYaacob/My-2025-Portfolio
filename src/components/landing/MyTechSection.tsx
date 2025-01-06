const myTech = [
  {
    id: 0,
    name: "React",
    icon: "",
  },
  {
    id: 1,
    name: "NextJS",
    icon: "",
  },
  {
    id: 2,
    name: "TailwindCSS",
    icon: "",
  },
  {
    id: 3,
    name: "Typescript",
    icon: "",
  },
];

export default function MyTechSection() {
  return (
    <section className="flex h-screen w-full flex-col items-center justify-center gap-8">
      <h1>MyTechSection</h1>
      <div>
        {myTech.map((tech) => (
          <div key={tech.id} className="flex gap-4">
            {/* <Image src={tech.icon} alt={tech.name} width={36} height={36} /> */}
            <ul>
              <li>{tech.name}</li>
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
