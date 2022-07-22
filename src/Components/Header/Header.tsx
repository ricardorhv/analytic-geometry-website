import React from 'react'
import { Box, Button, Container, Line, Text } from './styles'

function scrollDown() {
  
}

export default function Header() {
  return (
    <Container>
      <div>
        <Text textColor="#fff" fontSize={4} fontWeight={400} shadow={true}>Geometria Analítica</Text>
        <Text textColor="#BEBEBE" fontSize={1.2} fontWeight={300} shadow={false} textWidth={42.5}>
          Geometria analítica é um campo da matemática em que é possível representar elementos geométricos, como pontos, retas, triângulos, quadriláteros e circunferências, utilizando expressões algébricas.
        </Text>
        <Box>
          <Text textColor='#2100EA' fontSize={4} fontWeight={400} shadow={true}>
            <Line bottom="80%"/>
            Estudo da Reta
            <Line bottom="15px"/>
          </Text>
        </Box>
      </div>
      <img src="./img/vetor.svg"/>
      <Button href='#content'>
        <i className="fa-solid fa-arrow-down"></i>
      </Button>
    </Container>
  )
}