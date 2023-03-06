import React, {Component} from 'react';
import {slideInRight} from "react-animations";
import styled, {keyframes} from 'styled-components';
import Logo from '../../assets/FullColorLogo.svg';
import './style.css'

const SlideInRight = styled.div`animation: 3s ${keyframes  `${slideInRight}`}`;

export default class SlideRight extends Component {
    render(){
        return(
            <SlideInRight>
                 <h1>
                    <img src={Logo} alt="logo" className="logo" />
                </h1>
            </SlideInRight>
        )
    }
}