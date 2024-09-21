import Link from "next/link";

const Header = () => {
  return (
    <header className="px-4 bg-white py-4">
      <div className="flex justify-between">
        <h1>
          <Link className="text-lg font-bold" href={"/"}>
            MyBookstore
          </Link>
        </h1>
        <div>
          <Link
            className="bg-indigo-500 text-white font-bold px-4 py-2 rounded-md hover:bg-indigo-700"
            href={"/login"}
          >
            Masuk
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
