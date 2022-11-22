import { useRef, useContext } from "react";
import "./login.css";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import {logo} from "../../assets/images/index"
import TopHeader from "../../components/topHeader/TopHeader"
import Footer from "../../components/footer/Footer"

export default function Login() {
  const phone = useRef();
  const password = useRef();
  const { dispatch } = useContext(AuthContext);

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", {
        phone: phone.current.value,
        password: password.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err });
    }
  };
  return (
    <div className="login">
      <div className="backgroundCus">
        <TopHeader />
      </div>
      <div className="loginWrapper">
        <div className="loginLeft">
          <img className="loginLogo" src={logo} alt="" />
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              ref={phone}
              required
              placeholder="Số điện thoại"
              className="loginInput"
            />
            <input
              ref={password}
              type="password"
              minLength="6"
              required
              placeholder="Mật khẩu"
              className="loginInput"
            />
            <button className="loginButton" type="submit">
              Đăng nhập
            </button>
            <span className="loginForgot">Quên mật khẩu ?</span>
            <button className="loginRegisterButton">Tạo tài khoản mới</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
