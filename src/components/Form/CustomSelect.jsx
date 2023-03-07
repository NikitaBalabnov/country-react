import styled from 'styled-components'
import Select from 'react-select'

export const CustomSelect = styled(Select).attrs({
    styles: {
        control: (provided) => ({
            ...provided,
            backgroundColor: 'var(--color-ui-base)',
            color:'var(--color-text)',
            borderRadius:'5px',
            padding: '.25rem',
            border: 'none',
            boxShadow: 'var(--shadow)',
            height: '50px',
        }),
        option: (provided, state)=>({
            ...provided,
            cursor: 'pointer',
            color:'var(--color-text)',
            backgroundColor: 'var(--color-ui-base)',
        }),
        singleValue: (provided) => ({
            ...provided,
            color: 'var(--color-text)',
          })
    },
})`
    width: 100%;
    font-family: var(--family);
    & > *{
        box-shadow: var(--shadow);
    }
    & > div[id]{
        background: var(--color-ui-base);
    }
    @media(min-width: 767px){
        width: 200px;
    }
`;