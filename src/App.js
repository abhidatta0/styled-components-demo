import './App.css';
import {ThemeProvider} from 'styled-components';
import {Title, Wrapper, Button, TomatoButton, StyledLink, Input, PasswordInput, Rotate, Thing, ThemedButton} from './styles';
import Counter from './components/Counter';
import ViewTheme from './components/ViewTheme';

const theme = {
  main:"mediumseagreen",
}

function App() {
  return (
    <Wrapper>
      <h1>1. Using basic html tag</h1>
      <Title>
        Hello World
      </Title>
      <Button>Normal</Button>
      <Button primary>Primary</Button>
      <TomatoButton>Tomato Button</TomatoButton>
      <TomatoButton as="a" href="https://www.google.com">Link with Tomato Button styles</TomatoButton>

      <h1>2.Styling any component</h1>
      <StyledLink href="https://www.google.com">Styled, exciting link</StyledLink>

      <h1>3.Counter App</h1>
      <Counter />

      <h1>4. using the .attrs method</h1>
      <Input small/>
      <Input />
      <Input padding="1rem" />

      <h1>4. overriding the .attrs method in a almost similar component</h1>
      <PasswordInput />
      <PasswordInput small />

      <h1>5. Animation</h1>
      <Rotate>Hello</Rotate>

      <h1>6. Pseudoelements, pseudoselectors, and nesting</h1>
      <Thing>Hello World</Thing>
      <Thing>Hello World</Thing>
      <Thing className="something">Hello World</Thing>
      <Thing>Hello World</Thing>
      <div className="something-else">
       <Thing>Splendid</Thing>
      </div>

      <h1>7.Theming</h1>
      <ThemedButton>Normal</ThemedButton>

      <ThemeProvider theme={theme}>
        <ThemedButton>Normal</ThemedButton> 
        <ThemedButton theme={{main: 'darkorange'}}>Overridden</ThemedButton> 
        <ViewTheme />
      </ThemeProvider>

    </Wrapper>
  );
}

export default App;
