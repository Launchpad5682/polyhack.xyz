import { Wrapper, Flavour, Subtitle, HashBorder } from "./Home.styles";

import { Header } from "../../components/Header/Header";

import { GoFileBinary } from "react-icons/go";

export const Home = () => {
  return (
    <Wrapper>
      <Header />
      <Subtitle>
        <HashBorder>[#]</HashBorder>
        <Wrapper>wallet list</Wrapper>
        <Flavour>
          A collection of the most important wallets in web3. These addresses
          are not 100% confirmed, rather they are the products of research
          on-chain and from external sources. If you think there is a wallet
          that we should watch, please submit what info you have and we will
          attempt to add it to the database.
        </Flavour>
      </Subtitle>
    </Wrapper>
  );
};
