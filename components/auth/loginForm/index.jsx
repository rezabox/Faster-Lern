"use client";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({});
  const formSubmiter = () => {
    const formData = {
      email: watch("email"),
      password: watch("password"),
    };
    console.log(formData);
  };

  return (
    <section className="container mx-auto flex justify-center items-center">
      <form
        onSubmit={handleSubmit(formSubmiter)}
        className="flex flex-col gap-8 m-12 w-[30rem] bg-zinc-100 p-12 rounded-md"
      >
        <div className="flex justify-center items-center gap-6">
          <h1 className="text-lg text-center text-blue-400">ورود به حساب</h1>
          <Link
            href={"/register"}
            className="bg-blue-500 text-white px-2 py-1 rounded-md"
          >
            ثبت نام در سایت
          </Link>
        </div>
        <div className="flex flex-col gap-1">
          <input
            type="email"
            placeholder="ایمیل"
            autoComplete="off"
            className="p-2 w-full rounded-md outline-none border-zinc-400 border-2 focus:border-orange-400 transition-all duration-200"
            {...register("email", {
              required: true,
              minLength: 11,
              pattern:
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            })}
          />
          {errors.email && errors.email.type == "required" && (
            <div className="text-rose-500 text-sm">ایمیل را وارد کنید .</div>
          )}
          {errors.email && errors.email.type == "pattern" && (
            <div className="text-rose-500 text-sm">فرمت ایمیل صحیح نیست .</div>
          )}
          {errors.email && errors.email.type == "minLength" && (
            <div className="text-rose-500 text-sm">
              تعداد کارکتر های ایمیل کم است .
            </div>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <input
            type="password"
            placeholder="رمز عبور"
            autoComplete="off"
            className="p-2 w-full rounded-md outline-none border-zinc-400 border-2 focus:border-orange-400 transition-all duration-200"
            {...register("password", {
              required: true,
              maxLength: 20,
              minLength: 5,
            })}
          />
          {errors.password && errors.password.type == "required" && (
            <div className="text-rose-500 text-sm">
              رمز عبور وارد نشده است .
            </div>
          )}
          {errors.password && errors.password.type == "maxLength" && (
            <div className="text-rose-500 text-sm">
              رمز عبور باید کمتر از 20 کارکتر باشد .
            </div>
          )}
          {errors.password && errors.password.type == "minLength" && (
            <div className="text-rose-500 text-sm">
              رمز عبور باید بیشتر از 6 کارکتر باشد .
            </div>
          )}
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white w-full rounded-md p-2 transition-all duration-500 hover:bg-blue-600"
        >
          ورود به حساب
        </button>
      </form>
    </section>
  );
};

export default LoginForm;
