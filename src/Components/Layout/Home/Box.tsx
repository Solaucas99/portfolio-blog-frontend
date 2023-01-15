import React from 'react';
import { styled } from '../../../Styles/stitches.config';

type Props = {
  children: React.ReactNode;
  icon: JSX.Element;
};

const PostBox = styled('div', {
  background: '$background',
  minHeight: '370px',
  border: '1px solid $box',
  margin: '5px 0px',
  padding: '15px',
  boxShadow: '0 15px 50px #0000003f',
  color: '$textPrimary',
  fontFamily: 'Poppins, sans-serif;',
  position: 'relative',

  '@sm': { flex: '0 50%', fontSize: '13px' },
  '@md': { flex: '0 0 32%', fontSize: '14px' },
  '@lg': { flex: '0 0 32%', fontSize: '15px' },

  '& svg': {
    position: 'absolute',
    bottom: '5px',
    right: '5px',
  },
});

function Box({ children, icon }: Props) {
  return (
    <PostBox>
      {icon}
      {children}
    </PostBox>
  );
}

export default Box;
