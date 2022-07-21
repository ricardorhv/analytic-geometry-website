import React from 'react';
import { Container, Text, Wrapper } from './styles';

export default function Content() {
  return (
    <main id='content'>
      <Container>
        <Text textColor="#000" fontSize={1.6} fontWeight={400}>Geometria Analítica: Introdução</Text>
        <Text textColor="#000" fontSize={1.1} fontWeight={300}>
          A Geometria Analítica tem como principal objetivo descrever objetos geométricos utilizando um sistema de coordenadas, nesse caso estamos falando do plano cartesiano. Ela teve como principal idealizador o filósofo francês René Descartes (1596-1650). Com o auxílio de um sistema de eixos associados a um plano, ele faz corresponder a cada ponto do plano um par ordenado e vice-versa. A partir disso surgiu o sistema cartesiano, permitindo o estudo da Geometria (ponto, reta, circunferência) e da Álgebra (relações, equações, etc.), podendo-se representar relações algébricas em forma de gráfico e expressar algebricamente representações gráficas.                             
        </Text>
      </Container>

      <Container>
        <Text textColor="#000" fontSize={1.6} fontWeight={400}>Distância entre dois pontos</Text>
        <Text textColor="#000" fontSize={1.1} fontWeight={300}>
          A reta AB formada pelo ponto A(xa, ya) e B(xb, yb), pode ter seu tamanho calculado da seguinte forma:                             
        </Text>
        <Text textColor="#000" fontSize={1.1} fontWeight={300}>
          Considerando o triângulo retângulo formado na imagem abaixo, temos a reta AB como hipotenusa (dab), logo:                             
        </Text>
        <Wrapper gapNumber={10}>
          <Text textColor="#000" fontSize={1.1} fontWeight={300}>
            dab² = (xb - xa)² + (yb - ya)²
            <br/>
            dab = √(xb - xa)² + (yb - ya)²               
          </Text>
          <img src="../../../public/img/pontos.png" alt="" />
        </Wrapper>
      </Container>

      <Container>
        <Text textColor="#000" fontSize={1.6} fontWeight={400}>Coordenadas do ponto médio</Text>
        <Text textColor="#000" fontSize={1.1} fontWeight={300}>
          Um ponto médio na geometria plana é quando se divide o ponto ao meio exato, tendo duas partes iguais. Para descobrir o ponto médio usamos a seguinte fórmula:
        </Text>

        <Container>
          <Text textColor="#000" fontSize={1.1} fontWeight={300}>
            xm = (xa + xb) / 2
            <br/>
            ym = (ya + yb) / 2
          </Text>
        </Container>

      </Container>

      <Container>
        <Text textColor="#000" fontSize={1.6} fontWeight={400}>Condição de alinhamento de três pontos</Text>
        <Text textColor="#000" fontSize={1.1} fontWeight={300}>
          Para verificar se três pontos são colineares, ou seja, estão alinhados, usamos a seguinte fórmula:
        </Text>

        <Container>
          <img src="../../../public/img/condicao.png" alt="" />
        </Container>
        
        <Text textColor="#000" fontSize={1.1} fontWeight={300}>
          Existem duas opções nesse caso. Se o determinante for igual a zero os pontos são colineares. Se não, eles não estão alinhados.
        </Text>
      </Container>

      <Container>
        <Text textColor="#000" fontSize={1.6} fontWeight={400}>Equação da reta</Text>
        <Text textColor="#000" fontSize={1.1} fontWeight={300}>
          Primeira equação a ser apresentada é a equação reduzida:<br/>
          <strong>y = ax + b</strong>
          <br/>
          <br/>
          <strong>a: Coeficiente angular</strong>
          <br/>
          <strong>b: Coeficiente linear</strong>
          <br/>
          Através desses coeficientes conseguimos definir algumas características da reta, por exemplo a inclinação.<br/>
          <br/>
          Para descobrir o coeficiente angular(m ou a):<br/>
          m= (yb - ya) / (xb - xa)<br/>
          <br/>
          Obtendo ele conseguimos achar uma das equações da reta:<br/>
          y - yo = m(x - xo)<br/>
          <br/>
          Concluímos com a fórmula da equação geral da reta, onde basicamente só temos que igualar tudo a 0:<br/>
          ax + by + c = 0 
        </Text>
      </Container>

      <Container>
        <Text textColor="#000" fontSize={1.6} fontWeight={400}>Exemplos</Text>
        <Text textColor="#000" fontSize={1.1} fontWeight={300}>
          <strong>2.</strong> (UNB-DF) O coeficiente angular da reta (3y - 5) ÷ (5x - 5) = 3 é:
        </Text>

        <Wrapper gapNumber={2}>
          <img src="../../../public/img/exemplo1.jpeg" width="283" />
          <div>
            <Text textColor="#000" fontSize={1.1} fontWeight={300}>
              Para resolver esse exercício foi necessário isolar o y para descobrir o coeficiente angular, ou seja, o valor que acompanha o x.
            </Text>
            <ul>
              <li>
                <Text textColor="#000" fontSize={1.1} fontWeight={300}>
                  Devido ser uma igualdade comecei multiplicando cruzado.
                </Text>
              </li>
              <li>
                <Text textColor="#000" fontSize={1.1} fontWeight={300}>
                  Continuei trabalhando com jogo de sinal.
                </Text>
              </li>
              <li>
                <Text textColor="#000" fontSize={1.1} fontWeight={300}>
                  Isolei o y.
                </Text>
              </li>
              <li>
                <Text textColor="#000" fontSize={1.1} fontWeight={300}>
                  Com isso já descobri o coeficiente (15), apenas precisei dividir para achar o resultado exato (5).
                </Text>
              </li>
            </ul>
          </div>
        </Wrapper>
      </Container>
      
      <Container>
        <Text textColor="#000" fontSize={1.1} fontWeight={300}>
          <strong>4.</strong> (UEPB) Suponhamos que um feixe de luz parte do ponto P(4, 10) do plano cartesiano e atinge o eixo das abscissas no ponto Q(8, 0). A equação da reta, trajetória do raio incidente, é dada por:
        </Text>
        <Text textColor="#000" fontSize={1.1} fontWeight={300}>
          <strong>a)</strong> 5x - 2y - 40 = 0<br/>
          <strong>b)</strong> 2x - 5y - 40 = 0<br/>
          <strong>c)</strong> 5x + 2y - 40 = 0<br/>
          <strong>d)</strong> y = 2x + 2<br/>
          <strong>e)</strong> y = -x - 8<br/>
        </Text>

        <Wrapper gapNumber={2}>
          <img src="../../../public/img/exemplo2.jpeg" width={283}/>
          <div>
            <Text textColor="#000" fontSize={1.1} fontWeight={300}>
              O exercício pedia pela equação da reta, ou seja, equação geral da reta que no caso é: ax + by + c = 0
            </Text>
            <ul>
              <li>
                <Text textColor="#000" fontSize={1.1} fontWeight={300}>
                  O primeiro passo foi descobrir o coeficiente angular, pois como já tínhamos os dois pontos da reta (começo e fim) já era possível determinar o seu valor e também ele é crucial para formar a equação geral.
                </Text>
              </li>
              <li>
                <Text textColor="#000" fontSize={1.1} fontWeight={300}>
                  Jogando os valores de apenas um ponto na equação com o objetivo de destrinchar ela e igualar tudo a 0. 
                </Text>
              </li>
              <li>
                <Text textColor="#000" fontSize={1.1} fontWeight={300}>
                  Com os valores encontrados, nota-se nas alternativas do exercício que o resultado encontrado não está presente. Dessa forma, possivelmente o exercício exigia a interpretação disso ao analisar as opções. Então eu interpretei que é necessário multiplicar tudo por 2 para encontrar a resposta correta.
                </Text>
              </li>
            </ul>
          </div>
        </Wrapper>
      </Container>
    </main>
  )
}