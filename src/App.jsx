import styled from "styled-components"
import Header from "./components/Header"
import GlobalStyle from "./styles/GlobalStyle"
import NavigationTabs from "./components/NavigationTabs"

function App() {
  return (
    <>
      <GlobalStyle />
      <ContainerApp>
        <Header />
        <NavigationTabs />
      </ContainerApp>
    </>
    
  )
}

export default App

const ContainerApp = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`