import styled from 'styled-components';

export const TraditionalInput = styled.input`
    width: 100%;
    height: 50px;

    border: 0;
    padding: 0 6px;

    background-color: transparent;

    font-weight: 300;
    font-size: 12px;

    border-bottom: 1px solid ${props => props.error ? 'red' : '#343434'};

    &::placeholder {
        color: ${props => props.error ? 'red' : 'initial'};
    }

    &:focus-visible {
        outline: 0;
    }
`;