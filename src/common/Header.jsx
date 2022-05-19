import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../contexts/AuthContext";
import { Head } from "../styles/Common/Header";
import { Col, Container, Row } from "../styles/Grid";

const Header = () => {
    const { setToken } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () =>  {
        setToken("");
        navigate("/login");
    }

    return (
        <Head>
            <Container>
                <Row>
                    <Col>
                        <Link to="/">
                            <img src="" alt="Logo" />
                        </Link>
                        <ul>
                            <li>
                                <Link to="/Produtos">Produtos</Link>
                            </li>
                            <li>
                                <Link to="/Meus Dados">Meus Dados</Link>
                            </li>
                        </ul>
                        <button onClick={handleLogout}>Sair</button>
                    </Col>
                    
                </Row>
            </Container>
        </Head>
    )
}

export default Header;