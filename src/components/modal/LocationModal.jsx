import React from "react";

import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { showLocationAtom } from "../../shared/atoms/modalAtoms";
import { FlexColumnBox } from "../../shared/styles/flex";
import ModalHeader from "../header/ModalHeader";
import Layout from "../layout/Layout";
import Main from "../layout/Main";
import { motion } from "framer-motion";

const LocationModal = ({ setLocation, type = "" }) => {
  const setShowLocation = useSetRecoilState(showLocationAtom);

  const setLocationId = (num) => {
    setLocation(num);
    setShowLocation(false);
  };
  return (
    <LocationCategoryModal
      variants={ModalAni}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ type: "tween", duration: 0.2 }}
    >
      <Layout>
        <ModalHeader
          title={"중고거래 카테고리"}
          type="modal"
          _onClick={() => setShowLocation(false)}
        />
        <Main>
          <LocationList>
            <LocationItem onClick={() => setLocationId(1)}>신사동</LocationItem>
            <LocationItem onClick={() => setLocationId(2)}>
              논현1동
            </LocationItem>
            <LocationItem onClick={() => setLocationId(3)}>
              논현2동
            </LocationItem>
            <LocationItem onClick={() => setLocationId(4)}>
              압구정동
            </LocationItem>
            <LocationItem onClick={() => setLocationId(5)}>청담동</LocationItem>
            <LocationItem onClick={() => setLocationId(6)}>
              삼성1동
            </LocationItem>
            <LocationItem onClick={() => setLocationId(7)}>
              삼성2동
            </LocationItem>
            <LocationItem onClick={() => setLocationId(8)}>
              대치1동
            </LocationItem>
            <LocationItem onClick={() => setLocationId(9)}>
              대치2동
            </LocationItem>
            <LocationItem onClick={() => setLocationId(10)}>
              대치4동
            </LocationItem>
            <LocationItem onClick={() => setLocationId(11)}>
              역삼1동
            </LocationItem>
            <LocationItem onClick={() => setLocationId(12)}>
              역삼2동
            </LocationItem>
            <LocationItem onClick={() => setLocationId(13)}>
              도곡1동
            </LocationItem>
            <LocationItem onClick={() => setLocationId(14)}>
              도곡2동
            </LocationItem>
            <LocationItem onClick={() => setLocationId(15)}>
              개포1동
            </LocationItem>
            <LocationItem onClick={() => setLocationId(16)}>
              개포2동
            </LocationItem>
            <LocationItem onClick={() => setLocationId(17)}>
              개포4동
            </LocationItem>
            <LocationItem onClick={() => setLocationId(18)}>
              세곡동
            </LocationItem>
            <LocationItem onClick={() => setLocationId(19)}>
              일원1동
            </LocationItem>
            <LocationItem onClick={() => setLocationId(20)}>
              일원2동
            </LocationItem>
            <LocationItem onClick={() => setLocationId(20)}>
              수서동
            </LocationItem>
          </LocationList>
        </Main>
        <div />
      </Layout>
    </LocationCategoryModal>
  );
};

export default LocationModal;

const ModalAni = {
  initial: { x: 450, opacity: 1 },
  animate: { x: 0, opacity: 1 },
  exit: { x: 450, opacity: 1 },
};

const LocationCategoryModal = styled(motion.div)`
  position: absolute;
  z-index: 100;
`;

const LocationList = styled.div`
  display: grid;
  grid-template-columns: 5rem 5rem 5rem 5rem;
  justify-content: center;
  gap: 1rem;
  height: 100%;
  align-content: center;
`;

const LocationItem = styled.div`
  width: 100%;
  aspect-ratio: 1/1;
  ${FlexColumnBox};
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background-color: #faf7f1;
  cursor: pointer;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;
