import styled from "styled-components";
import Header from "../../components/Header";
import Login from "../../components/Login";
import OpeningHours from "../../components/Modals/OpeningHours";
import ModalProductClosed from "../../components/Modals/ProductModalClosed";
import NavigationTabs from "../../components/NavigationTabs";
import ProductList from "../../components/ProductList";
import SearchBar from "../../components/SearchBar";

function IndexHome () {
  return (
    <ContainerApp>
        <Header />
        <NavigationTabs />
        <SearchBar />
        <ProductList />
        <ModalProductClosed />
        <OpeningHours />
        <Login />
    </ContainerApp>
  )
    
}

export default IndexHome;

const ContainerApp = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`