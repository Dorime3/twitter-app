import React from 'react';
import './app-header.css';
import styled from 'styled-components';

const Header = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    h1 {
        font-size: 26px;
        color: ${props => props.colored ? 'red' : 'black'};
        :hover {
            color: blue;
            cursor: pointer;
        }
    }
    h2 {
        font-size: 1.2rem;
        color: grey;
    }
`

const AppHeader = ({liked, allposts}) => {
    const declOfNum = (number, words) => {
        return allposts + ' ' + words[(number % 100 > 4 && number % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(number % 10 < 5) ? number % 10 : 5]];
    }
    return (
        <Header>
            <h1>Rodion Denisov</h1>
            <h2>{declOfNum(allposts, ['запись', 'записи', 'записей'])}, из них понравилось {liked}</h2>
        </Header>
    )
}

export default AppHeader;