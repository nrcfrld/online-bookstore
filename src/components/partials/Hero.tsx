import Link from "next/link";

const Hero = () => {
  return (
    <div className="bg-gray-950 px-4 text-white py-16">
      <div>
        <h2 className="text-2xl font-bold mb-2">
          Selamat Datang di MyBookstore
        </h2>
        <p className="text-gray-300">
          jelajahi buku-buku original dengan harga terjangkau
        </p>
        <Link
          href="/"
          className="inline-block mt-4 bg-indigo-500 text-white font-bold px-4 py-2 rounded-md hover:bg-indigo-700"
        >
          Show More
        </Link>
      </div>
    </div>
  );
};

export default Hero;
