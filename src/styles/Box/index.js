import styled from 'styled-components';

export const LoginBox = styled.div`
    background-color: white;
    border-radius: 6px;
    max-width: 400px;
    margin: 0 auto;
    padding: 48px 36px;

    text-align: center;

    transform: translateY(-20px);
    opacity: 0;
    animation: animeLeft .3s forwards;

    @keyframes animeLeft {
        to {
            transform: initial;
            opacity: initial;
        }
    }

    > h3 {
        margin-bottom: 36px;
        color: #780206;
    }

    > button {
        margin-bottom: 24px;
    }

    > a {
        font-size: 12px;
        text-transform: uppercase;
    }
`