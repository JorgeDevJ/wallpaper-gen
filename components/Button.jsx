import { useRouter } from "next/router";
import styled from "styled-components";
const ContButton = styled.div`
  visibility: ${(props) => props.visible};
`;
const ButtonReturn = styled.button`
  background-color: #000;
  border: 0;
  outline: none;
  color: #fff;
  padding: 10px;
  border-radius: 10px;
`;
const Button = () => {
  const router = useRouter();

  const Back = () => {
    router.back();
  };
  return (
    <ContButton visible={router.pathname === "/" ? "hidden" : "visible"}>
      <ButtonReturn onClick={Back}>Return</ButtonReturn>
    </ContButton>
  );
};

export default Button;
