import styled from "styled-components";
import { img } from "../../assets/imgImport";

export const SeoulImg = styled.div`
  width: 100%;
  height: 30vh;
  text-align: center;
  margin-top: 2%;
  position: relative;
  @media (min-width: 560px) {
    height: 50vh;
  }
  @media (min-width: 940px) {
    height: 90vh;
  }
  ::before {
    content: "";
    background: url(${img.seoul}) no-repeat;
    background-size: contain;
    resize: both;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    opacity: 0.45;
  }
`;

export const MapText = styled.p`
  font-size: 1rem;
  position: relative;
  margin-top: 15%;
`;

export const MapButton = styled.button`
  border: 1px solid black;
  border-radius: 1rem;
  padding: 1% 5%;
  font-size: 0.7rem;
  font-weight: bold;
  background-color: rgba(255, 255, 255, 0);
  position: relative;
  cursor: pointer;
  &:hover {
    background-color: black;
    color: white;
    transition: all 0.5s;
  }
`;