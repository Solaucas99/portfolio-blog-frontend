import React from 'react';
import {
  FaCss3Alt,
  FaDatabase,
  FaGithub,
  FaHtml5,
  FaNodeJs,
  FaReact,
} from 'react-icons/fa';
import {
  SiMongodb,
  SiSimpleanalytics,
  SiStyledcomponents,
  SiTypescript,
} from 'react-icons/si';
import { FcGoogle } from 'react-icons/fc';
import { BiTestTube } from 'react-icons/bi';
import { AiFillCloud, AiOutlineCode } from 'react-icons/ai';
import {
  MdOutlineDesignServices,
  MdOutlineMobileFriendly,
} from 'react-icons/md';
import Box from '../Components/Layout/Home/Box';
import BoxList from '../Components/Layout/Home/BoxList';
import Header from '../Components/Layout/Home/Header';
import Slider from '../Components/Layout/Home/Slider';
import { styled } from '../Styles/stitches.config';
import AboutMe from '../Components/Layout/Home/AboutMe';
import ContactUs from '../Components/Layout/Home/ContactUs';

const HomePage = styled('div', {
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  flex: '1',
  justifyContent: 'space-between',
});

function Home() {
  return (
    <HomePage>
      <Header />
      <br />
      <AboutMe />
      <br />
      <Slider />
      <br />
      <>
        <h1 data-aos="fade-left" id="services">
          Serviços/Experiências
        </h1>
        <br />
        <BoxList>
          <Box icon={<AiOutlineCode color="green" size={30} />}>
            <h3>Desenvolvimento Back-End</h3>
            <br />
            <p>
              Desenvolvimento para o Back-End utilizando Node JS. Experiência em
              criações de API de vários tipos como REST e SOAP.
            </p>
          </Box>

          <Box icon={<SiStyledcomponents color="purple" size={30} />}>
            <h3>Desenvolvimento Front-End</h3>
            <br />
            <p>
              Desenvolvimento para o Front-End utilizando HTML/CSS/Vanilla JS/TS
              ou React, as melhores ferramentas do mercado.
            </p>
          </Box>

          <Box icon={<MdOutlineMobileFriendly color="#00abf5" size={30} />}>
            <h3>Desenvolvimento Mobile</h3>
            <br />
            <p>Desenvolvimento para dispositivos móveis usando React Native.</p>
          </Box>

          <Box icon={<AiFillCloud color="orange" size={30} />}>
            <h3>Cloud computing</h3>
            <br />
            <p>
              Conhecimentos em criação de infraestrutura em cloud usando
              serviços como AWS ou Oracle Cloud (Certificado OCI Foundations
              2021).
            </p>
          </Box>

          <Box icon={<FcGoogle size={30} />}>
            <h3>Ferramentas Google</h3>
            <br />
            <p>
              Tenho competências em implementação, troubleshooting e análise de
              Tags dos serviços de tagueamento Google (Ads, Analytics e GTM) a
              nível de especialidade (atuo nesse mercado atualmente).
            </p>
          </Box>

          <Box icon={<MdOutlineDesignServices color="red" size={30} />}>
            <h3>Design UI/UX</h3>
            <br />
            <p>
              Construção de designs modernos e intuitivos usando conceitos
              atualizados no mercado e usando de ferramentas como Photoshop,
              Canva e Figma para o desenvolvimento.
            </p>
          </Box>
        </BoxList>
      </>

      <br />
      <>
        <h1 data-aos="fade-left" id="abilities">
          Ferramental
        </h1>
        <br />
        <BoxList data-aos="fade-right">
          <Box icon={<FaReact color="#00abf5" size={30} />}>
            <h3>React/React Native</h3>
            <br />
            <p>
              Minha maior experiência como desenvolvedor front-end é utilizando
              o framework React, portanto, tanto pra desenvolvimento web como
              mobile, tenho a masterização dos conceitos de utilização da
              ferramenta (incluindo bibliotecas gerais como Styled Components,
              Material UI e outras).
            </p>
          </Box>

          <Box icon={<FaNodeJs color="green" size={30} />}>
            <h3>Node JS</h3>
            <br />
            <p>
              Experiências em construção de API&apos;s e Infraestruturas usando
              NodeJS para o backend usando arquiteturas como API Rest ou SOAP,
              Queues, Microservices ou MVC. Conhecimento geral também no
              framework back-end Express.
            </p>
          </Box>

          <Box
            icon={
              <SiTypescript
                style={{ backgroundColor: 'white' }}
                color="#0072f5"
                size={30}
              />
            }
          >
            <h3>TypeScript</h3>
            <br />
            <p>
              Vasta experiência usando Vanilla JavaScript. Conhecimentos vastos
              do objeto DOM (Eventos, Seletores e Propriedades) e também em
              questões mais complexas, como prototype por exemplo. O
              Conhecimento no TypeScript é vasto, também utilizando conceitos
              como definições, criações e inferência de tipos na linguagem.
            </p>
          </Box>

          <Box icon={<FaCss3Alt color="#0072f5" size={30} />}>
            <h3>CSS3</h3>
            <br />
            <p>
              Experiências e Conhecimentos tantos no CSS puro como em
              bibliotecas de CSS como SASS, Style Components/Stitches e outras.
              Conhecimentos também utilizando frameworks como Bootstrap ou
              Material UI.
            </p>
          </Box>

          <Box icon={<FaHtml5 color="#f58b00" size={30} />}>
            <h3>HTML5</h3>
            <br />
            <p>
              Vasta habilidade em HTML, conhecimento total da maioria das tags
              existentes e alguns conhecimentos como HTML semântico.
            </p>
          </Box>

          <Box icon={<FaDatabase color="gray" size={30} />}>
            <h3>Databases SQL</h3>
            <br />
            <p>
              Habilidades em databases SQL (Relacionais). Experiências com
              bancos em MySQL e Postgree SQL. Conhecimento em estruturação ou
              modelagem e queries complexas. Utilização para sistemas usando
              diretamente ORM&apos;s como Prisma.
            </p>
          </Box>

          <Box icon={<SiMongodb color="green" size={30} />}>
            <h3>Databases NoSQL</h3>
            <br />
            <p>
              Habilidades em databases NoSQLs (Não relacionais) utilizando a
              arquitetura Key-Value. Experiências com bancos mais convencionais
              como Firebase e MongoDB e outros como Redis e Cassandra DB.
            </p>
          </Box>

          <Box icon={<BiTestTube color="green" size={30} />}>
            <h3>Testes Automatizados</h3>
            <br />
            <p>
              Habilidades na criação e execução de diversos tipos de testes
              automatizados, desde aos testes unitários aos testes de
              integração. Experiências anteriores utilizando Jest e Mocha +
              Chai.js. Conhecimentos de conceito de TDD.
            </p>
          </Box>

          <Box icon={<FaGithub color="white" size={30} />}>
            <h3>Versionamento</h3>
            <br />
            <p>
              Conhecimentos com sistemas de versionamento GIT. Maiores
              experiências utilizando o GitHub.
            </p>
          </Box>

          <Box icon={<SiSimpleanalytics color="orange" size={30} />}>
            <h3>Analytics e Tags</h3>
            <br />
            <p>
              Conhecimentos a nível e especialidade utilizando as ferramentas
              Google Tag Manager, Google Analytics e Google Ads. Conhecimentos
              avançados em tagueamento e analises gerais em todas essas
              ferramentas.
            </p>
          </Box>
        </BoxList>
      </>
      <br />
      <ContactUs />
    </HomePage>
  );
}

export default Home;
