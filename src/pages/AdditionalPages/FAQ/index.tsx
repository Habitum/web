import { useState } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import Footer from '../../../components/Footer';

import Wave from "../../../components/Wave";

import { StyledHeader, StyledMain } from "../Devs/styles";
import { StyledAnswer, StyledAsk, StyledQuestion, StyledSection } from "./styles";

const Faq = () => {
  const [openAsk, setOpenAsk] = useState({
    ask1: false,
    ask2: false,
    ask3: false
  })

  const handleOpenAsk = (ask: number) => {
    switch (ask) {
      case 1:
        setOpenAsk({ ...openAsk, ask1: !openAsk.ask1 });
        return;
      case 2:
        setOpenAsk({ ...openAsk, ask2: !openAsk.ask2 });
        return;
      case 3:
        setOpenAsk({ ...openAsk, ask3: !openAsk.ask3 });
        return;
    }
  }

  return (
    <>
      <StyledHeader>
        <h1>habitum</h1>

        <h2>FAQ</h2>
      </StyledHeader>

      <StyledMain>
        <Wave />

        <StyledSection>
          <StyledAsk>
            <StyledQuestion onClick={() => handleOpenAsk(1)}>
              Com quanta sequência ou frequência pode ser considerado um hábito?
              {openAsk.ask1 ? <FaAngleUp /> : <FaAngleDown />}
            </StyledQuestion>
            {
              openAsk.ask1 && <StyledAnswer>Geralmente entre três a cinco semanas sem interrupções pode ser enquadrar em um hábito estável.</StyledAnswer>
            }
            <hr />
          </StyledAsk>

          <StyledAsk>
            <StyledQuestion onClick={() => handleOpenAsk(2)}>
              Quais prioridades devo ter durante um gerenciamento de hábitos?
              {openAsk.ask2 ? <FaAngleUp /> : <FaAngleDown />}
            </StyledQuestion>
            {
              openAsk.ask2 && <StyledAnswer>Isso é uma resposta que acaba sendo pessoal, pois depende de cada pessoa. Entretanto, deve-se levar em consideração seu dia-a-dia para ponderar sobre as escolhas do quer fazer primeiro, como por exemplo, trabalho, saúde, carreira, desenvolvimento pessoal, etc...</StyledAnswer>
            }
            <hr />
          </StyledAsk>

          <StyledAsk>
            <StyledQuestion onClick={() => handleOpenAsk(3)}>
              Com quanta sequência ou frequência pode ser considerado um hábito?
              {openAsk.ask3 ? <FaAngleUp /> : <FaAngleDown />}
            </StyledQuestion>
            {
              openAsk.ask3 && <StyledAnswer>Geralmente entre três a cinco semanas sem interrupções pode ser enquadrar em um hábito estável.</StyledAnswer>
            }
            <hr />
          </StyledAsk>
        </StyledSection>
      </StyledMain>

      <Footer />
    </>
  )
}

export default Faq;