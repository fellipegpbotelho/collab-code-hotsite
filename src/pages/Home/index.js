import React from "react";

import { Wrapper } from "./styles";

import SubtitleCollab from "../../objects/SubtitleCollab";
import TextCollab from "../../objects/TextCollab";

import FormLead from "../../components/FormLead";
import TitleDoFrontAoEnd from "../../components/TitleDoFrontAoEnd";
import VideoDoFrontAoEnd from "../../components/VideoDoFrontAoEnd";

export default function Home() {
  return (
    <Wrapper>
      <TitleDoFrontAoEnd />
      <SubtitleCollab>
        Um guia completo para quem quer se tornar um Desenvolvedor Front End
      </SubtitleCollab>
      <VideoDoFrontAoEnd />
      <TextCollab>
        Quer receber novidades da próxima turma, só colocar seu e-mail abaixo:{" "}
      </TextCollab>
      <FormLead />
    </Wrapper>
  );
}
