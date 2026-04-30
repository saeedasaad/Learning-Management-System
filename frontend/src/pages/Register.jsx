import React, { useState } from "react";
import { registerUser } from "../utils/api";
import { useNavigate } from "react-router-dom";
import FormLayout from "../components/common/FormLayout";
import InputField from "../components/common/InputField";
import Button from "../components/common/Button";

export default function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await registerUser({ name, email, password });
      alert(res.message || "Registered successfully, please login");
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.error || "Registration failed");
    }
  };

  return (
    <FormLayout title="Register Page">
      <InputField label="Username" type="text" placeholder="Enter your username" value={name} 
      onChange={(e) => setName(e.target.value)} icon="ri-user-3-line"/>

      <InputField label="Email" type="email" placeholder="Enter your email" value={email} 
      onChange={(e) => setEmail(e.target.value)} icon="ri-mail-line"/>

      <InputField label="Password" type="password" placeholder="Enter your password" value={password} 
      onChange={(e) => setPassword(e.target.value)} icon="ri-lock-line"/>

      <Button variant="formFull" type="submit" onClick={handleSubmit}>
        Register
      </Button>
    </FormLayout>
  );
}