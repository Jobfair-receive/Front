import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const StartInfo = styled.div`
    margin-top: 30px;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`

export const Goorm = styled.img`
    width: 137px;
    height: 137px;
`
export const Title = styled.span`
    font-family: PretendardRegular;
    font-size: 40px;
`
export const SubTitle = styled.span`
    font-family: PretendardRegular;
    font-size: 28px;
    color: #D2D1D6;
`

export const Exam = styled.div`
    margin-top: 40px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    font-family: PretendardRegular;
    font-size: 20px;
`

export const ExamText = styled.span`
    color: #7588DF;
    border: 2px solid #7588DF;
    padding: 10px 30px;
    border-radius: 50px;
`

export const ChatBox = styled.div`
    height: 90px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60%;
    min-width: 600px;
    margin-bottom: 80px;
`
export const ChatInput = styled.input`
    height: 100%;
    width: 100%;
    background-color: #F0F0F0;
    outline: none;
    border: none;
    border-radius: 20px;
    padding: 0px 20px;
    font-family: PretendardRegular;
    font-size: 20px;
`;

export const Airplane = styled.img`
    position: absolute;
    width: 37px;
    height: 37px;
    right: 20px;
`