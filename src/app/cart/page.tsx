"use client";

import { useRouter } from "next/navigation";

const Checkout = () => {
  const items = [1, 2, 3];
  const router = useRouter();

  const checkout = () => {
    // TODO : Melakukan proses checkout ke API

    router.push("/checkout");
  };

  return (
    <>
      <section className="mx-4 grid grid-cols-12 gap-4">
        <div className="col-span-12">
          <h1 className="font-bold text-2xl mb-4">Keranjang</h1>
        </div>
        <div className="col-span-12 lg:col-span-8">
          <div className="border px-4 py-2 shadow-md flex justify-between">
            <div>
              {" "}
              <div className="flex gap-2">
                <input type="checkbox" name="" id="semua" />
                <label htmlFor="semua">Semua</label>
              </div>
            </div>
            <div>
              <button className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6 text-gray-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
                    clipRule="evenodd"
                  />
                </svg>
                Hapus
              </button>
            </div>
          </div>

          <div className="border px-4 py-4 shadow-md">
            {items.map((item, index) => (
              <div
                key={index}
                className="flex lg:flex-row flex-wrap justify-between mb-4 gap-4 items-center"
              >
                <div>
                  <div className="flex gap-2">
                    <input type="checkbox" name="" id={`buku-${index}`} />
                    <label htmlFor={`buku-${index}`} className="flex gap-2">
                      <img
                        className="w-12"
                        src="https://cdn.gramedia.com/uploads/picture_meta/2023/2/22/syzbvnjxkwe8fxbobfqzjb.jpeg"
                        alt=""
                      />
                      <div>
                        <h2>The Maxwell Daily Reader</h2>
                        <span className="font-bold">Rp 99.000</span>
                      </div>
                    </label>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-6 text-gray-500"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>

                  <div className="flex items-center gap-4">
                    <button className="w-8 h-8 rounded-full border shadow-sm">
                      +
                    </button>
                    <span>1</span>
                    <button className="w-8 h-8 rounded-full border shadow-sm">
                      -
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-12 lg:col-span-4">
          <div className="border p-4 shadow-md">
            <h2 className="font-bold">Ringkasan keranjang</h2>

            <div className="flex justify-between">
              <span>Total Harga (2 Barang) </span>
              <span>Rp270.000</span>
            </div>

            <button
              type="button"
              className="mt-8 bg-indigo-500 text-white font-bold px-4 py-2 w-full rounded-md hover:bg-indigo-700"
              onClick={checkout}
            >
              Checkout
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Checkout;
