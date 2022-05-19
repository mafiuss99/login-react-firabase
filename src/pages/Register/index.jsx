import React, { useContext, useState } from "react";
import { auth, createUser } from "../../data/Firebase";

import { BtnPrimary } from "../../styles/Buttons";
import { TraditionalInput } from "../../styles/Inputs";
import { TextBtn1, Title3 } from "../../styles/Typography";

import { ReactComponent as Loader1 } from "../../assets/svgs/loader1.svg";
import ThemeAuth from "../../themes/ThemeAuth";
import { LoginBox } from "../../styles/Box";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

const Register = () => {
  const navigate = useNavigate();
  const { setToken, token } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = () => {
    if (!isLoading && auth && email && password === passwordConfirmation) {
      setIsLoading(true);
      createUser(auth, email, password)
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
        <Title3>Registre um novo usuário</Title3>
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
        <TraditionalInput
          type="password"
          placeholder="Confirme sua senha"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />
        <BtnPrimary onClick={handleRegister}>
          {!isLoading ? <TextBtn1>Registrar</TextBtn1> : <Loader1 />}
        </BtnPrimary>
        <Link to="/login">Fazer Login</Link>
      </LoginBox>
    </ThemeAuth>
  ) : (
    <Navigate to="/" />
  );
};

export default Register;
