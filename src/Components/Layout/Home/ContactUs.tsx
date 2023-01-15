import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { SubmitErrorHandler } from 'react-hook-form/dist/types';
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from 'react-icons/ai';
import { MdLocationPin, MdMail, MdPhone } from 'react-icons/md';
import { toast } from 'react-toastify';
import { useAppContextProvider } from '../../../Providers/AppContextProvider';
import { styled } from '../../../Styles/stitches.config';
import { emailInstance } from '../../../Utils/axios';

declare global {
  interface Window {
    dataLayer: Record<string, any>[]; //eslint-disable-line
  }
}

const Section = styled('section', {
  fontFamily: 'Poppins, sans-serif',
  position: 'relative',
  justifyContent: 'center',
  alignItems: 'center',
  display: 'flex',
  width: '100%',

  '@sm': { minHeight: '300px' },
  '@md': { minHeight: '400px' },
  '@lg': { minHeight: '500px' },
});

const Container = styled('div', {
  position: 'relative',
  minHeight: '600px',
  minWidth: '90%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: '995',
});

const ContactInfo = styled('div', {
  position: 'absolute',
  top: '40px',
  height: 'calc(100% - 80px)',
  background: '$backgroundGradient',
  zIndex: '1',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  boxShadow: '0 20px 20px #0000003f',
  left: '15px',
  color: '$textPrimary',
  border: '1px solid $box',

  '& h2': {
    color: '#textPrimary',
    fontSize: '1.5em',
    fontWeight: 'bold',
  },

  '@sm': { display: 'none' },
  '@md': { display: 'flex', width: '300px', padding: '20px' },
  '@lg': { display: 'flex', width: '350px', padding: '40px' },
});

const UlInfo = styled('ul', {
  position: 'relative',
  margin: '20px 0',
  listStyle: 'none',

  '& li a': {
    position: 'relative',
    color: 'inherit',
    textDecoration: 'none',
    display: 'flex',
    margin: '20px 0',
    cursor: 'pointer',
    alignItems: 'center',
  },

  '& li span:nth-child(1)': {
    width: '25%',
  },

  '& li span:nth-child(2)': {
    width: '75%',
  },
});

const UlIcons = styled('ul', {
  width: '100%',
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  listStyle: 'none',

  '& li button': {
    padding: '10px 30px',
    border: 'none',
    outline: 'none',
    fontSize: '1em',
    fontWeight: '500',
    background: 'none',
    transition: '0.5s',
    cursor: 'pointer',
    color: '$textPrimary',
  },

  '& li button:hover, & li button:active': {
    opacity: '0.6',
  },
});

const ContactForm = styled('div', {
  position: 'absolute',

  background: '$background',
  border: '1px solid $box',
  marginLeft: '150px',
  paddingLeft: '250px',
  height: '90%',
  boxShadow: '0 50px 50px #0000003f',

  '& h2': {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '$backgroundGradient',
  },

  '@sm': {
    marginLeft: '0',
    paddingLeft: '0',
    width: 'calc(100%)',
    padding: '70px 50px',
  },
  '@md': {
    marginLeft: '150px',
    paddingLeft: '250px',
    width: 'calc(100% - 150px)',
  },
  '@lg': {
    marginLeft: '150px',
    paddingLeft: '250px',
    width: 'calc(100% - 150px)',
  },
});

const FormBox = styled('form', {
  position: 'relative',
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  paddingTop: '30px',
});

const InputBox = styled('div', {
  position: 'relative',
  margin: '0 0 20px 0',
  width: '100%',
  background: '$background',

  '&:last-child, &:nth-child(4)': {
    width: '100%',
  },

  '& textarea': {
    minHeight: '120px',
  },

  '& span': {
    position: 'absolute',
    left: '0',
    padding: '5px 0',
    resize: 'none',
    fontSize: '18px',
    fontWeight: '300',
    color: '$textPrimary',
    transition: '0.3s',
    pointerEvents: 'none',
  },

  '& input, & textarea, & button': {
    width: '100% !important',
    padding: '5px 0',
    resize: 'none',
    fontSize: '18px',
    fontWeight: '300',
    color: '$textPrimary',
    border: 'none',
    borderBottom: '1px solid $box',
    outline: 'none',
    background: '$background',
  },

  '& input:focus ~ span, & textarea:focus ~ span, & input:valid ~ span, & textarea:valid ~ span':
    {
      transform: 'translateY(-20px)',
      fontSize: '12px',
      fontWeight: '400',
      letterSpacing: '1px',
      color: '$textSecondary',
    },

  '& button': {
    background: '$backgroundGradient',
    color: '#textPrimary',
    cursor: 'pointer',
    transition: 'all 0.3s ease-in-out',

    '&:hover, &:active': {
      background: '$box',
    },
  },
});

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

