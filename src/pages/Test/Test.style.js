import styled from "styled-components"

export const TestText = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
    font-family: PretendardSemiBold;
`
export const TestInfo = styled.ul`
    li::marker {
    color: black;
  }
  li{
    margin: 0.6rem;
    font-family: PretendardRegular;
  }
  background-color: #E8E8E8;
  padding: 1.2rem 70px;
  margin: 3rem 3rem;
  border-radius: 0.6rem;
  font-size: 1.5rem;
`

export const TestForm = styled.div`
 margin: auto 3rem;
`

export const TestPart = styled.div`

    opacity: ${props => props.selected ? 1 : 0.5};
`
export const Question = styled.div`
    font-size: 2.2rem;    
    margin: 3.6rem 1.2rem 0;
    font-family: PretendardMedium;
    text-indent: -1.7em;
    padding-left: 1em;
`
export const Radios = styled.fieldset`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: none;
    border-bottom: 0.12rem solid #D6D6D6;
    padding: 2rem 4.8rem 4.5rem;  

    [type="radio"]{
        vertical-align: middle;
        appearance: none;
        border: max(6px, 0.2em) solid gray;
        border-radius: 50%;
        transition: border 0.5s ease-in-out;
        border-color: ${props => props.borderColor || 'gray'};
    }
    [type="radio"]:focus-visible {
        outline: none;
    }
    [type="radio"]:disabled {
        background-color: lightgray;
        box-shadow: none;
        opacity: 0.7;
        cursor: not-allowed;
    }
`

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    align-items: center;

    input[type="radio"] {
        border-color: ${props => props.borderColor || 'gray'};
    }
    input[type="radio"]:checked {
        border: 0.4em solid ${props => props.borderColor || 'gray'};
        background-color: ${props => props.borderColor || 'gray'}; 
    }
    input[type="radio"]:hover {
        box-shadow: 0 0 0 max(4px, 0.2em) lightgray;
        transition: background-color .5s ease-in-out; 
        background-color: ${props => props.borderColor || 'gray'}; 
        cursor: pointer;
    }

    position: relative;
`

export const Input = styled.input`
    width: ${props => props.size};
    height: ${props => props.size};
`

export const Span = styled.span`
    position: absolute;
    bottom: -2.7rem;
    text-align: center;
    font-size: 1.2rem;
    color:#333333;
    width: 12rem;
    font-family: PretendardMedium;
`

export const SubmitSection = styled.div`
    display: flex;
    justify-content: center;
    padding-bottom: 3rem;
`

export const SubmitButton = styled.div`
    color: white;
    padding: 2rem;
    border-radius: 3rem;
    height: 2rem;
    width: fit-content;
    font-size: 1.5rem;
    font-family: PretendardSemiBold;
    background-color: #7588DF;
    cursor: pointer;

    @keyframes moveUpDown {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(10px);
    }
}
    &:hover{
        transform: scale(1.09);
        transition: transform 0.3s ease-in-out;
    }
`