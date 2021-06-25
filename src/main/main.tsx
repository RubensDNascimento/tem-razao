import React from 'react';
import Lego from '../components/lego';
import { Container } from './main-styles';

const Main: React.FC = () => {
  return(
    <Container>

        <Lego color='#dc9900' numbersSelecteds={5}/>

        <Lego color='green' numbersSelecteds={8}/>

        <Lego color='red' numbersSelecteds={1}/>

        <Lego color='blue' numbersSelecteds={3}/>

    </Container>

  );
}
export default Main;
