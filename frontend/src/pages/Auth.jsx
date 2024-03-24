import React from "react";
import AuthForm from "../components/AuthForm";
import { json, redirect } from "react-router-dom";

const Auth = () => {
  return (
    <section>
      <AuthForm />
    </section>
  );
};

export default Auth;

export const action = async ({ request }) => {
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get("mode") || "login";
  const data = await request.formData();

  if (mode !== "signup" && mode !== "login") {
    throw json(
      {
        message: "Query Not Found",
        messageText: "The query you are looking for does not exist.",
      },
      { status: 404, statusText: "Back to SignUp" }
    );
  }

  const authData = {
    email: data.get("email"),
    password: data.get("password"),
  };
  const response = await fetch(`http://localhost:7070/${mode}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(authData),
  });

  if (response.status === 422 || response.status === 401) {
    return response;
  }

  if (!response.ok) {
    throw json(
      {
        message: "Auth Fail",
        messageText: "Something went wrong!",
      },
      { status: 404, statusText: "Back to SignUp" }
    );
  }

  const resData = await response.json();
  const token = resData.token;

  const expDate = new Date();
  expDate.setHours(expDate.getHours() + 1);

  localStorage.setItem("token", token);
  localStorage.setItem("exp", expDate.toISOString());

  return redirect("/");
};
