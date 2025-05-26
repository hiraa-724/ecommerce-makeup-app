import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useFormik } from "formik";
import * as Yup from "yup";

function Contact() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      subject: Yup.string().required("Subject is required"),
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: (values) => {
      console.log("Form Data:", values);
      alert("Message sent!");
    },
  });
  return (
    <>
      <Navbar />

      <div className="max-w-2xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>
        <form onSubmit={formik.handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block mb-1 font-semibold">Name</label>
            <input
              type="text"
              name="name"
              className="w-full border border-gray-300 px-3 py-2 rounded"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name && (
              <p className="text-red-500 text-sm">{formik.errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 font-semibold">Email</label>
            <input
              type="email"
              name="email"
              className="w-full border border-gray-300 px-3 py-2 rounded"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-500 text-sm">{formik.errors.email}</p>
            )}
          </div>

          {/* Subject */}
          <div>
            <label className="block mb-1 font-semibold">Subject</label>
            <input
              type="text"
              name="subject"
              className="w-full border border-gray-300 px-3 py-2 rounded"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.subject}
            />
            {formik.touched.subject && formik.errors.subject && (
              <p className="text-red-500 text-sm">{formik.errors.subject}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <label className="block mb-1 font-semibold">Message</label>
            <textarea
              name="message"
              className="w-full border border-gray-300 px-3 py-2 rounded h-32"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
            ></textarea>
            {formik.touched.message && formik.errors.message && (
              <p className="text-red-500 text-sm">{formik.errors.message}</p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
          >
            Send Message
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
