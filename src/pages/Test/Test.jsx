import { useState } from "react";
import * as S from "./Test.style"
import Question from "./question";
import ReactPaginate from "react-paginate";
import styled from "styled-components";

export default function Test(){

    const userPage = 8;
    const [pageNumber, setPageNumber] = useState(0);
    const pageCount = Math.ceil(Question.length / userPage);
    const pageVisited = pageNumber * userPage;

    const changePage = ({ selected }) => {
        setPageNumber(selected);
      };

      
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

    return (
    <div style={{margin: "0px 20%"}}>
        <S.TestText>뭐시기 뭐시기 검사</S.TestText>
        <S.TestInfo>
            <li>질문은 총 25개로 총 소요시간은 한 10분정도 될듯?</li>
            <li style={{color: '#FF0015', marker: 'marker: none'}}>내가 지금까지 해 온 행동, 현재의 모습에 따라 정직하게 답해주세요.</li>
            <li>검사의 정확도를 위해 가급적 ‘보통’ 외의 것을 선택하기 바랍니다.</li>
        </S.TestInfo>
        <S.TestForm>
            {Question
                .slice(pageVisited, pageVisited + userPage)
                .map((question, index) => (
                <S.TestPart key={index}>
                    <S.Question>{pageVisited+index+1}. {question}</S.Question>
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
            <StyledPagination>
            <ReactPaginate
                previousLabel="<"
                nextLabel=">"
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={"pagination"}
                previousLinkClassName={"previousBtn"}
                nextLinkClassName={"nextBtn"}            
                disabledClassName={"paginationDisabled"}
                activeClassName={"paginationActive"}
                pageLabelBuilder={() => ""}
            /> 
            </StyledPagination>
        </S.TestForm>
    </div>
    )
}

const StyledPagination = styled.div`

    .pagination {
        display: flex;
        list-style: none;
        justify-content: center;
    }

    .pagination > li {
        margin-right: 10px;
    }

    .pagination > li > a {
        border-radius: 50%;
        padding: 0.06rem 0.7rem;
        text-decoration: none;
        color: white;

        &:hover {
            background-color: #f0f0f0;
            transition-duration: 0.3s;
            transition-timing-function: ease-out;
            transition-property: background-color;
         }
     }

     .paginationActive > a { 
         background-color:#007BFF; 
         color:white; 
     }

    .previousBtn,
    .nextBtn {
        width: 20px;
        height: 40px;
        background-color: red;
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: PretendardRegular;
        color: black;
    }

    .previousBtn{
        left: calc(20% + 3rem);
    }
    .nextBtn{
        right: calc(20% + 3rem);
    }
  
`;
