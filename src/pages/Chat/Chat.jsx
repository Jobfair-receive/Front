import * as S from "./Chat.style"
import SendEmoji from "../../asset/images/paper-airplane.svg";
import ThoughtEmoji from "../../asset/images/emoji_thought.svg";
import { useEffect, useRef, useState } from "react";
import customAxios from "../../service/axios/customAxios";

export default function Chat() {
    const [message, setMessage] = useState(''); 
    const [chatList, setChatList] = useState([]);
    const [isStarted, setIsStarted] = useState(false);

    const handleInputChange = (event) => {
        setMessage(event.target.value); 
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') { 
            handleSubmit(event);
        }
    };

    const handleChatPress = (event) => {
        event.preventDefault();
        const htmlElement = event.target;
        const textContent = htmlElement.innerText;
        setMessage(textContent);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsStarted(true); 

        setChatList([...chatList, message]);
          try {
            const response = await customAxios.post('/chat', { message }); 
            setMessage('');
            setChatList(prevChatList => [...prevChatList, response.data.result]);
          } catch (error) {
            console.error(error);
          }
        
      };


      const messagesEndRef = useRef(null);

      const scrollToBottom = () => {
          messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
      }
  
      useEffect(scrollToBottom, [chatList]);


    return (
        <div style={{overflowY: 'auto', overflowX: 'hidden'}}>
        <S.Wrapper>
        <S.TopContainer>
            {!isStarted ? (
            <S.StartInfo>
            <S.Goorm alt="구름" src={ThoughtEmoji}/>
            <S.Title><span style={{fontFamily: 'PretendardSemiBold'}}>학업</span>과 관련된 <span style={{fontFamily: 'PretendardSemiBold'}}>상담</span>을 할 수 있어요.</S.Title>
            <S.SubTitle>학교 생활 중 조언을 받고 싶은 부분이 있다면, AI에게 한번 이야기해 보세요.</S.SubTitle>
            
            <S.Exam>
                <span style={{marginBottom: '10px'}}>이런 이야기를 할 수 있어요.</span>
                <S.ExamText onClick={handleChatPress}>이번에 성적을 20점 이상 올리기로 했는데 자신이 없어.</S.ExamText>
                <S.ExamText onClick={handleChatPress}>영어 단어를 효율적으로 외울 수 있는 방법이 있을까?</S.ExamText>
                <S.ExamText onClick={handleChatPress}>수학은 어떻게 공부하는 게 좋아?</S.ExamText>
            </S.Exam>

           </S.StartInfo>
            ) : (
            <S.MessageContainer>
            {
                chatList.map((msg, index) => (
                    <S.Message key={index} sender={(index % 2===0)&&"user"}>
                        {msg}
                    </S.Message>
                ))    
            }
                         <div ref={messagesEndRef} />

            </S.MessageContainer>                  
            )}
        </S.TopContainer>

           <S.ChatBox>
                <S.ChatInput 
                    value={message} 
                    onChange={handleInputChange}
                    onKeyDown={handleKeyPress}
                />
                <S.Airplane alt="비행기" src={SendEmoji} onClick={handleSubmit}/>                
            </S.ChatBox>
        </S.Wrapper>
        </div>
    );
}