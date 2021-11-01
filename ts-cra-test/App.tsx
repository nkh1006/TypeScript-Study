import React, { ReactElement, ReactNode } from 'react';
import { TransferListItem } from 'worker_threads';
import './App.css';

const HeadingFC: React.FC<{ title: string }> = ({ title }) => <h1>{title}</h1>;

// Conventional props
function Heading({ title } : { title?: string; }) {
  return <h1>{title}</h1>;
}

function HeadingWithContent({ children } : { children: ReactNode; }): ReactElement | null {
  return <h1>{children}</h1>;
}

// defaultProps
const defaultContainerProps = {
  heading: <strong>My Heading</strong>
}
type ContainerProps = { children: ReactNode; } & typeof defaultContainerProps;
function Container({ 
  heading, children 
} : ContainerProps): ReactElement | null {
  return (
    <div>
      <h1>{heading}</h1>
      {children}
    </div>
  );
}
Container.defaultProps = defaultContainerProps;

// Functional props
function TextWithNumber({
  header,
  children
}: {
  header?: (num: number) => ReactNode;
  children: (num: number) => ReactNode;
}) {
  const [state, stateSet] = React.useState<number>(1);

  return (
    <div>
      {header && <h2>{header?.(state)}</h2>}
      <div>{children(state)}</div>
      <div>
        <button onClick={() => stateSet(state + 1)}>Add</button>
      </div>
    </div>
  )
}

// List
function List({
  items,
  render,
}: {
  items: ListItem[],
  renadr: (item: ListItem) => ReactNode
}) {
  return (
    <ul>
      {items.map(item, index) => {
        header: 
      })}
    </ul>
  )
}

class MyContainer

function App() {
  return (
    <div>
      <Heading title="Hello"></Heading>
      <HeadingWithContent>
        <strong>hi!</strong>
      <Container>Foo</Container>
      <TextWithNumber header={(num: number) => <span>Header {num}</span>}>
        {(num: number) => <div>Today's number is {num}</div>}
      </TextWithNumber>
      <List items={["Jack", "Sadie", "oso"]} renadr={(item: string) => <div>{item.toLocaleLowerCase}</div>></List>
    </div>
  );
}

export default App;