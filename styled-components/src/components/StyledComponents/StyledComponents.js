import styled, { keyframes } from 'styled-components';
import React from 'react';

/* Square */
const Square = styled.div`
    width: ${props => props.theme.baseWidth ? props.theme.baseWidth : 100}px;
    height: ${props => props.theme.baseHeight ? props.theme.baseHeight : 100}px;
    background-color: blue;
`;

/* Rectangle */
const Rectangle = styled.div`
    margin: 10px;
    width: ${props => props.width}px;
    height: ${props => props.height}px;
    background-color: orange;
`;

Rectangle.defaultProps = {
    width: 100,
    height: 100
};

/* CurvedSquare */
class CurvedSquare extends React.Component {
    render() {
        const { className, x, y } = this.props;
        return (
            <div className={className}>{ x + y }</div>
        );
    };
}

CurvedSquare.defaultProps = {
    x: 10,
    y: 10
};

const StyledCurvedSquare = styled(CurvedSquare)`
    width: 100px;
    height: 100px;
    border-radius: 20px;
    background-color: rgba(155, 155, 155, .5);
    text-align: center;
`;

/* Button */
const Button = styled.button`
    font-size: 16px;
    border-radius: 10px;
    padding: 10px;
    :hover {
        opacity: .5;
        cursor: pointer;
    }
    background-color: ${props => {
        const { baseColor, successColor, warningColor, dangerColor } = props.theme;
        switch(props.type) {
            case 'success': return successColor;
            case 'warning': return warningColor;
            case 'danger': return dangerColor;
            default: return baseColor;
        }
    }}
`;

const BigButton = Button.extend`
    font-size: 30px;
    padding: 20px;
`;

/* Yoyo */
const yoyoAnimation = keyframes`
    0% { left: 0; bottom: 0; }
    25% { left: 100px; bottom: 100px; }
    50% { left: 200px; bottom: 200px; }
    75% { right: 100px; bottom: 100px; }
    100% { left: 0; bottom: 0; }
`;

const Yoyo = styled.div`
    position: relative;
    font-size: 5em;
    animation: ${yoyoAnimation} 2s linear 0s infinite;
`;

const MobileMenu = styled.div`
    @media (max-width: 400px) {
        width: 100px;
        height: 100px;
        background-color: blue;
    }
`;

const StyledComponents = () => {
    return { Square, Rectangle, CurvedSquare: StyledCurvedSquare, Button, BigButton, Yoyo, MobileMenu };
};

export default StyledComponents();
