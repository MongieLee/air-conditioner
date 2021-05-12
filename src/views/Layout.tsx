import * as React from 'react';
import styled from 'styled-components';
import snowImg from '../assets/images/snow.svg';

const Container = styled.div`
  align-items: center;
  height: 100vh;
  overflow: auto;
  display: flex;
  flex-direction: column;
  > h2 {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .snow {
    width: 1.5em;
    margin-right: 0.5em;
  }
  .tips {
    color: #aaa;
    font-size: 14px;
  }
  .air-conditioner {
    margin-top: 20px;
    margin-bottom: 20px;
    height: 200px;
    border: 1px solid #dad3d3;
    border-bottom: none;
    width: 80vw;
    border-radius: 16px 16px 0 0;
    position: relative;
    z-index: 1;
    .chufengkou {
      position: absolute;
      top: 90px;
      right: -1px;
      height: 160px;
      width: 60px;
      border-radius: 60px 0;
      border: 1px solid #dad3d3;
    }
    .chufengkou2{
      position: absolute;
      top: 90px;
      left: -1px;
      height: 160px;
      width: 60px;
      border-radius: 0 60px;
      border: 1px solid #dad3d3;
    }
  }
`;

const Component = () => {
  return (
    <Container>
      <h2>
        <img className='snow' src={snowImg} alt='雪花' />
        空调模拟器
      </h2>
      <div className='tips'>温馨提示：请在空调房中体验！👌</div>
      <div className='air-conditioner'>
        <span>美的</span>
        <span>Midea</span>
        <div className='chufengkou'></div>
        <div className='chufengkou2'></div>
      </div>
    </Container>
  );
};

export default Component;
