import styled from "styled-components"

export const TestText = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 48px;
    margin: 20px;
`
export const TestInfo = styled.ul`
    li::marker {
    color: black;
  }
  li{
    margin: 10px;
  }
  background-color: #E8E8E8;
  padding: 20px 70px;
  margin: 20px 50px;
  border-radius: 10px;
  font-size: 24px;
`

export const TestForm = styled.form`
 margin: auto 50px;
`
export const Question = styled.div`
    font-size: 36px;    
    margin-left: 20px;
`
export const Radios = styled.fieldset`
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: none;
    border-bottom: 2px solid #D6D6D6;
    padding: 20px 80px 110px;  
    
    [type="radio"]{
        vertical-align: middle;
        appearance: none;
        border: max(6px, 0.2em) solid gray;
        border-radius: 50%;
        width: 1.25em;
        height: 1.25em;
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

export const Span = styled.span`
    position: absolute;
    bottom: -45px;
    text-align: center;
    font-size: 1.2rem;
    color:#333333;
    width: 200px;
`