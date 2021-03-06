import React, { Children, ReactElement, ReactNode, useState } from 'react'
import "./App.css";

const HeadingFC: React.FC<{ title: string }> = ({ title }) => { 
  return <h1>{title}</h1>;
}

// Conventional props
const Heading = ({ title }: { title: string }) => {
  return <h1>{title}</h1>;
}

const HeadingWithContent = ({ children }: { children: ReactNode }): ReactElement => {
  return <h1>{children}</h1>;
}

// defaultProps
const defaultContainerProps = {
  heading: <strong>My Heading</strong>
}
type ContainerProps = { children: ReactNode } & typeof defaultContainerProps;
const Container = ({ heading, children }: ContainerProps): ReactElement => {
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
  header: (num: number) => ReactNode;
  children: (num: number) => ReactNode
}) {
  const [state, stateSet] = useState<number>(1);

  return (
    <div>
      <h2>{header?.(state)}</h2>
      <div>
        {children(state)}
      </div>
      <div>
        <button onClick={() => stateSet(state + 1)}>Add</button>
      </div>
    </div>
  )
}

// List
function List<ListItem>({
  items,
  render,
}: {
  items: ListItem[],
  render: (item: ListItem) => ReactNode
}) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          {render(item)}
        </li>
      ))}
    </ul>
  )
};

const App = () => {
  return (
    <div>
      <Heading title="Hello"></Heading>
      <HeadingWithContent>
        <strong>hi!</strong>
      </HeadingWithContent>
      <Container>
        Foo
      </Container>
      <TextWithNumber header={(num: number) => <span>Header {num}</span>}>
        {(num: number) => <div>Today's number is {num}</div>}
      </TextWithNumber>
      <List 
        items={["Jack", "Sadie", "oso"]} 
        render={(item: string) => <div>{item.toLowerCase()}</div>
      }></List>
    </div>
  );
}

export default App;