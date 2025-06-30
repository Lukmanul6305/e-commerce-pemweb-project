import React from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  function handleGoogleLogin(){
    alert("anda login")
  }

  return (
    <div className="text-center">
      <NavLink to="/login">
        <Button variant="outline-dark rounded-1 me-2">Daftar</Button>
      </NavLink>
      <NavLink to="/login">
        <Button variant="dark">Masuk</Button>
      </NavLink>
      <button onClick={handleGoogleLogin()}>Login dengan Google</button>
    </div>
  );
};

export default LoginForm;
