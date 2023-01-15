import { keyframes } from '@stitches/react';
import React from 'react';
import { styled } from '../../Styles/stitches.config';

const LoadingContainer = styled('div', {
  width: '100%',
  minHeight: '100vh',
  position: 'fixed',
  zIndex: '999',
  background: '#323232EF',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#ffffff',
  fontSize: '20px',
});

const MiddleAnimation = styled('div', {
  top: '43%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  position: 'absolute',
});

const loaderAnimation = keyframes({
  '0%': {
    transform: 'scaleY(0.1)',
    background: '',
  },
  '50%': {
    transform: 'scaleY(1)',
    background: '$box',
  },
  '100%': {
    transform: 'scaleY(0.1)',
    background: 'transparent',
  },
});

const Bar = styled('div', {
  width: '10px',
  height: '70px',
  background: '$background',
  display: 'inline-block',
  transformOrigin: 'bottom center',
  borderTopRightRadius: '20px',
  borderTopLeftRadius: '20px',
  // boxShadow: '5px 10px 20px inset rgba(255,23,25.2)',
  animation: `${loaderAnimation} 1.2s linear infinite`,
});

type LoadingProps = { isLoading: boolean };

function Loading({ isLoading }: LoadingProps) {
  return isLoading ? (
    <LoadingContainer>
      <MiddleAnimation>
        {Array(5)
          .fill(0)
          .map((v, i) => i + 1)
          .map((value, i) => (
            <Bar key={value} css={{ animationDelay: `${(i + 1) / 10}s` }} />
          ))}
      </MiddleAnimation>
      <p>Carregando...</p>
    </LoadingContainer>
  ) : null;
}

export default Loading;
