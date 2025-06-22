import React from "react";
import "./App.css";
const App = () => {
  return (
    <div className="app">
      <div className="logo-box">
        <img src="./twitter.png" alt="logo" className="logo" />
        <h2>Sign In to Twitter</h2>
        <button>
          <img src="./google.png" alt="google" />
          Sign In with Google
        </button>
        <button>
          <img src="./apple-logo.png" alt="google" />
          Sign In with Apple
        </button>
        <hr />
        <span>OR</span>

        <input type="text" placeholder="Phone email or Username" />

        <form action="">
          <button
            style={{
              fontWeight: "900",
              fontSize: "18px",
              background: "black",
              color: "white",
            }}
          >
            Next
          </button>
          <button
            style={{
              fontWeight: "600",

            }}
          >
            Forget Password
          </button>
          <p>
            Don't Have an account{" "}
            <span
              style={{
                display: "inline",
                fontWeight: "bold",
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              Sign up
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default App;
