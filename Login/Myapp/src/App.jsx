import React from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import './App.css'




const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    toast.success("Sign-up successful!");
    console.log("Form Data:", data);
  };

  return (
    <div
      style={{
        border: "2px solid black",
        padding: "20px",
        borderRadius: "10px",
        width: "300px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <h2 style={{ textAlign: "center" }}>Sign Up</h2>

      <form onSubmit={handleSubmit(onSubmit)} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <label style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          Name:
          <input {...register("name",{required:'name is requird'})} style={{ padding: "10px", borderRadius: "5px" }} type="text" />
          <p style={{ color: "red", fontSize: "12px" }}>{errors.name?.message}</p>
        </label>

        <label style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          Email:
          <input {...register("email",{required:'email is requird'})} style={{ padding: "10px", borderRadius: "5px" }} type="email" />
          <p style={{ color: "red", fontSize: "12px" }}>{errors.email?.message}</p>
        </label>

        <label style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          Phone:
          <input {...register("phone",{required:'phone num is required'})} style={{ padding: "10px", borderRadius: "5px" }} type="number" />
          <p style={{ color: "red", fontSize: "12px" }}>{errors.phone?.message}</p>
        </label>

        <label style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          Password:
          <input {...register("password",{required:'password is required'})} style={{ padding: "10px", borderRadius: "5px" }} type="password" />
          <p style={{ color: "red", fontSize: "12px" }}>{errors.password?.message}</p>
        </label>

        <label style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          Confirm Password:
          <input {...register("confirmPassword",{required:'confirmPassword is required'})} style={{ padding: "10px", borderRadius: "5px" }} type="password" />
          <p style={{ color: "red", fontSize: "12px" }}>{errors.confirmPassword?.message}</p>
        </label>

        <button type="submit" style={{ padding: "10px", borderRadius: "5px", background: "black", color: "white", cursor: "pointer" }}>
          Sign Up
        </button>
      </form>

      <ToastContainer />
    </div>
  );
};

export default SignupForm;
