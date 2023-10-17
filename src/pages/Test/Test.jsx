import { useState } from "react";
import * as S from "./Test.style"
import Question from "./question";

export default function Test(){

    const [selectedTestPart, setSelectedTestPart] = useState(0);
    const handleTestPartClick = (index) => {
        setSelectedTestPart(index+1);
    };

    const [answers, setAnswers] = useState({});

    const handleRadioChange = (index) => (event) => {
        setAnswers({
            ...answers,
            [index]: event.target.value,
        });
    };
    
    return <div style={{margin: "0px 20%"}}>
        <S.TestText>뭐시기 뭐시기 검사</S.TestText>
        <S.TestInfo>
            <li>질문은 총 25개로 총 소요시간은 한 10분정도 될듯?</li>
            <li style={{color: '#FF0015', marker: 'marker: none'}}>내가 지금까지 해 온 행동, 현재의 모습에 따라 정직하게 답해주세요.</li>
            <li>검사의 정확도를 위해 가급적 ‘보통’ 외의 것을 선택하기 바랍니다.</li>
        </S.TestInfo>
        <S.TestForm>
            {Question.map((question, index) => (
                <S.TestPart
                    onClick={() => handleTestPartClick(index)}
                    selected={selectedTestPart === index}
                >
                    <S.Question>{question}</S.Question>
                    <S.Radios>
                        {["1", "2", "3", "4", "5"].map(value => (
                            <S.Label 
                                borderColor={value < 3 ? "#CD6B73" :   value == 3 ?  "gray" : "#7588DF"} 
                            >
                                <S.Input 
                                    Size={value === "5" || value === "1" ? '110px' : value === "4" || value === "2" ? '80px' : '50px'}
                                    type="radio" 
                                    name={`contact${index}`} 
                                    value={value} 
                                    checked={answers[index] === value}
                                    onChange={handleRadioChange(index)}
                                />
                                <S.Span>{value === "5" ? "매우 그렇지 않다." : value === "1" ? "매우 그렇다." : ""}</S.Span>
                            </S.Label>
                        ))}
                    </S.Radios>
                </S.TestPart>  
            ))}

            <button onClick={() => console.log(answers)}>결과 보기</button>  
        </S.TestForm>
    </div>
}
