import styled from "styled-components"
import Header from "./components/Header"
import GlobalStyle from "./styles/GlobalStyle"

function App() {
  return (
    <>
      <GlobalStyle />
      <ContainerApp>
        <Header />
      </ContainerApp>
    </>
    
  )
}

export default App

const ContainerApp = styled.div`
  width: 100%;
`