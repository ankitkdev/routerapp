import './App.css';
import { Card, CardBody, Text, Container } from '@chakra-ui/react'

function App() {
  return (
    <Container maxW='container.sm' centerContent>
      <Card m={5} bgGradient='linear(to-r, gray.300, yellow.400, pink.200)'>
        <CardBody>
          <Text
            bgGradient='linear(to-l, #7928CA, #FF0080)'
            bgClip='text'
            fontSize='6xl'
            fontWeight='extrabold'
          >
            Welcome to Chakra UI
          </Text>
        </CardBody>
      </Card>
    </Container>
  );
}

export default App;
