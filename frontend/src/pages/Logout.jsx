import { redirect } from "react-router-dom";

export const loader = () => {
  const logoutConfirm = window.confirm("Are you sure! want to logout now.");
  if (logoutConfirm) {
    localStorage.removeItem("token");
    localStorage.removeItem("exp");
    return redirect("/auth?mode=signup");
  } else {
    return redirect("/");
  }
};
