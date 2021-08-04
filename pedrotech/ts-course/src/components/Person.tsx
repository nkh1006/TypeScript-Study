import React, { FC, useState } from 'react';
import { User } from '../Interfaces';

export const Person: FC<User> = ({name, age, email, hairColor}) => {

  const [country, setCountry] = useState<string | null>("");

  type NameType = "Pedro" | "Jack";
  const nameForType: NameType = "Jack";

  const handleChage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(e.target.value);
  };

  return (
    <div>
      <h1> {name} </h1>
      <h1> {email} </h1>
      <h1> {age} </h1>
      <input placeholder="Write down your country ..." onChange={handleChage} />

      <p>{country}</p>
      <p>{hairColor}</p>
    </div> 
  );
}