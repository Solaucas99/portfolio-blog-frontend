import React from 'react';
import { styled } from '../../Styles/stitches.config';
import whatsapp_logo from '../../Assets/logo/whatsapp-logo.png';

const Link = styled('a', {
  position: 'fixed',
  bottom: '15px',
  right: '10px',
  zIndex: '999',

  '@sm': { width: '60px', height: '60px' },
  '@md': { width: '75px', height: '75px' },
  '@lg': { width: '90px', height: '90px' },

  '& img': {
    width: '100%',
    height: '100%',
  },
});

function WhatsAppButton() {
  return (
    <Link
      href="https://wa.me/5511967344692?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20seus%20trabalhos!"
      target="_blank"
      rel="noreferrer"
    >
      <img src={whatsapp_logo} alt="Whatsapp" />
    </Link>
  );
}

export default WhatsAppButton;
