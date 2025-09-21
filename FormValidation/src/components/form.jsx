import React, { useState } from "react";

function RegisterForm() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    gender: "",
    terms: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validate = () => {
    let newErrors = {};

    // Full Name validation
    if (!form.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    } else {
      const words = form.fullName.trim().split(" ");
      const firstChar = form.fullName.trim().charAt(0);

      if (firstChar !== firstChar.toUpperCase()) {
        newErrors.fullName = "Name must start with a capital letter";
      } else if (words.length < 2) {
        newErrors.fullName = "Name must include surname";
      }
    }

    if (!form.email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Invalid email address";
    }

    if (!form.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(form.phone)) {
      newErrors.phone = "Must be 10 digits";
    }

    if (!form.password) {
      newErrors.password = "Password is required";
    } else if (form.password.length < 6) {
      newErrors.password = "Min 6 characters required";
    } else {
      if (!/[A-Z]/.test(form.password)) {
        newErrors.password = "At least one uppercase letter required";
      }
      if (!/\d/.test(form.password)) {
        newErrors.password = "At least one number required";
      }
      if (!/[!@#$%^&*]/.test(form.password)) {
        newErrors.password = "At least one special character required";
      }
    }

    if (!form.confirmPassword) {
      newErrors.confirmPassword = "Confirm password required";
    } else if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!form.gender) {
      newErrors.gender = "Please select your gender";
    }

    if (!form.terms) {
      newErrors.terms = "You must accept the terms";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form Data:", form);
      alert("Form submitted successfully!");
      setForm({
        fullName: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
        gender: "",
        terms: false,
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 to-blue-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md border border-gray-200"
      >
        <h2 className="text-3xl font-extrabold mb-6 text-center text-blue-600">
          Create Account
        </h2>

        {/* Full Name */}
        <div className="mb-5">
          <label className="block text-gray-700 mb-1 font-medium">
            Full Name
          </label>
          <input
            type="text"
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            placeholder="John Doe"
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
              errors.fullName
                ? "border-red-500 focus:ring-red-400"
                : "border-gray-300 focus:ring-blue-400"
            }`}
          />
          {errors.fullName && (
            <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
          )}
        </div>

        {/* Email */}
        <div className="mb-5">
          <label className="block text-gray-700 mb-1 font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="example@email.com"
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
              errors.email
                ? "border-red-500 focus:ring-red-400"
                : "border-gray-300 focus:ring-blue-400"
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        {/* Phone */}
        <div className="mb-5">
          <label className="block text-gray-700 mb-1 font-medium">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="9876543210"
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
              errors.phone
                ? "border-red-500 focus:ring-red-400"
                : "border-gray-300 focus:ring-blue-400"
            }`}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
          )}
        </div>

        {/* Password */}
        <div className="mb-5">
          <label className="block text-gray-700 mb-1 font-medium">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="••••••"
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
              errors.password
                ? "border-red-500 focus:ring-red-400"
                : "border-gray-300 focus:ring-blue-400"
            }`}
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password}</p>
          )}
        </div>

        {/* Confirm Password */}
        <div className="mb-5">
          <label className="block text-gray-700 mb-1 font-medium">
            Confirm Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            placeholder="••••••"
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
              errors.confirmPassword
                ? "border-red-500 focus:ring-red-400"
                : "border-gray-300 focus:ring-blue-400"
            }`}
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm mt-1">
              {errors.confirmPassword}
            </p>
          )}
        </div>

        {/* Gender */}
        <div className="mb-5">
          <label className="block text-gray-700 mb-1 font-medium">Gender</label>
          <select
            name="gender"
            value={form.gender}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
              errors.gender
                ? "border-red-500 focus:ring-red-400"
                : "border-gray-300 focus:ring-blue-400"
            }`}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {errors.gender && (
            <p className="text-red-500 text-sm mt-1">{errors.gender}</p>
          )}
        </div>

        {/* Terms */}
        <div className="mb-6 flex items-center">
          <input
            type="checkbox"
            name="terms"
            checked={form.terms}
            onChange={handleChange}
            className="mr-2 h-4 w-4 accent-blue-500"
          />
          <label className="text-gray-700 text-sm">
            I agree to the{" "}
            <a href="#" className="text-blue-500 hover:underline">
              terms & conditions
            </a>
          </label>
        </div>
        {errors.terms && (
          <p className="text-red-500 text-sm mb-4">{errors.terms}</p>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold shadow-md hover:bg-blue-600 transition duration-200"
        >
          Register
        </button>

        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Login
          </a>
        </p>
      </form>
    </div>
  );
}

export default RegisterForm;
