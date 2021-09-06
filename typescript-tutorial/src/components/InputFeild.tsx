import React, { FC, FormEvent } from "react"
import "./styles.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: FormEvent) => void;
}

const InputFeild: FC<Props> = ({ todo, setTodo, handleAdd }: Props) => {
  return (
    <div>
      <form className="input" onSubmit={e => handleAdd(e)}>
        <input type="input" 
          value={todo}
          onChange={
            (e) => setTodo(e.target.value)
          }
          placeholder="Enter a task" 
          className="input__box" />
        <button className="input_submit" type="submit">
          Go
        </button>  
      </form>
    </div>
  )
}

export default InputFeild;
