import React, { FC, createContext } from 'react';
import './App.css';
import { Person } from './components/Person';
import { HairColor } from './Enums';

interface AppContextInterface {
  name: string;
  age: number;
  country: string;
}

const AppContext = createContext<AppContextInterface | null>(null);

const App: FC = () => {

  const contextValue: AppContextInterface = {
    name: "Pedro",
    age: 20,
    country: "Brazil"
  }

  return (
    <AppContext.Provider value={contextValue}>
      <div className="App">
        <Person name="Pedro" age={20} email="email@email.com" />
      </div>
    </AppContext.Provider>
  );
}

export default App;
