"use client";

import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Link from "next/link";
import { useState } from "react";
import * as Yup from "yup";

interface FormRegister {
  fullname: string;
  username: string;
  password: string;
  confirmation_password: string;
}

const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const validationSchema = Yup.object({
  fullname: Yup.string().required(),
  username: Yup.string().required().email(),
  password: Yup.string().required(),
  confirmation_password: Yup.string()
    .required()
    .oneOf([Yup.ref("password")], "Password must match"),
});

const Register = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupTitle, setPopupTitle] = useState("");
  const [popupDescription, setPopupDescription] = useState("");

  const initialValues = {
    fullname: "",
    username: "",
    password: "",
    confirmation_password: "",
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = async (values: FormRegister, { resetForm }: any) => {
    const data = {
      username: values.username,
      name: values.fullname,
      password: values.password,
    };

    const response = await fetch(`${API_URL}/api/auth/register`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const body = await response.json();

    if (response.status !== 201) {
      setShowPopup(true);
      setPopupTitle(body.message);
      setPopupDescription(body.errors[0].msg);
      return false;
    }

    setShowPopup(true);
    setPopupTitle(body.message);
    setPopupDescription("User registration success");
    resetForm(initialValues);
    return true;
  };

  return (
    <>
      <Dialog
        open={showPopup}
        onClose={() => setShowPopup(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="max-w-lg space-y-4 border bg-white p-12">
            <DialogTitle className="font-bold">{popupTitle}</DialogTitle>
            <Description>{popupDescription}</Description>
            <div className="flex gap-4">
              <button onClick={() => setShowPopup(false)}>Okay</button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
      <div className="flex justify-center items-center h-screen bg-gray-50">
        <div className="border w-3/4 lg:w-1/2 rounded-lg py-10 px-20 bg-white shadow-sm">
          <h1 className="text-center text-4xl font-bold mb-4">Sign Up</h1>
          <p className="text-center">
            sudah punya akun ?{" "}
            <Link className="text-indigo-900" href="/login">
              silahkan login
            </Link>
          </p>

          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          >
            {() => (
              <Form>
                <div className="mt-8 flex flex-col gap-4">
                  <div>
                    <label className="block mb-2" htmlFor="fullname">
                      Fullname
                    </label>
                    <Field
                      name="fullname"
                      className="block border rounded-sm w-full bg-gray-50 px-3 py-2 text-sm"
                      type="text"
                    />
                    <ErrorMessage
                      name="fullname"
                      className="text-red-500"
                      component={"div"}
                    />
                  </div>

                  <div>
                    <label className="block mb-2" htmlFor="username">
                      Username
                    </label>
                    <Field
                      name="username"
                      className="block border rounded-sm w-full bg-gray-50 px-3 py-2 text-sm"
                      type="text"
                    />
                    <ErrorMessage
                      name="username"
                      className="text-red-500"
                      component={"div"}
                    />
                  </div>

                  <div>
                    <label className="block mb-2" htmlFor="password">
                      Password
                    </label>
                    <Field
                      name="password"
                      className="block border rounded-sm w-full bg-gray-50 px-3 py-2 text-sm"
                      type="password"
                    />
                    <ErrorMessage
                      name="password"
                      className="text-red-500"
                      component={"div"}
                    />
                  </div>

                  <div>
                    <label className="block mb-2" htmlFor="password">
                      Confirmation Password
                    </label>
                    <Field
                      name="confirmation_password"
                      className="block border rounded-sm w-full bg-gray-50 px-3 py-2 text-sm"
                      type="password"
                    />
                    <ErrorMessage
                      name="confirmation_password"
                      className="text-red-500"
                      component={"div"}
                    />
                  </div>

                  <button
                    className="bg-indigo-500 text-white font-bold px-4 py-2 w-full rounded-md hover:bg-indigo-700"
                    type="submit"
                  >
                    Sign Up
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default Register;
