import React, {useState} from 'react';
import {Wrapper, Title, Paragraph, Button} from '../styles';

const Counter = ()=>{
  const [count, setCount] = useState(0);

  return (
      <Wrapper>
        <Paragraph>Counter App</Paragraph>
        <Title>{count}</Title>
        <Button  onClick={()=> setCount(count+1)}>+</Button>
        <Button  onClick={()=> setCount(count-1)}>-</Button>
      </Wrapper>
  )
}

export default Counter;