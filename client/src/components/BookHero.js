import styled from 'styled-components';
import defaultImg from '../resources/images/room-1.jpeg';



const BookHero = styled.header`
min-height: 100vh;
background: url(${props=> (props.img ? props.img : defaultImg)}) center/cover ;
display: flex;
align-items: center;
justify-content: center;
`;

export default BookHero