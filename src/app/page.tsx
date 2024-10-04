import Hero from "@/components/partials/Hero";
import LatestProducts from "@/components/partials/LatestProducts";

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Hero></Hero>
      <LatestProducts></LatestProducts>
    </div>
  );
}
