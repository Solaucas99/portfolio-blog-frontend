import React, { useEffect, useState } from 'react';
import Glide, { Options } from '@glidejs/glide';
import { Breakpoints } from '@glidejs/glide/dist/glide.modular.esm';

import '@glidejs/glide/dist/css/glide.core.min.css';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { styled } from '../../../Styles/stitches.config';
import { instance } from '../../../Utils/axios';
import {
  CarouselData,
  StrapiData,
  StrapiEndpointData,
} from '../../../Types/strapi-data';
import { useAppContextProvider } from '../../../Providers/AppContextProvider';

function widthCarouselChecker() {
  const width = window.innerWidth > 0 ? window.innerWidth : window.screen.width;

  if (width <= 768) return 1;
  if (width <= 1200) return 2;
  return 3;
}

const sliderConfiguration: Partial<Options> = {
  gap: 0,
  perView: widthCarouselChecker(),
  startAt: 0,
  type: 'carousel',
  autoplay: 4000,
};

const DivSlider = styled('div', {
  width: '100%',
  position: 'relative',

  '& div.glide__arrows': {
    position: 'absolute',
    top: '40%',
    width: '100%',
    display: 'flex',
    padding: '0',
    justifyContent: 'space-between',
  },

  '& div.glide__arrows button': {
    padding: '0px',
    border: 'none',
    borderRadius: '5px',
    background: 'none',
    cursor: 'pointer',
    color: '$textPrimary',
    transition: '0.5s',

    '&:hover, &:active': {
      color: '$textSecondary',
    },
  },

  '& div.glide__arrows button.glide__arrow--prev': {
    position: 'absolute',
    left: '2px',
  },

  '& div.glide__arrows button.glide__arrow--next': {
    position: 'absolute',
    right: '2px',
  },
});

const BoxCard = styled('div', {
  position: 'relative',

  background: '#fff',
  boxShadow: '0 30px 30px #0000003f',
  cursor: 'pointer',
  marginBottom: '25px',

  '@sm': { width: '200px', height: '250px' },
  '@md': { width: '300px', height: '350px' },
  '@lg': { width: '400px', height: '450px' },

  '&:hover div.imgBox img, &:active div.imgBox img': {
    opacity: '0',
  },

  '&:hover div.content, &:active div.content': {
    width: '100%',
    height: '100%',
    bottom: '0',
    left: '0',
    border: '1px solid $box',
  },

  '&:hover div.content div, &:active div.content div': {
    opacity: '1',
    transitionDelay: '0.3s',
  },
});

const ImgBoxCard = styled('div', {
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
});

const ImgCard = styled('img', {
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  transition: '0.5s',
  padding: '10px',
});

const ContentBox = styled('div', {
  position: 'absolute',
  bottom: '20px',
  left: '10%',
  width: '80%',
  height: '70px',
  background: '$background',
  transition: '0.5s',
  overflow: 'hidden',
  padding: '15px',
  boxSizing: 'border-box',
  color: '$textPrimary',

  '& div.description': {
    margin: '10px 0 0',
    padding: '0',
    opacity: '0',
    lineHeight: '1.2em',
    transition: '0.5s',
    textAlign: 'justify',
    fontFamily: 'Poppins, sans-serif;',
    position: 'relative',
    height: '100%',

    '& button': {
      position: 'absolute',
      outline: 'none',
      background: 'transparent',
      color: '$textPrimary',
      padding: '10px',
      bottom: '35px',
      left: '5px',
      cursor: 'pointer',
      transition: 'all 0.3s ease-in-out',
      border: '1px solid $box',

      '&:hover, &:active': {
        background: '$box',
      },
    },
  },
});

function Slider() {
  const [carouselData, setCarouselData] = useState<StrapiData<CarouselData>[]>(
    []
  );
  const { setLoadingContext } = useAppContextProvider();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoadingContext({ isLoading: true });
        const { data } = await instance.get<
          StrapiEndpointData<StrapiData<CarouselData>>
        >('/carousels?populate=cover&populate=post');

        setCarouselData(data.data);

        const slider = new Glide('.glide', sliderConfiguration);
        slider.mount({ Breakpoints });
        setLoadingContext({ isLoading: false });
      } catch (err: any) { //eslint-disable-line
        setLoadingContext({ isLoading: false });
        toast.error(err.message);
      }
    };

    fetchData();
  }, [setLoadingContext]);

  return (
    <>
      <h1 data-aos="fade-left" id="portfolio">
        Meus Projetos
      </h1>
      <br />
      <DivSlider data-aos="fade-right">
        {carouselData.length > 0 ? (
          <div className="glide">
            <div className="glide__track" data-glide-el="track">
              <ul
                className="glide__slides"
                style={{ padding: '40px 0px', width: '80%' }}
              >
                {carouselData.map(carousel => (
                  <li className="glide__slide" key={carousel.id}>
                    <BoxCard>
                      <ImgBoxCard className="imgBox">
                        <ImgCard
                          src={`${carousel.attributes.cover.data.attributes.url}`}
                          alt={
                            carousel.attributes.cover.data.attributes.caption
                          }
                        />
                      </ImgBoxCard>

                      <ContentBox className="content">
                        <h3>{carousel.attributes.title}</h3>
                        <div className="description">
                          <ReactMarkdown>
                            {carousel.attributes.description}
                          </ReactMarkdown>
                          <br />
                          <Link
                            to={`/projects/${carousel.attributes.post.data.id}`}
                          >
                            <button type="button">Ver mais</button>
                          </Link>
                        </div>
                      </ContentBox>
                    </BoxCard>
                  </li>
                ))}
              </ul>
            </div>
            <div className="glide__arrows" data-glide-el="controls">
              <button
                className="glide__arrow glide__arrow--prev"
                data-glide-dir="<"
                type="button"
              >
                <AiOutlineLeft size={60} />
              </button>

              <button
                className="glide__arrow glide__arrow--next"
                data-glide-dir=">"
                type="button"
              >
                <AiOutlineRight size={60} />
              </button>
            </div>
          </div>
        ) : null}
      </DivSlider>
    </>
  );
}

export default Slider;
