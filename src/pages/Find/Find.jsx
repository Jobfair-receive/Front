import styled from "styled-components";
import Emo from "../../components/img/emoji.png";
import { requestData } from "../../mocks/requestData";

const Find = () => {
    const func = () => {
        console.log(requestData["STCP"])
    }
    return (
    <div onClick={func}>
        <div>
            내가 이렇게
        </div>
        <div>
            내가 이렇게
        </div>
        <div>
            내가 이렇게
        </div>
        <div>
            내가 이렇게
        </div>
        <div>
            내가 이렇게
        </div>
        <div>
            내가 이렇게
        </div>
        <div>
            내가 이렇게
        </div>
        <div>
            내가 이렇게
        </div>
        <div>
            내가 이렇게
        </div>


    </div>
  );
};

export default Find;