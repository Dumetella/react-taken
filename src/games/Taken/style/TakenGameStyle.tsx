import styled from 'styled-components';
import Button from '../../../components/ui/Button';

export const TileGrid = styled.div`
    position: relative;
    width: 440px;
    height: 440px;
    @media ${(props) => props.theme.breakpoints.sm} {
        width: 360px;
        height: 360px;
    }
`;

export const GridContainer = styled.div`

`;

export const GameFrame = styled.div`
    min-height: calc(100vh - 500px);
    min-width: 100vh;
    display: flex;
    justify-content: center;
    margin: 100px 0px 10px 0px;
    box-sizing: border-box;
    @media ${(props) => props.theme.breakpoints.sm} {
        justify-content: flex-start;
        margin: 20px 0px 10px 10px;
    }
`;


