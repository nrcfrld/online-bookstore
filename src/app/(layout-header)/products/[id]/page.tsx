import Header from "@/components/layouts/Header";
import ProductCard from "@/components/shared/ProductCard";

const DetailProduct = ({ params }: { params: { id: string | number } }) => {
  return (
    <>
      <section className="grid grid-cols-12 px-4 gap-8">
        <div className="col-span-12 lg:col-span-4">
          <img
            className="w-full"
            src="https://cdn.gramedia.com/uploads/picture_meta/2023/2/22/syzbvnjxkwe8fxbobfqzjb.jpeg"
            alt=""
          />
        </div>
        <div className="col-span-12 lg:col-span-8">
          <span>John C. Maxwell</span>
          <h1 className="text-6xl font-bold mb-4">The Maxwell Daily Reader</h1>
          <span className="font-bold text-2xl">Rp 99.000</span>

          <h2 className="mt-8 font-bold text-lg">Deskripsi</h2>
          <p className="text-lg text-gray-700 mt-4">
            Apa kunci menuju keberhasilan? Apa yang membedakan antara orang
            dengan banyak pencapaian dan orang dengan pencapaian ala kadarnya
            saja? Apa yang mereka kerjakan setiap hari? Rahasianya ada di dalam
            buku ini. The Maxwell Daily Reader dirancang untuk membantu Anda
            meningkatkan diri setiap hari sepanjang tahun. Setiap halamannya
            memuat ringkasan dari salah satu buku Maxwell untuk menyemangati,
            mengajar, menantang, atau membantu Anda bertumbuh.{" "}
          </p>

          <button
            type="button"
            className="fixed bottom-4 right-4 flex gap-2 items-center bg-indigo-500 text-white font-bold px-4 py-4 rounded-md hover:bg-indigo-700 mt-12"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
                clipRule="evenodd"
              />
            </svg>
            Keranjang
          </button>
        </div>
      </section>

      <section className="px-4 mt-16">
        <h2 className="text-2xl font-bold mb-6">Lihat buku lainnya</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {/* <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard> */}
        </div>
      </section>
    </>
  );
};

export default DetailProduct;
