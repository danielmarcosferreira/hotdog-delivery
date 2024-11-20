import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import GlobalStyle from "./styles/GlobalStyle"
import AuthProvider from "./context/AuthProvider"
import IndexHome from "./pages/home/IndexHome"

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<IndexHome />} />
    </Routes>
  )
}

function App() {
  return (
    <>
      <GlobalStyle />
      <AuthProvider>
        <Router>
          <AllRoutes />
        </Router>
      </AuthProvider>
    </>
  )
}

export default App