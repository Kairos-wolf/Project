import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Home/Header";
import Footer from "../Home/Footer";
import "./Auth.css";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    
    const loginRequest = { email, password };
    try {
      const response = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginRequest),
      });
      if (!response.ok) throw new Error("Login failed");
      const data = await response.json();
      localStorage.setItem("token", data.result);
      navigate("/home");
    } catch (error) {
      alert("Invalid credentials");
      console.error("Error:", error);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    
    const signupRequest = { username, email, password };
    try {
      const response = await fetch("http://localhost:8080/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(signupRequest),
      });
      if (!response.ok) throw new Error("Signup failed");
      alert("Account created successfully! Please log in.");
      setIsLogin(true);
    } catch (error) {
      alert("Signup failed");
      console.error("Error:", error);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-content">
        <div className="auth-box">
          <h2 className="auth-title">{isLogin ? "Welcome Back!" : "Create an Account"}</h2>

          <form className="auth-form" onSubmit={isLogin ? handleLogin : handleSignup}>
            {!isLogin && (
              <div>
                <label className="auth-label">Username</label>
                <input
                  type="text"
                  className="auth-input"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
            )}
            <div>
              <label className="auth-label">Email</label>
              <input
                type="email"
                className="auth-input"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="auth-label">Password</label>
              <input
                type="password"
                className="auth-input"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="auth-button">{isLogin ? "Login" : "Sign Up"}</button>
          </form>

          <p className="auth-toggle">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <button onClick={() => setIsLogin(!isLogin)}>
              {isLogin ? "Sign up" : "Login"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