function ContactUs() {
  const { register, handleSubmit, reset } = useForm<FormData>();
  const { setLoadingContext } = useAppContextProvider();

  const onSubmit: SubmitHandler<FormData> = async formData => {
    try {
      setLoadingContext({ isLoading: true });
      const { status } = await emailInstance.post('/email-service', formData);

      if (status !== 200) {
        setLoadingContext({ isLoading: false });
        toast.error('Erro desconhecido, tente novamente mais tarde!');
        return;
      }
      setLoadingContext({ isLoading: false });

      // Tag de Evento - GA4
      window.dataLayer.push({
        event: 'contact_form',
      });

      toast.success('Contato enviado com sucesso!');
      reset();
    } catch (err: any) { //eslint-disable-line
      setLoadingContext({ isLoading: false });
      toast.error(err?.message);
    }
  };

  const handleError: SubmitErrorHandler<FormData> = formData => {
    setLoadingContext({ isLoading: false });
    Object.values(formData).forEach(value => {
      toast.error(value.message);
    });
  };

  return (
    <>
      <h1 data-aos="fade-left" id="contact">
        Contato
      </h1>
      <br />
      <Section>
        <Container data-aos="fade-right">
          <ContactInfo>
            <h2>Informações de Contato</h2>
            <UlInfo>
              <li>
                <a href="https://www.google.com.br/maps/preview">
                  <span>
                    <MdLocationPin size={30} />
                  </span>
                  <span>São Paulo - SP</span>
                </a>
              </li>

              <li>
                <a href="mailto:solaucas98@outlook.com">
                  <span>
                    <MdMail size={30} />
                  </span>
                  <span>solaucas98@outlook.com</span>
                </a>
              </li>

              <li>
                <a href="tel:+5511967344692">
                  <span>
                    <MdPhone size={30} />
                  </span>
                  <span>+55 (11) 96734-4692</span>
                </a>
              </li>
            </UlInfo>

            <UlIcons>
              <li>
                <a
                  href="https://github.com/Solaucas99"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button type="button">
                    <AiFillGithub size={40} />
                  </button>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/lucas-da-silva-amorim-1384a0177/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button type="button">
                    <AiFillLinkedin size={40} />
                  </button>
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/Solaucas99"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button type="button">
                    <AiOutlineTwitter size={40} />
                  </button>
                </a>
              </li>
            </UlIcons>
          </ContactInfo>

          <ContactForm>
            <h2>Envie uma mensagem!</h2>
            <FormBox onSubmit={handleSubmit(onSubmit, handleError)}>
              <InputBox>
                <input type="text" required {...register('name')} />
                <span>Nome Completo</span>
              </InputBox>

              <InputBox>
                <input
                  type="text"
                  required
                  {...register('email', {
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Endereço de e-mail inválido',
                    },
                  })}
                />
                <span>E-mail</span>
              </InputBox>

              <InputBox>
                <input
                  type="tel"
                  required
                  {...register('phone', {
                    minLength: {
                      value: 11,
                      message:
                        'O telefone deve ter pelo menos 11 números (DDD + Telefone)',
                    },
                  })}
                />
                <span>Telefone</span>
              </InputBox>

              <InputBox>
                <textarea
                  required
                  {...register('message', {
                    minLength: {
                      value: 15,
                      message:
                        'A sua mensagem deve ter pelo menos 15 carácteres',
                    },
                  })}
                />
                <span>Mensagem</span>
              </InputBox>

              <InputBox>
                <button type="submit">Enviar</button>
              </InputBox>
            </FormBox>
          </ContactForm>
        </Container>
      </Section>
    </>
  );
}

export default ContactUs;
