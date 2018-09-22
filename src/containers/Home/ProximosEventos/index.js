import React from "react";
import PropTypes from "prop-types";
import { Wrapper } from "./UI";

const ProximosEventos = () => (
  <Wrapper>
    <h2>Próximos Eventos</h2>
    <p>
      Não encontrou seu evento favorito abaixo? <a href="">Adicione-o neste link</a>
    </p>
    <ul>
      <li>
        <time>25.09</time>
        <h2>14º Go talks</h2>
        <p>go-belo-horizonte</p>
        <a href="" target="_blank" rel="noopener">
          Visite o site do evento
        </a>
      </li>
    </ul>
    <p>
      Não encontrou seu evento favorito acima? <a href="">Adicione-o neste link</a>
    </p>
  </Wrapper>
);

ProximosEventos.propTypes = {};

export default ProximosEventos;
