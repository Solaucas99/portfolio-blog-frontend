import React from 'react';
import { styled } from '../../../Styles/stitches.config';
import profilePhoto from '../../../Assets/images/profile2.jpeg';

const GeneralDiv = styled('div', {
  width: '90%',

  fontSize: '1em',
  padding: '10px 0',
  display: 'flex',
  position: 'relative',
  background: '$background',
  border: '1px solid $box',
  boxShadow: '0 15px 50px #0000003f',

  '@sm': { height: '830px' },
  '@md': { height: '650px' },
  '@lg': { height: '700px' },
});

const Background = styled('div', {
  width: '100%',
  height: '100%',
  background: '$backgroundGradient right no-repeat',

  padding: '20px',
  overflow: 'hidden',
  position: 'absolute',
  top: '0',
  right: '0',

  '@sm': { backgroundSize: '20%' },
  '@md': { backgroundSize: '25%' },
  '@lg': { backgroundSize: '30%' },
});

const TextDiv = styled('div', {
  height: '90%',
  position: 'absolute',
  color: '$textPrimary',

  '& ul': {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    minHeight: '250px',
    height: '100%',
    fontWeight: 'bold',
    padding: '10px 0',

    '@sm': { minHeight: '320px' },
    '@md': { minHeight: '250px' },
    '@lg': { minHeight: '250px' },
  },

  '@sm': { width: '60%', left: '10px', fontSize: '0.8em' },
  '@md': { width: '60%', left: '25px', fontSize: '1em' },
  '@lg': { width: '40%', left: '50px', fontSize: '1.1em' },

  '& h2': {
    textAlign: 'center',
  },
});

const ImageDiv = styled('div', {
  position: 'absolute',
  background: '$background',
  borderRadius: '20px',
  overflow: 'hidden',

  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },

  '@sm': {
    right: '20px',
    display: 'block',
    width: '25%',
    height: '30%',
    top: '30%',
  },
  '@md': {
    right: '50px',
    display: 'block',
    width: '25%',
    height: '50%',
    top: '20%',
  },
  '@lg': {
    right: '230px',
    display: 'block',
    width: '25%',
    height: '70%',
    top: '10%',
  },
});

function AboutMe() {
  return (
    <>
      <h1 data-aos="fade-left" id="about">
        Sobre mim
      </h1>
      <br />
      <GeneralDiv data-aos="fade-right">
        <TextDiv>
          <h2>Ol??! Eu me chamo Lucas!</h2>
          <br />

          <p>
            Ol??! Seja bem vindo ao meu perfil! Eu sou o Lucas, tenho 24 anos e
            moro em S??o Paulo. <br />
            Sou apaixonado por desenvolvimento web e atualmente sou um Fullstack
            Developer e Web Analytics. Fan??tico por todas as ??reas que a
            tecnologia nos oferece. Busco sempre ser um profissional completo e
            que busca um aprendizado cont??nuo para se manter atualizado em tudo
            que for poss??vel, visando ser um profissional/desenvolvedor ??gil,
            que solucione problemas complexos, que desenvolva solu????es de forma
            escal??vel, ??teis e tamb??m eficientes.
            <br /> Meu idioma nativo ?? o <b>Portugu??s</b>, mas eu tamb??m tenho o
            meu <b>Ingl??s avan??ado (conversacional)</b> e Espanhol iniciante.
            <br />
            <br />
            Segue abaixo uma descri????o das minhas experi??ncias anteriores e
            posi????o atual no mercado:
            <br />
            <ul>
              <li>
                - Forma????o superior em An??lise e Desenvolvimento de Sistemas
                pela Universidade Est??cio de S?? e atualmente no cargo de Web
                Analytics & Analista Desenvolvedor na Cognizant Technology
                Solutions trabalhando diretamente em solu????es focadas nos
                clientes.
              </li>

              <li>
                - Experi??ncias anteriores como Analista de Infraestrutura J??nior
                (Auxiliar), Estagi??rio e Jovem Aprendiz na empresa Shimadzu do
                Brasil, onde fiquei 3 anos e 3 meses.
              </li>
            </ul>
          </p>
        </TextDiv>
        <Background />
        <ImageDiv>
          <img alt="profile_photo" src={profilePhoto} />
        </ImageDiv>
      </GeneralDiv>
    </>
  );
}

export default AboutMe;
