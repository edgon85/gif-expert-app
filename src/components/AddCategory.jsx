import { useState } from "react"


export const AddCategory = ({ onNewCatgory }) => {

  const [inputValue, setInputValue] = useState('');


  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  }

  const handleSubmit = (event) => {

    const newValue = inputValue.trim();

    event.preventDefault();
    if (newValue.length <= 1) return;

    onNewCatgory(newValue);
    setInputValue('');
  }


  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  )
}
