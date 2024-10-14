import logo from "./logo.svg";
import "./App.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import LoginPage from "./googleAuthentication/LoginPage";
import Weather from "./Weather";

function App() {
  return (
    <GoogleOAuthProvider clientId="115267782966-7esqoi7l9oleto8u32jk5gvk61v8rmbj.apps.googleusercontent.com">
      <LoginPage />
      <Weather />
    </GoogleOAuthProvider>
  );
}

export default App;
