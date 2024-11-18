import styled from "styled-components"
import Header from "./components/Header"
import GlobalStyle from "./styles/GlobalStyle"
import NavigationTabs from "./components/NavigationTabs"
import SearchBar from "./components/SearchBar"
import ProductList from "./components/ProductList"

import AuthProvider from "./context/AuthProvider"
import ModalProductClosed from "./components/Modals/ProductModalClosed"

function App() {
  return (
    <AuthProvider>
      <GlobalStyle />
      <ContainerApp>
        <Header />
        <NavigationTabs />
        <SearchBar />
        <ProductList />
        <ModalProductClosed />
      </ContainerApp>
    </AuthProvider>
    
  )
}

export default App

const ContainerApp = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`