import React from 'react'
import ReactDOM from 'react-dom/client'
import Content from './Components/Content/Content'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import { GlobalStyle } from './css/global'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Header/>
    <Content/>
    <Footer/>
    <GlobalStyle/>
  </React.StrictMode>
)
