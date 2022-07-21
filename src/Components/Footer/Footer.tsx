import React from 'react'
import { Container, Line, SocialLink, Text } from './styles'

export default function Footer() {
  return (
    <Container>
      <Text textColor="#BEBEBE" fontSize={1.6} fontWeight={400} textWidth={47}>
        Site criado com a proposta de concluir a atividade de matématica sobre o estudo da reta.<br/> 
        Atividade avaliativa desenvolvida no IFPR - Campus Assis Chateaubriand.
      </Text>
      <Line/>
      <div>
        <Text textColor="#BEBEBE" fontSize={1.6} fontWeight={400}>Contato</Text>
        <SocialLink href='https://www.instagram.com/ricardorhvv/' target="_blank">
          <i className="fa-brands fa-instagram"></i>
          @ricardorhvv
        </SocialLink>

        <SocialLink href='https://github.com/ricardorhv' target="_blank">
          <i className="fa-brands fa-github"></i>
          ricardorhv
        </SocialLink>
      </div>
    </Container>
  )
}