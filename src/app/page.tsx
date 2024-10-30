import Header from "@/components/layouts/Header";
import Hero from "@/components/partials/Hero";
import LatestProducts from "@/components/partials/LatestProducts";

export default function Home() {
  return (
    <>
      <Header />
      <div className="bg-gray-50 min-h-screen pt-28">
        <Hero></Hero>
        <LatestProducts></LatestProducts>
      </div>
    </>
  );
}
