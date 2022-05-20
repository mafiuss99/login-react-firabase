import React, { useContext, useState } from "react";
import { auth, loginUser } from "../../data/Firebase";

import { BtnPrimary } from "../../styles/Buttons";
import { TraditionalInput } from "../../styles/Inputs";
import { TextBtn1, TextError, Title3 } from "../../styles/Typography";

import { ReactComponent as Loader1 } from "../../assets/svgs/loader1.svg";
import ThemeAuth from "../../themes/ThemeAuth";
import { FormControl, LoginBox } from "../../styles/Box";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import useFormValidator from "../../hooks/useFormValidator";

const Login = () => {
  const { Yup, setSchema, validate, textFieldErrorHandler } =
    useFormValidator();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { setToken, token } = useContext(AuthContext);

  setSchema({
    email: Yup.string().required().email(),
    password: Yup.string().required(),
  });

  const handleLogin = async () => {
    if (!isLoading && auth) {
      if (!(await validate({ email, password }))) return;

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
        <FormControl>
          <TraditionalInput
            type="text"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            {...textFieldErrorHandler("email")}
          />
          {textFieldErrorHandler("email")?.helperText}
        </FormControl>
        <FormControl>
          <TraditionalInput
            type="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            {...textFieldErrorHandler("password")}
          />
          {textFieldErrorHandler("password")?.helperText}
        </FormControl>
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
