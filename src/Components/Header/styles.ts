import styled from 'styled-components'

interface TextProps {
  textColor: string;
  fontSize: number;
  fontWeight: number;
  shadow: boolean;
  textWidth?: number;
}

interface LineProps {
  bottom: string;
}

export const Container = styled.div`
  background: no-repeat url('./img/background.png'); 
  background-size: cover;

  width: 100vw;
  height: 100vh;
  padding: 0 5.8rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`
export const Text = styled.h1<TextProps>`
  color: ${props => props.textColor};
  font-size: ${props => props.fontSize}rem;
  font-weight: ${props => props.fontWeight};
  text-shadow: ${props => props.shadow ? '0px 0px 10px rgba(0, 0, 0, .2)' : 'none'};
  width: ${props => props.textWidth ? `${props.textWidth}rem` : 'fit-content'};
  position: relative;
`

export const Box = styled.div`  
  width: 100%;
  background-color: rgba(255, 255, 255, .7);
  padding: 2.8rem 3.6rem;
  border-radius: 2.6rem 0 2.6rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3.2rem 0 0 0;
`

export const Line = styled.div<LineProps>`
  width: 167px;
  height: 5px;
  background-color: #000;
  border-radius: 5px;
  position: absolute;
  right: -11px;
  bottom: ${props => props.bottom};
`
export const Button = styled.a`
  background-color: rgba(240, 240, 240, .15);
  border: 2px solid #fff;
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 31px;
  left: 50%;
  cursor: pointer;
  transition: all .4s;
  text-decoration: none;

  :hover {
    filter: opacity(0.7);
  }

  i {
    color: #2100EA;
    font-size: 2.5rem;
    text-shadow: 0px 0px 10px rgba(0, 0, 0, .4);
  }
`
