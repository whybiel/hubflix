import React from "react"
import styled from "styled-components"
import { createGlobalStyle } from "styled-components"

import Rota from "./components/routes"

const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        color:orange;
    }
    body{
        background-color:#000009;
        font-family: 'Francois One', sans-serif;
    }
`

const Cont = styled.div`
    width:100%;
    
`

export default class GG extends React.Component{
    
    render(){
        return(
        <div>
            
            <Cont>
            <Rota/>
            </Cont>
            <GlobalStyle/>
        </div>
    )
    }

}
