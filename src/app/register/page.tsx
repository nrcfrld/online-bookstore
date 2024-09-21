import Link from "next/link";

const Register = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <div className="border w-3/4 lg:w-1/2 rounded-lg py-10 px-20 bg-white shadow-sm">
        <h1 className="text-center text-4xl font-bold mb-4">Sign Up</h1>
        <p className="text-center">
          sudah punya akun ?{" "}
          <Link className="text-indigo-900" href="/login">
            silahkan login
          </Link>
        </p>

        <form action="">
          <div className="mt-8 flex flex-col gap-4">
            <div>
              <label className="block mb-2" htmlFor="fullname">
                Fullname
              </label>
              <input
                className="block border rounded-sm w-full bg-gray-50 px-3 py-2 text-sm"
                type="text"
              />
            </div>

            <div>
              <label className="block mb-2" htmlFor="username">
                Username
              </label>
              <input
                className="block border rounded-sm w-full bg-gray-50 px-3 py-2 text-sm"
                type="text"
              />
            </div>

            <div>
              <label className="block mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="block border rounded-sm w-full bg-gray-50 px-3 py-2 text-sm"
                type="password"
              />
            </div>

            <div>
              <label className="block mb-2" htmlFor="password">
                Confirmation Password
              </label>
              <input
                className="block border rounded-sm w-full bg-gray-50 px-3 py-2 text-sm"
                type="password"
              />
            </div>

            <button
              className="bg-indigo-600 text-white font-bold px-4 py-2 w-full rounded-md hover:bg-indigo-700"
              type="submit"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
