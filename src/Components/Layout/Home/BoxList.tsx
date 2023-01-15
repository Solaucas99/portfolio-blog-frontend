import React from 'react';
import { styled } from '../../../Styles/stitches.config';

type Props = {
  children: React.ReactNode;
};

const BoxListComponent = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  width: '95%',
  height: '80%',
  padding: '20px 0px',
  justifyContent: 'space-between',
});

function BoxList({ children }: Props) {
  return <BoxListComponent data-aos="fade-right">{children}</BoxListComponent>;
}

export default BoxList;
