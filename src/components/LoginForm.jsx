import React from "react";
import { auth } from "../firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
      alert("Login berhasil!");
      navigate("/dashboard");
    } catch (error) {
      alert("Gagal login: " + error.message);
    }
  };

  return (
    <div className="text-center">
      <NavLink to="/login">
        <Button variant="outline-dark rounded-1 me-2">Daftar</Button>
      </NavLink>
      <NavLink to="/login">
        <Button variant="dark">Masuk</Button>
      </NavLink>
      <button onClick={handleGoogleLogin}>Login dengan Google</button>
    </div>
  );
};

export default LoginForm;
