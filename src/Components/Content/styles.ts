import styled from "styled-components";

interface TextProps {
  textColor: string;
  fontSize: number;
  fontWeight: number;
}

export const Container = styled.div`
  margin: 2rem 0;
`

export const Wrapper = styled.div<{gapNumber: number}>`
  width: 100%;
  display: flex;
  gap: ${props => props.gapNumber}rem;
  align-items: center;
  margin: 1rem 0;
`

export const Text = styled.p<TextProps>`
  color: ${props => props.textColor};
  font-size: ${props => props.fontSize}rem;
  font-weight: ${props => props.fontWeight};
  text-align: justify;
`