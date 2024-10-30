import styled from "styled-components";
import GlobalStyles from "./styles/globalstyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";
import Row from "./ui/Row";

const StyledApp = styled.div`
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles></GlobalStyles>
      <StyledApp>
        <Row>
          <Row type="horizontal">
            <Heading as="h1">The Wild Oasis</Heading>
            <div>
              <Heading as="h2">Check in and out</Heading>
              <Button onClick={() => alert("Check in")}>Check in</Button>
              <Button
                onClick={() => alert("Check out")}
                variation="secondary"
                size="small"
              >
                Check out
              </Button>
            </div>
          </Row>
          <Row type="vertical">
            <Row>
              <Heading as="h2">Form</Heading>
              <Input placeholder="Number of guests" />
              <Input placeholder="Number of guests" />
            </Row>
          </Row>
        </Row>
      </StyledApp>
    </>
  );
}

export default App;
