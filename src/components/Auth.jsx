import { useState } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
const Auth = ({ setUser }) => {
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let userCredential;
      if (isLogin) {
        userCredential = await signInWithEmailAndPassword(auth, email, pass);
      } else {
        userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          pass
        );
      }
      setUser(userCredential.user);
      navigate("/posts");
    } catch (error) {
      console.error("server problem", error);
    }
  };
  return (
    <div className="auth">
      <h2>{isLogin ? "Войти" : "Регистрация"}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
          required
        />
        <input
          type="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          placeholder="password"
          required
        />
        <button type="submit" className="enter">
          <div className="cloudEnt" id="cloudEnt">
            <div className="in_cloud">
              <div className="ball b1"></div>
              <div className="ball b2"></div>
              <div className="ball b3"></div>
              <div className="ball b4"></div>
              <div className="ball b5"></div>
            </div>
          </div>
          {isLogin ? "Войти" : "Зарегистрироваться"}
        </button>
      </form>
    </div>
  );
};
export default Auth;
