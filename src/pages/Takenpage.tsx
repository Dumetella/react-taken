import React from 'react';
import TakenGame from '../components/TakenGame/TakenGame';
import Container from '../ui/Container';


function Takenpage() {

  return (
    <div className="taken-puzzle" style={{ minHeight: 500 }}>
      <Container>
        <TakenGame size={4} />
      </Container>
    </div>
  );
}

export default Takenpage;