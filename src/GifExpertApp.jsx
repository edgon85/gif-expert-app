import { useState } from "react"
import { AddCategory, GifGrid} from "./components";


export const GifExpertApp = () => {

  const [categories, setCategories] = useState([]);

  const handleAddCategory = (newCatgory) => {
    console.log(newCatgory);
    if (categories.includes(newCatgory)) return;
    setCategories([newCatgory, ...categories])
  }

  return (
    <>
      <h1>Gif Expert App</h1>
      <AddCategory onNewCatgory={handleAddCategory} />

      {
        categories.map(cat => (
          <GifGrid
            key={cat}
            category={cat}
          />)
        )
      }
    </>
  )
}
