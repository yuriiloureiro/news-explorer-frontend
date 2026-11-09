import authorPhoto from "../../images/author.jpg";
import "./About.css";

function About() {
  return (
    <section className="about">
      <div className="about__container">
        <img
          className="about__photo"
          src={authorPhoto}
          alt="Foto do autor do projeto"
        />
        <div className="about__content">
          <h2 className="about__title">Sobre o autor</h2>
          <p className="about__text">
            Sou Yuri Loureiro, designer de UX há 4 anos e nômade digital.
            Trabalhar de lugares diferentes me ensinou a olhar para as pessoas
            antes da tela: entender o que elas precisam e transformar isso em
            interfaces simples de usar.
          </p>
          <p className="about__text">
            Estou me aprofundando em desenvolvimento full-stack na TripleTen,
            onde venho estudando React, integração com APIs e construção de
            aplicações completas. Este projeto reúne essa bagagem de design com
            o que estou aprendendo no bootcamp, do primeiro rascunho até o
            código no ar.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
