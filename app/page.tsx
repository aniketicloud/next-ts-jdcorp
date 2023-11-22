import Hero from "@/components/hero";
import homeImg from "@/public/home.jpg";
export default function Home() {
  return (
    <Hero
      imgAlt="tractor factory"
      imgData={homeImg}
      title="Professional Cloud Hosting"
    />
  );
}
