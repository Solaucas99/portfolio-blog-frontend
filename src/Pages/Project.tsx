import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import { AiFillGithub } from 'react-icons/ai';
import { toast } from 'react-toastify';
import { MdMonitor } from 'react-icons/md';
import Navbar from '../Components/Layout/Navbar';
import { styled } from '../Styles/stitches.config';
import { instance } from '../Utils/axios';
import { useAppContextProvider } from '../Providers/AppContextProvider';
import { PostData, StrapiData, StrapiEndpointData } from '../Types/strapi-data';

const PostPage = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  flex: '1',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
});

const PostDiv = styled('div', {
  width: '100%',
  background: '$postBackground',
  top: '80px',
  position: 'relative',
  color: '$textPrimary',
  overflowY: 'auto',

  '@sm': { padding: '10px 50px' },
  '@md': { padding: '30px 75px' },
  '@lg': { padding: '50px 100px' },

  '& .post_image': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

    '& a': {
      textDecoration: 'none',
      marginTop: '10px',

      '@sm': { width: '60%' },
      '@md': { width: '40%' },
      '@lg': { width: '20%' },
    },

    '& a button.repoButton': {
      outline: 'none',
      width: '100%',
      padding: '10px',

      background: 'transparent',
      border: '1px solid $box',
      color: '$textPrimary',
      cursor: 'pointer',
      transition: 'all 0.3s ease-in-out',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',

      '@sm': { fontSize: '15px' },
      '@md': { fontSize: '17px' },
      '@lg': { fontSize: '20px' },

      '&:hover, &:active': {
        background: '$box',
      },
    },

    '& img': {
      width: '80%',
      height: '80%',
    },
  },

  '& .markdown': {
    whiteSpace: 'pre-wrap',
    padding: '10px',
    fontSize: '1.2em',
    background: '$background',

    '& ul': {
      listStyle: 'none',

      '& li::before': {
        content: '- ',
        marginLeft: '5px',
      },
    },
  },

  '& h1': {
    position: 'relative',
    fontSize: '2em',
    zIndex: '1',
    padding: '0 0 10px 0',
    textTransform: 'uppercase',
    textAlign: 'center',
    borderBottom: '1px solid $box',
    margin: '15px 0px',
  },
});

function Project() {
  const [postData, setPostData] = useState<StrapiData<PostData> | null>(null);
  const { id } = useParams();
  const { setLoadingContext } = useAppContextProvider();

  useEffect(() => {
    if (!id) return;
    const fetchData = async (postId: string) => {
      try {
        setLoadingContext({ isLoading: true });
        const { data } = await instance.get<
          StrapiEndpointData<StrapiData<PostData>>
        >(`/posts/${postId}?populate=images&populate=post_image`);

        setPostData(data.data);
        setLoadingContext({ isLoading: false });
      } catch (err: any) { //eslint-disable-line
        setLoadingContext({ isLoading: false });
        toast.error(err.message);
      }
    };

    fetchData(id);
  }, [id, setLoadingContext]);

  return (
    <PostPage>
      <Navbar post />
      {postData ? (
        <PostDiv>
          <h1>{postData.attributes.title}</h1>
          <br />
          <div className="post_image">
            <img
              src={`${postData.attributes.post_image?.data.attributes.url}`}
              alt="Project overview"
            />
            <br />
            {postData.attributes.repo_link ? (
              <a href={postData.attributes.repo_link}>
                <button className="repoButton" type="button">
                  <span>Ver repositório</span> <AiFillGithub size={40} />
                </button>
              </a>
            ) : null}

            {postData.attributes.preview_link ? (
              <a href={postData.attributes.preview_link}>
                <button className="repoButton" type="button">
                  <span>Ver projeto</span> <MdMonitor size={40} />
                </button>
              </a>
            ) : null}
          </div>
          <br />
          <ReactMarkdown className="markdown">
            {postData.attributes.content}
          </ReactMarkdown>
          <br />

          <h1>Imagens</h1>
          <br />
          <ImageGallery
            items={postData.attributes.images?.data.map(image => ({
              original: `${image.attributes.url}`,
              thumbnail: `${image.attributes.formats.thumbnail.url}`,
            }))}
          />
          <br />
        </PostDiv>
      ) : null}
    </PostPage>
  );
}

export default Project;
