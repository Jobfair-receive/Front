import { useState } from "react";
import * as S from "./Test.style"
import Question from "./question";
import ReactPaginate from "react-paginate";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import {  createAnswer } from "../../service/api/test";

export default function Test(){
    const navigate = useNavigate();
    const userPage = 8;
    const [pageNumber, setPageNumber] = useState(0);
    const pageCount = Math.ceil(Question.length / userPage);
    const pageVisited = pageNumber * userPage;

    const changePage = ({ selected }) => {
        setPageNumber(selected);
        window.scrollTo(0, 300);
      };

      
    const [selectedTestPart, setSelectedTestPart] = useState(0);
    const handleTestPartClick = (index) => {
        setSelectedTestPart(index+1); 
    };

    const [answers, setAnswers] = useState([]);
    const handleRadioChange = (index) => (event) => {
        setAnswers({
            ...answers,
            [index]: {
                value: event.target.value,
                IfYes: Question[index].IfYes,
                IfNo: Question[index].IfNo    
            }
        });
    };

    const TestSubmit = async () => {
        if (Object.keys(answers).length < Question.length) {
            alert("검사를 모두 완료 해주세요");
            console.log(Question.length, Object.keys(answers).length)
            return;
        }
        
        try {
            const data = {
            ...answers,
            };
            const postTestData = await createAnswer(data);
            console.log(postTestData)
            const params = new URLSearchParams(postTestData).toString();
            navigate('/result?' + params);
        } catch (error) {
            alert("결과 생성에 실패했습니다!");
            console.log(error.message);
        }
    }

    return (
    <div style={{margin: "0px 20%"}}>
        <S.TestText>성격 및 학습 유형 검사</S.TestText>
        <S.TestInfo>
            <li>질문은 총 24가지로, 예상 소요 시간은 5분입니다.</li>
            <li style={{color: '#7588df', marker: 'marker: none'}}>내가 지금까지 해 온 행동, 현재의 모습에 따라 정직하게 답해 주세요.</li>
            <li>정확한 결과를 위해서는 보통의 모습을 선택해 주세요.</li>
        </S.TestInfo>
        <S.TestForm>
            {Question
                .slice(pageVisited, pageVisited + userPage)
                .map((question, index) => (
                <S.TestPart key={index}
                    onClick={()=>{
                        handleTestPartClick(index)
                     }
                    }
                    selected={selectedTestPart === index}
                >
                    <S.Question>{pageVisited+index+1}. {question.QuestionContents}</S.Question>
                    <S.Radios>
                        {["1", "2", "3", "4", "5"].map(value => (
                            <S.Label key={value}
                                borderColor={value < 3 ? "#CD6B73" :   value == 3 ?  "gray" : "#7588DF"} 
                            >
                                <S.Input 
                                    size={value === "5" || value === "1" ? '100px' : value === "4" || value === "2" ? '80px' : '50px'}
                                    type="radio" 
                                    name={`contact${pageVisited+index}`} 
                                    value={value} 
                                    checked={answers[pageVisited+index]?.value === value}
                                    onChange={handleRadioChange(pageVisited+index)}
                                />
                                <S.Span>{value === "5" ? "매우 그렇지 않다." : value === "1" ? "매우 그렇다." : ""}</S.Span>
                            </S.Label>
                        ))}
                    </S.Radios>
                </S.TestPart>  
            ))}
            <StyledPagination>
            <ReactPaginate
                previousLabel="< 이전"
                nextLabel=" 다음 >"
                pageCount={pageCount}
                onPageChange={changePage}
                pageLinkClassName="a"
                containerClassName={"pagination"}
                previousLinkClassName={"previousBtn"}
                nextLinkClassName={"nextBtn"}            
                disabledClassName={"paginationDisabled"}
                activeClassName={"paginationActive"}
                pageLabelBuilder={() => ""}
                onClick={()=>setSelectedTestPart(0)}
            /> 
            </StyledPagination>
            {
                pageNumber===2
                &&(
                    <S.SubmitSection>
                        <S.SubmitButton onClick={TestSubmit}>
                            결과 보러 가기
                        </S.SubmitButton>
                    </S.SubmitSection>
                )
            }
        </S.TestForm>
    </div>
    )
}

const StyledPagination = styled.div`

    .pagination {
        display: flex;
        list-style: none;
        align-items: center;
        position: relative;
        justify-content: center;
        padding: 3rem;
    }

    .pagination > li {
        margin-right: 10px;
    }

    .a{
        background-color: #D2D1D6;
        border-radius: 50%;
        padding: 0rem 0.65rem;
    }

    .pagination > li > a {
        &:hover {
            background-color: #f0f0f0;
            transition-duration: 0.3s;
            transition-timing-function: ease-out;
            transition-property: background-color;
         }
         cursor: pointer;
     }

     .paginationActive > a { 
         background-color:#7588DF; 
         color:white; 
     }

    .previousBtn,
    .nextBtn {
        width: 4rem;
        height: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: PretendardRegular;
        font-size: 1.4rem;
        color: black;
        margin: 0 7rem;
        border-radius: 2rem;
        padding: 1rem 1.6rem;
    }

    .previousBtn{
        left: calc(20% + 3rem);
    }
    .nextBtn{
        right: calc(20% + 3rem);
    }
  
`;