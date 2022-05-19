import React, { useContext, useState } from "react";
import { auth, loginUser } from "../../data/Firebase";

import { BtnPrimary } from "../../styles/Buttons";
import { TraditionalInput } from "../../styles/Inputs";
import { TextBtn1, Title3 } from "../../styles/Typography";

import { ReactComponent as Loader1 } from "../../assets/svgs/loader1.svg";
import ThemeAuth from "../../themes/ThemeAuth";
import { LoginBox } from "../../styles/Box";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { setToken, token } = useContext(AuthContext);

  const handleLogin = () => {
    if (!isLoading && auth && email && password) {
      setIsLoading(true);

      loginUser(auth, email, password)
        .then((res) => {
          setIsLoading(false);
          setToken(res._tokenResponse.refreshToken);
          navigate("/");
        })
        .catch(() => {
          setIsLoading(false);
        });
    }
  };

  return !token ? (
    <ThemeAuth>
      <LoginBox>
        <Title3>Login</Title3>
        <TraditionalInput
          type="text"
          placeholder="Digite seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TraditionalInput
          type="password"
          placeholder="Digite sua senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <BtnPrimary onClick={handleLogin}>
          {!isLoading ? <TextBtn1>Entrar</TextBtn1> : <Loader1 />}
        </BtnPrimary>
        <Link to="/register">Cadastre-se</Link>
      </LoginBox>
    </ThemeAuth>
  ) : (
    <Navigate to="/" />
  );
};

export default Login;
