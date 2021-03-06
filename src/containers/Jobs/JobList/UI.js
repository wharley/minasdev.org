import styled from "styled-components";

export const Wrapper = styled.section`
  border-top: 3px solid #e64c3b;
  background-color: #fff;
  padding: 40px 20px 0;

  @media screen and (max-width: 767px) {
    padding: 20px 20px 0;
  }
`;

export const Content = styled.ul`
  margin: 0 auto;
  max-width: 1024px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  font-family: montserrat-black, sans-serif;
  font-size: 3.5rem;
  text-transform: uppercase;
  line-height: 3.2rem;
  color: rgb(230, 76, 59);
  text-align: center;
  margin-bottom: 40px;

  @media screen and (max-width: 767px) {
    font-size: 2.5rem;
    margin-bottom: 20px;
  }
`;

export const Search = styled.input`
  max-width: 1024px;
  width: 100%;
  margin: 0px auto;
  padding: 20px;
  display: block;
  border: 2px #e64c3b solid;
  border-radius: 5px;
  color: #e64c3b;
  margin: 0 auto 15px;

  &::-webkit-input-placeholder {
    color: #e64c3b;
  }

  &:-moz-placeholder {
    color: #e64c3b;
  }

  &::-moz-placeholder {
    color: #e64c3b;
  }

  &:-ms-input-placeholder {
    color: #e64c3b;
  }

  @media screen and (max-width: 767px) {
    margin-bottom: 30px;
    padding: 10px;
  }
`;

export const Filters = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  margin: 0px auto 40px;
  gap: 10px;

  @media screen and (max-width: 1023px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  @media screen and (max-width: 767px) {
    margin: 0px auto 30px;
    display: none;
  }
`;

export const ButtonFilter = styled.button`
  font-family: "Montserrat-Bold", sans-serif;
  font-size: 0.88rem;
  background-color: ${({ active }) => (active ? "#e64c3b" : "#ffffff")};
  border: 2px solid #e64c3b;
  border-radius: 5px;
  cursor: pointer;
  display: inline-block;
  padding: 10px;
  color: ${({ active }) => (active ? "#ffffff" : "#e64c3b")};
`;

export const ResultsNotFound = styled.img`
  width: auto;
  max-height: 500px;
  margin-bottom: 30px;
  align-self: center;

  @media screen and (max-width: 767px) {
    max-width: 80%;
  }
`;
