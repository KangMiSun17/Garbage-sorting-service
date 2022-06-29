import { useState } from "react";
import { useNavigate } from "react-router";
import { useSetRecoilState } from "recoil";
import { postData } from "../../api";
import { loginState, userState } from "../../stores/atoms";
import { TitleText } from "../../styles/TextStyle";
import {
  LoginInput,
  RightContainer,
  RegisterButton,
  LoginButton,
} from "../../styles/userStyles/users";
import { customToastify } from "../../components/customToastify";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const setIsLogin = useSetRecoilState(loginState);
  const setUserState = useSetRecoilState(userState);
  const navigate = useNavigate();

  const loginUser = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const res = await postData("users/login", { email, password });
      setUserState(res.data);
      setIsLogin(true);
      sessionStorage.setItem("token", res.data.token);
      navigate("/");
    } catch {
      customToastify("error", "아이디와 비밀번호를 확인해주세요.");
    }
  };

  return (
    <RightContainer onSubmit={loginUser}>
      <TitleText>로그인</TitleText>
      <LoginInput
        placeholder="이메일"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></LoginInput>
      <LoginInput
        placeholder="비밀번호"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></LoginInput>
      <LoginButton onClick={loginUser}>로그인</LoginButton>
      <RegisterButton onClick={() => navigate("/users/register")}>
        회원가입
      </RegisterButton>
    </RightContainer>
  );
}

export default Login;
