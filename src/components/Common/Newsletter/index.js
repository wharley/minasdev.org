import React from "react";
import PropTypes from "prop-types";
import { Wrapper } from "./UI";

const Newsletter = () => (
  <Wrapper>
    <form
      id="minasdev-newsletter-form"
      action="https://minasdev.us3.list-manage.com/subscribe/post?u=50258ba79635076ed976b3238&amp;id=c864b0ba02"
      method="post"
    >
      <label htmlFor="minasdev-newsletter-email">Newsletter</label>
      <div>
        <p>
          <a
            target="_blank"
            rel="noopener"
            href="https://github.com/minasdev/newsletter/issues?utm_source=minasdevorg&amp;utm_medium=cta&amp;utm_campaign=minasdevorg"
          >
            Contribua para nossa newsletter
          </a>
          , ou:
        </p>
        <input
          id="minasdev-newsletter-email"
          type="text"
          name="EMAIL"
          placeholder="Digite seu email e receba novidades do Minas Dev"
        />
      </div>
      <button type="submit" name="subscribe">
        Cadastrar
      </button>
    </form>
  </Wrapper>
);

Newsletter.propTypes = {};

export default Newsletter;
