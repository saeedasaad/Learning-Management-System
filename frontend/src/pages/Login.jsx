import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../redux/authSlice";
import { loginUser } from "../utils/apis";
import { useNavigate } from "react-router-dom";
import FormLayout from "../components/common/FormLayout";
import InputField from "../components/common/InputField";
import Button from "../components/common/Button";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await loginUser({ email, password });

      localStorage.setItem("token", res.token);
      localStorage.setItem("user", JSON.stringify(res.user));

      dispatch(loginSuccess({ user: res.user, token: res.token }));

      if (res.user.role === "student") navigate("/student/dashboard");
      else if (res.user.role === "instructor") navigate("/instructor/dashboard");
      else if (res.user.role === "admin") navigate("/admin/dashboard");
    } catch (err) {
      alert(err.response?.data?.error || "Login failed");
    }
  };

  return (
    <FormLayout title="Login Page">
      <InputField label="Email" type="email" placeholder="Enter your email" value={email}
        onChange={(e) => setEmail(e.target.value)} icon="ri-mail-line"/>

      <InputField label="Password" type="password" placeholder="Enter your password" value={password}
        onChange={(e) => setPassword(e.target.value)} icon="ri-lock-line"/>

      <Button variant="formFull" type="submit" onClick={handleSubmit}> Login </Button>
    </FormLayout>
  );
}
