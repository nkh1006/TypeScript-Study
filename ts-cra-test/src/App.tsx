import React, { ReactElement, ReactNode, useState, FC } from 'react';
import './App.css';

// const HeadingFC: React.FC<{title: string}> = ({ title }) => <h1>{title}</h1>;

// Conventional props
function Heading({ title }: { title: string;}) {
  return (
    <h1>{title}</h1>
  )
}

function HeadingWithContent({ children }: { children: ReactNode}): ReactElement | null {
  return (
    <h1>{children}</h1>
  )
}

// defaultProps
const defaultContainerProps = {
  heading: <strong>My Heading</strong>,
};

type ContainerProps = { heading: ReactNode, children: ReactNode} & typeof defaultContainerProps;

function Container({ heading, children }: ContainerProps): ReactElement {
  return (
    <div>
      <h1>{heading}</h1>{children}
    </div>
  )
}

Container.defaultProps = defaultContainerProps;

// Functional Props
function TextWithNumber({ header, children }: { header?: (num: number) => ReactNode; children: (num: number) => ReactNode; }) {
  const [state, setState] = useState<number>(1);

  return (
    <div>
      {header && <h2>{header?.(state)}</h2>}
      <div>{children(state)}</div>
      <div>
        <button onClick={() => setState(state + 1)}>Add</button>
      </div>
    </div>
  )
}

function App() {
  return (
    <div>
      <Heading title="Hello there"></Heading>
      <HeadingWithContent>
        Hi !
      </HeadingWithContent>
      <Container>
        Foo
      </Container>
      <TextWithNumber>
        {(num: number) => <div>Today's number number is {num}</div>}
      </TextWithNumber>
    </div>
  );
}

export default App;
