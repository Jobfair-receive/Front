import * as S from "./Test.style"

export default function Test(){
    return <div>
        <S.TestText>뭐시기 뭐시기 검사</S.TestText>
        <S.TestInfo>
            <li>질문은 총 25개로 총 소요시간은 한 10분정도 될듯?</li>
            <li style={{color: '#FF0015', marker: 'marker: none'}}>내가 지금까지 해 온 행동, 현재의 모습에 따라 정직하게 답해주세요.</li>
            <li>검사의 정확도를 위해 가급적 ‘보통’ 외의 것을 선택하기 바랍니다.</li>
        </S.TestInfo>
        
        <S.TestForm>
            {["질문1", "질문2", "질문3"].map((question, index) => (
                <>
                    <S.Question>{question}</S.Question>
                    <S.Radios>
                        <S.Label borderColor="#CD6B73">
                            <input type="radio" name={`contact${index}`} value="5" style={{width: '110px', height: '110px'}}/>
                            <S.Span>매우 그렇지 않다.</S.Span>
                        </S.Label>
                        <S.Label borderColor="#CD6B73">
                            <input type="radio" name={`contact${index}`} value="4" style={{width: '80px', height: '80px'}}/>
                        </S.Label>
                        <S.Label>
                            <input type="radio" name={`contact${index}`} value="3" style={{width: '50px', height: '50px'}}/>
                        </S.Label>
                        <S.Label borderColor="#7588DF">
                            <input type="radio" name={`contact${index}`} value="2" style={{width: '80px', height: '80px'}}/>
                        </S.Label>
                        <S.Label borderColor="#7588DF">
                            <input type="radio" name={`contact${index}`} value="1" style={{width: '110px', height: '110px'}}/>
                            <S.Span>매우 그렇다.</S.Span>
                        </S.Label>
                    </S.Radios>
                </>  
            ))}
        </S.TestForm>
    </div>
}