import styled from "styled-components";
import { ResultData } from "./ResultData";
import { requestData } from "../../mocks/requestData";
import { useLocation } from 'react-router-dom';
import customAxios from "../../service/axios/customAxios";
import { useEffect } from "react";
import { useState } from "react";

export default function Result(){
  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);
  
  const mbti = urlParams.get('mbti'); 
  const msti = urlParams.get('msti');

  const [data, setData] = useState([]);

  useEffect(() => {
    console.log(mbti, msti)
    async function fetchData() {
      try {
        const response = await customAxios.post('/result', { mbti, msti : requestData[msti] }); 
        console.log(response);
        
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    
    if(mbti && msti){
      fetchData();
    }
  }, []);


  return (
    <Container>
      <Title>
        이런 <b>유형</b>인 것 같아요.
      </Title>
      <BoxAlign>
        
        {/* {ResultData.map((item) => (
          <GrayBox key={item.type}>
            <Img src={"./images/emoji.png"} alt="이미지" />
            <TypeTitle><b>{item.type}</b> 형</TypeTitle>
          </GrayBox>
        ))} */}

        <TypeBox>
            <Img src={`./images/mbti/${mbti}.png`} alt="이미지" />
            <TypeTitle><b><ExplainSpan>{ResultData[mbti]}</ExplainSpan></b> 형</TypeTitle>
          </TypeBox>
          <TypeBox>
            <Img src={`./images/msti/${msti}.png`} alt="이미지" />
            <TypeTitle><b><ExplainSpan>{ResultData[msti]}</ExplainSpan></b> 형</TypeTitle>
          </TypeBox>

      </BoxAlign>

        <ExpContainer>
        {data.length===0 ?
          (
            <div>
              
              <Title><b>자세한 결과</b>를 로딩 중입니다...</Title>
            </div>
          )
      :
      (
        <> 
        <div>
          <ExplainTitle>🔍 이 <ExplainSpan>유형</ExplainSpan>은요...</ExplainTitle>
          <Explain>{data.answer1}</Explain>
        </div>
        <div>
          <ExplainTitle>💁‍♂️ <ExplainSpan>이렇게 공부하면</ExplainSpan> 더 좋아요.</ExplainTitle>
          <Explain>{data.answer2}</Explain>
        </div>
        <div>
          <ExplainTitle>🏃 <ExplainSpan>이런 활동</ExplainSpan>이 도움이 돼요.</ExplainTitle>
          <Explain>{data.answer3}</Explain>
        </div>
      </>
      )
      }
        </ExpContainer >
    </Container >
  );
};

const Container = styled.div`
  padding-top: 152px;
  font-family: PretendardRegular;
`;

const Title = styled.p`
  font-size: 30px;
  margin-top: 2rem;
  text-align:center;
`;

const Img = styled.img`
  width: 10rem;
  height: 10rem;
`;

const BoxAlign = styled.div`
  display:flex; 
  justify-content:center; 
  align-items:center; 
  flex-direction : row ; 
  gap :30px ;
  padding: 1rem 0 5rem;
  border-bottom: 1px solid lightgray;
`;

const TypeBox = styled.div`
  border-radius :20px ;
  background-color:#F6F8FF ;
  width : 35rem; 
  height : 20rem ; 
  display:flex ; 
  flex-direction: column;
  align-items:center ;  
  justify-content:center ;
`;

const TypeTitle = styled.p`
  font-size: 20px;
  text-align:center;
`;

const ExpContainer = styled.div`
 display: flex;
 padding: 4rem 20%;
 flex-direction: column;
 gap:100px ;
 justify-content: center;
`;

const ExplainTitle = styled.h2`
 font-size:30px;  
 
`;

const Explain=styled.p`  
 font-size:20px;   
`;

const ExplainSpan = styled.span`
  background-color: #E8EDFF;
`;