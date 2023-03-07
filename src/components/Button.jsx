import styled from 'styled-components'

export const MyButton = styled.button`
    padding: 0 1rem;
    background: var(--color-ui-base);
    border: none;
    line-height: 2.5rem;
    box-shadow: var(--shadow);
    display: flex; 
    align-items: center;
    justify-content: space-between;
    color: var(--color-text);
    cursor: pointer;
    gap: 0.75rem;
    transition: all .2s ease-in-out;
    &:hover{
        box-shadow: none;
    }
`