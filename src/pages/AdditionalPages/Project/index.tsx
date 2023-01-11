import { Link } from "react-router-dom";

import Button from "../../../components/Button";
import Wave from "../../../components/Wave";

import { StyledContainer, StyledMain, StyledSection } from "./styles";

const Project = () => {
  window.scrollTo(0, 0);

  return (
    <StyledMain>
      <div className="background-purple">
        <Wave />
      </div>

      <StyledContainer>
        <h1>habitum</h1>

        <Link to='/'>
          <Button
            name='Voltar'
            variant="primary"
          />
        </Link>

        <StyledSection>
          <p>O <strong>habitum</strong> nasceu de um projeto em conjunto realizado por uma equipe de estudante da <a href="https://kenzie.com.br/">Kenzie Academy Brasil</a>, onde tivemos o prazer de por em prática tudo aquilo que absorvemos durante 6 meses no curso de formação Full Stack, tendo este projeto focado exclusivamente nas stacks e tecnologias Front End que aprendemos e conhecemos.</p>

          <p>Este <strong>projeto</strong> foi realizado com intuito de testar e desafiar nossas habilidades em <strong>Hard Skills</strong>, Tanto as tecnologias mais recente no mercado quanto bibliotecas e libs em alta, e <strong>Soft Skills</strong>, levando em consideração comunicação, organização e gestão de tempo para gestão do projeto. Trabalhamos em <strong>Metodologia Scrum</strong> para já adaptarmos num ambiente de trabalho, e o fruto disso saiu uma colaboração ainda maior.</p>

          <p>Os <strong>desenvolvedores</strong> responsáveis pela elaboração e construção do habitum são constituídos por: Gabriela Fontoura, Jacqueline Kajiya, Maikol Santos, Jorge Rodrigo, Murilo Sena, Leandro Veloso e Luan Florêncio. Se deseja saber mais sobre o time de devs e seus respectivos contatos, <Link to='/devs'>clique aqui</Link>.</p>

          <hr />

          <p>A maior parte das pessoas tem alguma noção da <strong>mudança de hábitos</strong> que querem fazer ou deixar de fazer para ter uma vida mais <strong>produtiva</strong> e/ou <strong>saudável</strong>, seja física ou mental. Seja se alimentar melhor, estudar mais, meditar, tocar algum instrumento, etc.</p>

          <p>O estilo de vida que leva-se hoje é tão <strong>acelerado</strong> que perdemos a conexão do que estamos fazendo. Por isso algumas atitudes acabam se tornando <strong>automáticas</strong> a ponto de tornar a inclusão de novos hábitos complexa.</p>

          <hr />

          <p>Assim, pensamos e criamos o <strong>habitum</strong>. O App de desenvolvimento de <strong>hábitos</strong> será baseado no método de <strong>gameficação</strong>. Será possível a criação de hábitos, elaboração de recompensa pessoal, monitoramento através de ticagem do dia em que o hábito foi concluído, pontuações e incentivos no perfil do usuário de acordo com cada <strong>meta cumprida</strong>.</p>

          <p>O propósito é conectar o usuário com o sentimento de <strong>comprometimento</strong> e <strong>responsabilidade</strong>, junto com a medição de progresso como forma de incentivo.</p>
        </StyledSection>
      </StyledContainer>
    </StyledMain>
  )
}

export default Project;
