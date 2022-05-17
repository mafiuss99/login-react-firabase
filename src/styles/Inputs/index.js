import styled from 'styled-components';

export const TraditionalInput = styled.input`
    width: 100%;
    height: 50px;

    border: 0;
    margin-bottom: 36px;
    border-bottom: 1px solid #343434;
    padding: 0 6px;

    background-color: transparent;

    font-weight: 300;
    font-size: 12px;

    &:focus-visible {
        outline: 0;
    }
`;