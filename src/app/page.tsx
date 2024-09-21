import Header from "@/components/layouts/Header";
import Hero from "@/components/partials/Hero";
import LatestProducts from "@/components/partials/LatestProducts";

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header></Header>
      <Hero></Hero>
      <LatestProducts></LatestProducts>
    </div>
  );
}
