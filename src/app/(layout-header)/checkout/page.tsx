const page = () => {
  return (
    <section className="mx-4">
      <div className="border shadow-sm bg-white py-12 text-center max-w-4xl mx-auto">
        <span className="text-lg">INV-22990991</span>
        <h1 className="text-center font-bold text-4xl">Lakukan Pembayaran</h1>

        <p className="mt-4 px-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
          similique in vitae totam deleniti perspiciatis enim asperiores alias,
          provident, vel dolores facere doloremque aspernatur at voluptatibus
          sunt numquam ab est?
        </p>

        <span className="font-bold text-3xl mt-8 inline-block text-red-600">
          Rp 150.000
        </span>

        <div className="mt-8">
          <div>
            <input type="file" />
            <button
              type="button"
              className="bg-indigo-500 text-white font-bold px-4 py-2 rounded-md hover:bg-indigo-700"
            >
              Upload
            </button>
          </div>
          <label htmlFor="">
            Silahkan upload file dalam bentuk jpg,png,pdf
          </label>
        </div>
      </div>
    </section>
  );
};

export default page;
