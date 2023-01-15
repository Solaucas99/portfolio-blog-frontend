import React from 'react';
import image from '../Assets/images/overlay.png';
import Footer from '../Components/Layout/Home/Footer';
import Loading from '../Components/Layout/Loading';
import WhatsAppButton from '../Components/Layout/WhatsAppButton';
import { useAppContextProvider } from '../Providers/AppContextProvider';
import { darkTheme, styled } from './stitches.config';

type Props = {
  children: React.ReactNode;
};

const ContainerBody = styled('div', {
  color: '$textPrimary',
  width: '100%',
  minHeight: '100%',
  backgroundColor: '$background',
  backgroundImage: `url(${image})`,
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  overflowX: 'hidden',
});

function GlobalDiv({ children }: Props) {
  const { themeContext, loadingContext } = useAppContextProvider();

  return (
    <>
      <Loading isLoading={loadingContext.isLoading} />
      <ContainerBody className={themeContext.theme === 'dark' ? darkTheme : ''}>
        {children}
        <br />
        <Footer />
      </ContainerBody>
      <WhatsAppButton />
    </>
  );
}

export { GlobalDiv };
