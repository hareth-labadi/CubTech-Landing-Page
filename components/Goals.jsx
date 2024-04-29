import Image from "next/image";
import React from "react";

const goals = [
  "Help students step into the Tech World.",
  "Enhance your programming and research skills and improve your problem-solving competence.",
  "Keep up with the latest technologies and the most recent innovations in the IT field."
];

const Goals = () => {
  return (
    <section className="flex flex-wrap lg:flex-row justify-around gap-12 xl:gap-0 items-center bg-silver mb-10">
      <Image src={"/Goal.png"} alt="Goals" width={400} height={280} />
      <div className="max-w-[600px]">
        <h2 className="text-primary mb-4 px-4">
          Our Goals
        </h2>
        <ul className="text-xl text-primary self-start list-inside">
          {goals.map((goal, index) => (
            <li className="relative circle-check custom-list mb-2 px-4" key={goal}>
              • {goal}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Goals;
