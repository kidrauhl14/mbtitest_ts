// import React from 'react';
import styled from "styled-components";
import {ProgressBar} from "react-bootstrap";
import { QuestionData } from '../stores/Question/QuestionData';

interface Props{
    type: string;
    questionNo: number;
}

function Header(props:Props) {
  return (
    <HeaderWrapper>
      {props.type == 'progress' ? (
        // <ProgressWrapper>
          <ProgressBar
            striped
            variant="info"
            now={Math.round((props.questionNo / QuestionData.length) * 100)}
            label={`${Math.round(
              (props.questionNo / QuestionData.length) * 100,
            )}%`}
            style={{ width: '100%', height: '30px' }}
          />
        // </ProgressWrapper>
      ) : (
        <HeaderTitle
          // style={{
          //   backgroundColor: '#ffa07a',
          //   fontFamily: 'Jalnan',
          //   fontSize: '45pt',
          //   height: '100px',
          // }}
        >
          🐱예비집사 판별기🐱
        </HeaderTitle>
      )}
    </HeaderWrapper>
  );
}

export default Header;


const HeaderWrapper = styled.div`

`;

const HeaderTitle = styled.div`
  background-color:#ffa07a;
  font-size: 45pt;
  height: 100px;


  @media screen and (max-width: 665px) {
    font-size: 30pt;
    height: 77px;
  }

  @media screen and (max-width: 360px) {
    /* 텍스트를 화면에 맞게 축소시키는 스타일 */
    & > div {
      font-size: 20pt;
    }
  }

  /* font-size: 40pt;
  align-items: center;
  display: flex;
  justify-content: center;
  font-family: 'Jalnan';
  padding: 20px 20px 20px 20px; */
`;