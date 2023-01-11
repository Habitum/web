import { FaGithub, FaLinkedin } from 'react-icons/fa';

import Wave from "../../../components/Wave";
import Footer from '../../../components/Footer';

import { iDevCard } from './types';

import { LinkIconFooter } from "../../../components/Footer/styles";
import { StyledDevCard, StyledHeader, StyledMain, StyledSection } from "./styles";

const DevCard = ({ img, name, github, linkedin }: iDevCard) => {
  return (
    <StyledDevCard>
      <img src={img} alt='Avatar' />
      <h3>{name}</h3>
      <div>
        <LinkIconFooter
          href={github}
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </LinkIconFooter>
        <LinkIconFooter
          href={linkedin}
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </LinkIconFooter>
      </div>
    </StyledDevCard>
  )
}

const Devs = () => {
  window.scrollTo(0, 0);

  return (
    <>
      <StyledHeader>
        <h1>habitum</h1>

        <h2>Desenvolvedores</h2>
      </StyledHeader >

      <StyledMain>
        <Wave />

        <StyledSection>
          <DevCard
            img='https://ca.slack-edge.com/TQZR39SET-U03JQQV8DJB-9dac9f8d1b85-512'
            name='Gabriela Fontoura'
            github='https://github.com/gabifontoura'
            linkedin='https://www.linkedin.com/in/gabriela-garcia-fontoura/'
          />
          <DevCard
            img='https://ca.slack-edge.com/TQZR39SET-U03P34Z6QDC-0894741e8f26-512'
            name='Jacqueline Kajiya'
            github='https://github.com/JacqueKajiya'
            linkedin='https://www.linkedin.com/in/jacqueline-kajiya-83b359111/'
          />
          <DevCard
            img='https://media.licdn.com/dms/image/C4D03AQFAJ_iGdcL6jA/profile-displayphoto-shrink_800_800/0/1661393967215?e=1678924800&v=beta&t=-_P2ag2ddPk-cbo65loxurjzWlxDlsZG66gHpJUIfGg'
            name='Maikol Santos'
            github='https://github.com/MaikolSantos'
            linkedin='https://www.linkedin.com/in/maikol-lourencon/'
          />
          <DevCard
            img='https://ca.slack-edge.com/TQZR39SET-U03QSJUNPCG-0fc978fe5e81-512'
            name='Jorge Rodrigo'
            github='https://github.com/Jorge-Rodrigo'
            linkedin='https://www.linkedin.com/in/jorge-rodrigo-monteiro-42b00b207/'
          />
          <DevCard
            img='https://avatars.githubusercontent.com/u/110141843?v=4'
            name='Murilo Sena'
            github='https://github.com/Murilo517'
            linkedin='https://www.linkedin.com/in/murilo-sena-rocha-640280246/'
          />
          <DevCard
            img='https://ca.slack-edge.com/TQZR39SET-U03Q512G9G9-32f9481c256e-512'
            name='Leandro Veloso'
            github='https://github.com/leandrovsk'
            linkedin='https://www.linkedin.com/in/leandro-veloso-de-siqueira-143430128/'
          />
          <DevCard
            img='https://ca.slack-edge.com/TQZR39SET-U03L66Z28V6-51b2a94d86da-512'
            name='Luan Florêncio'
            github='https://github.com/LuanFlorencioo'
            linkedin='https://www.linkedin.com/in/luanflorencioo'
          />
        </StyledSection>
      </StyledMain>

      <Footer />
    </>
  )
}

export default Devs;
