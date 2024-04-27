
import Talks from "@/components/Talks";
import Events from "@/components/Events";
import Hero from "@/components/Hero";
import Goals from "@/components/Goals";

export default function Home() {
  return (
    <div>
      <Hero />
      <Talks />
      <Goals />
      <Events />
    </div>
  );
}
