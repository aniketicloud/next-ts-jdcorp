import Hero from "@/components/hero";
import reliabilityImg from "@/public/reliability.jpg";

export default function ReliabilityPage() {
  return (
    <Hero
      imgAlt="welding"
      imgData={reliabilityImg}
      title="Super high reliability hosting"
    />
  );
}