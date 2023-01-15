import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from 'react-icons/ai';
import { styled } from '../../../Styles/stitches.config';
import Navbar from '../Navbar';

import profilePhoto from '../../../Assets/images/profile.jpg';

const HeaderBackground = styled('div', {
  background: '$backgroundGradient',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  '@sm': {
    height: '500px',
    fontSize: '12px',
  },

  '@md': {
    height: '600px',
    fontSize: '14px',
  },

  '@lg': {
    height: '700px',
    fontSize: '16px',
  },
});

const HeaderCard = styled('div', {
  position: 'relative',
  background: '$background',
  color: '$textPrimary',
  boxShadow: '0 35px 80px rgba(0,0,0,0.15)',
  transition: '0.5s',

  '&:after': {
    content: '',
    position: 'absolute',
    width: '0',
    height: '0',
  },

  '&:hover .details, &:active .details,': {
    transform: 'translateY(0px)',
  },

  '@sm': {
    width: '300px',
    height: '150px',
    borderRadius: '5px',

    '&:hover, &:active': {
      height: '200px',
    },

    '&:after': {
      borderBottom: '25px solid $background',
      borderLeft: '25px solid transparent',
      borderRight: '25px solid transparent',
      bottom: '-5px',
      left: '-15px',
      transform: 'rotate(-10deg)',
    },

    '&:hover .imgBox, &:active .imgBox': {
      width: '90px',
      height: '90px',
    },
  },

  '@md': {
    width: '450px',
    height: '160px',
    borderRadius: '7px',

    '&:hover, &:active': {
      height: '250px',
    },

    '&:after': {
      borderBottom: '35px solid $background',
      borderLeft: '35px solid transparent',
      borderRight: '35px solid transparent',
      bottom: '-5px',
      left: '-25px',
      transform: 'rotate(-10deg)',
    },

    '&:hover .imgBox, &:active .imgBox': {
      width: '110px',
      height: '110px',
    },
  },

  '@lg': {
    width: '500px',
    height: '180px',
    borderRadius: '10px',

    '&:hover, &:active': {
      height: '400px',
    },

    '&:after': {
      borderBottom: '45px solid $background',
      borderLeft: '45px solid transparent',
      borderRight: '45px solid transparent',
      bottom: '-5px',
      left: '-35px',
      transform: 'rotate(-10deg)',
    },

    '&:hover .imgBox, &:active .imgBox': {
      width: '200px',
      height: '200px',
    },
  },
});

const ImgBox = styled('div', {
  position: 'absolute',
  left: '50%',
  top: '-50px',
  transform: 'translateX(-50%)',
  width: '130px',
  height: '130px',
  background: '$background',
  borderRadius: '20px',
  boxShadow: '0 15px 50px rgba(0,0,0,0.35)',
  overflow: 'hidden',
  transition: '0.5s',

  '& img': {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
});

const Content = styled('div', {
  position: 'absolute',
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-end',
  overflow: 'hidden',
  color: '$textPrimary',
});

const Details = styled('div', {
  width: '100%',
  transition: '0.5s',
  textAlign: 'center',
  flex: '0 0 33%',
  display: 'flex',
  flexDirection: 'column',

  '& h2': {
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 'bold',
    color: '$textPrimary',
  },

  '& h2 span': {
    fontWeight: '500',
    opacity: '0.5',
    color: '$textPrimary',
  },

  '@sm': {
    padding: '0px',
    transform: 'translateY(105px)',

    '& h2': {
      fontSize: '1.2em',
      lineHeight: '1.2em',
    },

    '& h2 span': {
      fontSize: '0.75em',
    },
  },

  '@md': {
    padding: '25px',
    transform: 'translateY(135px)',

    '& h2': {
      fontSize: '1.2em',
      lineHeight: '1.2em',
    },

    '& h2 span': {
      fontSize: '0.75em',
    },
  },

  '@lg': {
    padding: '40px',
    transform: 'translateY(150px)',

    '& h2': {
      fontSize: '1.25em',
      lineHeight: '1.2em',
    },

    '& h2 span': {
      fontSize: '0.75em',
    },
  },
});

const Data = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  margin: '10px 0',
  height: '100%',

  '& div': {
    width: '100%',
  },

  '& div h3': {
    fontSize: '1em',
    color: '$textPrimary',
    lineHeight: '1.2em',
    fontWeight: '600',
  },

  '& div h3 span': {
    fontSize: '0.85em',
    opacity: '0.5',
    fontWeight: '400',
  },
});

const ActionBtn = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',

  '& button': {
    padding: '10px 30px',
    border: 'none',
    outline: 'none',
    fontSize: '1em',
    fontWeight: '500',
    background: 'none',
    color: '$box',
    transition: '0.5s',
    cursor: 'pointer',
  },

  '& button:hover, & button:active': {
    color: '$textPrimary',
  },
});

function Header() {
  return (
    <HeaderBackground>
      <Navbar post={false} />

      <HeaderCard className="animate__animated animate__bounceInLeft">
        <ImgBox className="imgBox">
          <img src={profilePhoto} alt="profilePhoto" />
        </ImgBox>
        <Content>
          <Details className="details">
            <h2>
              Lucas Amorim
              <br />
              <span>Analista Desenvolvedor Web</span>
            </h2>
            <Data>
              <div>
                <h3>
                  16
                  <br />
                  <span>Projetos</span>
                </h3>
              </div>

              <div>
                <h3>
                  240
                  <br />
                  <span>Conexões</span>
                </h3>
              </div>

              <div>
                <h3>
                  49
                  <br />
                  <span>Seguidores</span>
                </h3>
              </div>
            </Data>

            <ActionBtn>
              <a
                href="https://github.com/Solaucas99"
                target="_blank"
                rel="noreferrer"
              >
                <button type="button">
                  <AiFillGithub size={40} />
                </button>
              </a>
              <a
                href="https://www.linkedin.com/in/lucas-da-silva-amorim-1384a0177/"
                target="_blank"
                rel="noreferrer"
              >
                <button type="button">
                  <AiFillLinkedin size={40} />
                </button>
              </a>
              <a
                href="https://twitter.com/Solaucas99"
                target="_blank"
                rel="noreferrer"
              >
                <button type="button">
                  <AiOutlineTwitter size={40} />
                </button>
              </a>
            </ActionBtn>
          </Details>
        </Content>
      </HeaderCard>
    </HeaderBackground>
  );
}

export default Header;
