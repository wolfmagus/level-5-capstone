import React from 'react'
//import styled from 'styled-components';
//import ReactDOM from 'react-dom'

import {SplitScreen} from './components/SplitScreen'

const LeftHandComponent = () =>{
    return <h1>Left!</h1>;
}

const RightHandComponent = () => {
    return <p>Right!</p>;
}

export default function App(){
    return (
        <SplitScreen
        left={LeftHandComponent}
        right={RightHandComponent} />
    );
}