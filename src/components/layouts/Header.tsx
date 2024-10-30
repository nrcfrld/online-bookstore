"use client";

import Link from "next/link";
import { useState } from "react";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <header className="px-4 bg-white dark:bg-gray-900 py-4 fixed w-full shadow-sm">
      <div className="flex justify-between items-center">
        <h1>
          <Link className="text-lg font-bold" href={"/"}>
            MyBookstore
          </Link>
        </h1>
        <div>
          {isLogin && (
            <>
              <Popover className="relative">
                <PopoverButton className="px-4 py-2 outline-none hover:text-indigo-500">
                  Hi, John Doe
                </PopoverButton>
                <PopoverPanel
                  anchor="bottom"
                  className="flex flex-col bg-white py-4 px-3 rounded-lg w-52 border mt-3 shadow-sm"
                >
                  <Link
                    href="/cart"
                    className="py-4 px-4 hover:bg-slate-100 rounded-lg"
                  >
                    Lihat Keranjang
                  </Link>
                  <a
                    href="/engagement"
                    className="py-4 px-4 hover:bg-slate-100"
                  >
                    Riwayat Order
                  </a>
                </PopoverPanel>
              </Popover>
            </>
          )}

          {!isLogin && (
            <>
              <Link
                className="bg-indigo-500 text-white font-bold px-4 py-2 rounded-md hover:bg-indigo-700"
                href={"/login"}
              >
                Masuk
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
