import * as S from "./Chat.style"

import ThoughtEmoji from "../../asset/images/emoji_thought.svg";
import SendEmoji from "../../asset/images/paper-airplane.svg";

export default function Chat(){
    return(
        <S.Wrapper>
            <S.StartInfo>
                <S.Goorm alt="구름" src={ThoughtEmoji}/>
                <S.Title><span style={{fontFamily: 'PretendardSemiBold'}}>학업</span>과 관련된 <span style={{fontFamily: 'PretendardSemiBold'}}>상담</span>을 할 수 있어요.</S.Title>
                <S.SubTitle>학교 생활 중 조언을 받고 싶은 부분이 있다면, AI에게 한번 이야기해 보세요.</S.SubTitle>
                
                <S.Exam>
                    <span style={{marginBottom: '10px'}}>이런 이야기를 할 수 있어요.</span>
                    <S.ExamText>이번에 성적을 20점 이상 올리기로 했는데 자신이 없어.</S.ExamText>
                    <S.ExamText>영어 단어를 효율적으로 외울 수 있는 방법이 있을까?</S.ExamText>
                    <S.ExamText>수학은 어떻게 공부하는 게 좋아?</S.ExamText>
                </S.Exam>

            </S.StartInfo>

            <S.ChatBox>
                <S.ChatInput />
                <S.Airplane alt="비행기" src={SendEmoji}/>
            </S.ChatBox>
        </S.Wrapper>
    )
}