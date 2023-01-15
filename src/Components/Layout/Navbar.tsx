import React, { useEffect, useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { RiLightbulbLine } from 'react-icons/ri';
import { MdOutlineDarkMode } from 'react-icons/md';
import logo from '../../Assets/logo/logo-final.png';
import { styled } from '../../Styles/stitches.config';
import { useAppContextProvider } from '../../Providers/AppContextProvider';

const NavbarBackground = styled('nav', {
  width: '100%',
  backgroundColor: 'transparent',
  position: 'fixed',
  top: '0',
  height: '80px',
  display: 'flex',
  transition: 'all 0.4s ease-in-out',
  zIndex: '998',
  padding: '0 50px',

  '@sm': { padding: '0 10px' },
  '@md': { padding: '0 70px' },
  '@lg': { padding: '0 50px' },
});

const NavbarSeparation = styled('div', {
  width: '50%',
  height: '100%',
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'center',
  padding: '0px 12px',
  color: '$navbarMenuText',
});

const NavbarLogo = styled('span', {
  width: '100%',

  '& img': {
    height: '50px',
    width: '50px',
  },
});

const NavbarListMenu = styled('ul', {
  display: 'flex',
  flexDirection: 'row',
  listStyle: 'none',
  width: '100%',
  height: '50%',
});

const NavbarItemDefault = styled('li', {
  fontWeight: 'bold',
  cursor: 'pointer',
  transition: 'all 0.2s ease-in-out',
  borderBottom: `2px solid $textSecondary`,
  padding: '5px 3px',
  color: '$navbarMenuText',

  '@sm': { display: 'none' },
  '@md': { display: 'block' },
  '@lg': { display: 'block' },

  '& a': {
    color: 'inherit',
    textDecoration: 'none',
  },

  '&:hover': {
    color: '$textSecondary',
  },
});

const NavbarItemSwitch = styled('li', {
  position: 'relative',

  '& input': {
    position: 'absolute',
    transform: 'scale(0)',
    zIndex: '30',
  },

  '& label': {
    width: '72px',
    height: '40px',
    padding: '4px',
    borderRadius: '20px',
    background: '$box',
    position: 'absolute',
    cursor: 'pointer',
  },

  '& input:checked ~ label': {
    background: '$background',
  },

  '& input:checked ~ label .handle': {
    transform: 'translateX(32px)',
  },

  '& label, .handle': {
    transition: 'all 0.3s ease-in-out',
  },

  '& .handle': {
    width: '32px',
    height: '32px',
    borderRadius: 'inherit',
    background: '$textPrimary',
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: '$background',
  },
});

function Navbar({ post }: { post: boolean }) {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const { themeContext, setThemeContext } = useAppContextProvider();

  const handleChange = () => {
    if (themeContext.theme === 'dark') {
      setThemeContext({ theme: 'light' });
      return;
    }
    setThemeContext({ theme: 'dark' });
  };

  const handleScroll = () => {
    if (window.scrollY > 130) {
      setScrolled(true);
      return;
    }

    setScrolled(false);
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <NavbarBackground
      css={
        scrolled || post
          ? {
              background: '$backgroundGradient',
              borderBottom: '1px solid $box',
            }
          : { background: 'transparent', borderBottom: 'none' }
      }
    >
      <NavbarSeparation>
        <NavbarLogo>
          <Link smooth to="/#top">
            <img src={logo} alt="logo" />
          </Link>
        </NavbarLogo>
      </NavbarSeparation>

      <NavbarSeparation>
        <NavbarListMenu>
          <NavbarItemDefault>
            <Link smooth to="/#top">
              Home
            </Link>
          </NavbarItemDefault>
          <NavbarItemDefault>
            <Link smooth to="/#about">
              Sobre
            </Link>
          </NavbarItemDefault>
          <NavbarItemDefault>
            <Link smooth to="/#portfolio">
              Portfolio
            </Link>
          </NavbarItemDefault>
          <NavbarItemDefault>
            <Link smooth to="/#services">
              Serviços
            </Link>
          </NavbarItemDefault>
          <NavbarItemDefault>
            <Link smooth to="/#contact">
              Contato
            </Link>
          </NavbarItemDefault>
          <NavbarItemSwitch>
            <input
              id="switch"
              type="checkbox"
              onChange={handleChange}
              checked={themeContext.theme === 'light'}
            />
            <label htmlFor="switch">
              <div className="handle">
                {themeContext.theme === 'dark' ? (
                  <RiLightbulbLine />
                ) : (
                  <MdOutlineDarkMode />
                )}
              </div>
            </label>
          </NavbarItemSwitch>
        </NavbarListMenu>
      </NavbarSeparation>
    </NavbarBackground>
  );
}

export default Navbar;
