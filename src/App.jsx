import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Heading from "./ui/Heading";

export default function App() {
  return (
    <>
      <GlobalStyles />
      <div>
        <Heading as='h1'>App</Heading>
        <Heading as='h2'>App</Heading>
        <Heading as='h3'>App</Heading>
        <Button>Cheack in</Button>
      </div>
    </>
  )
}
