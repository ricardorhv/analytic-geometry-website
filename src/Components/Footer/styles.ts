import styled from "styled-components";

interface TextProps {
  textColor: string;
  fontSize: number;
  fontWeight: number;
  textWidth?: number;
}

export const Container = styled.footer`
  width: 100%;
  background-color: #060029;
  color: #BEBEBE;
  padding: 2.6rem 5.8rem;
  display: flex;
  align-items: center;
  gap: 2.5rem;
`

export const Text = styled.p<TextProps>`
  color: ${props => props.textColor};
  font-size: ${props => props.fontSize}rem;
  font-weight: ${props => props.fontWeight};
  text-align: justify;
  width: ${props => props.textWidth ? `${props.textWidth}rem` : 'fit-content'};
`

export const Line = styled.div`
  width: 5px;
  height: 163px;
  background-color: #fff;
  border-radius: 5px;
`

export const SocialLink = styled.a`
  color: #BEBEBE;
  text-decoration: none;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: .2rem;

  cursor: pointer;

  i {
    font-size: 1.5rem;
  }

  :hover {
    filter: opacity(0.8);
  }
`