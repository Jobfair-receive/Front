import styled from "styled-components";


export const Wrapper = styled.div`
    margin: 0 20%;
    height: calc(100% - 170px);
    margin-top: 7rem;   
`

export const TopContainer = styled.div`
    margin-top: 2rem;
    width: 100%;
    height: calc(70% - 7rem);
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const StartInfo = styled.div`
    margin-top: 30px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin-bottom: 1rem;
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
    cursor: pointer;
`

export const ChatBox = styled.div`
    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60%;
    min-width: 600px;
    padding: 1.5rem 0;
    position: fixed;
    bottom: 0;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.1), white);
`
export const ChatInput = styled.input`
    height: 5rem;
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

export const MessageContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    margin-bottom: 8rem;
`;

export const Message = styled.p`
    font-size: 1.2rem;
    font-family: PretendardSemiBold;
    width: auto;
    color: ${props => props.sender === 'user' ? 'white' : 'black'};
    background-color: ${props => props.sender === 'user' ? '#7588DF' : '#E8EBF9'};
    padding: 1rem 2rem;
    border-radius: ${props => props.sender !== 'user' ? '15px 15px 15px 0px' : '15px 15px 0px 15px'};
    align-self:${props => props.sender === 'user' ? 'flex-end' : 'flex-start'};
`;
