import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Heading from "./ui/Heading";
import Row from "./ui/Row";

export default function App() {
  return (
    <>
      <GlobalStyles />
      <div>
        <Row type='horizontal'>
          <div>Elem 1</div>
          <div>Elem 2</div>
        </Row>
        <Row>
          <div>Elem 1</div>
          <div>Elem 2</div>
        </Row>

        <Heading as='h1'>App</Heading>
        <Heading as='h2'>App</Heading>
        <Heading as='h3'>App</Heading>
        <Button variation='primary' size='small'>Cheack in</Button>
        <Button variation='secondary' size='small'>Cheack in</Button>
        <Button variation='danger' size='small'>Cheack in</Button>
        <Button>Cheack in</Button>
        <Button variation='secondary' size='medium'>Cheack in</Button>
        <Button variation='danger' size='medium'>Cheack in</Button>
        <Button variation='primary' size='large'>Cheack in</Button>
        <Button variation='secondary' size='large'>Cheack in</Button>
        <Button variation='danger' size='large'>Cheack in</Button>
      </div>
    </>
  )
}
