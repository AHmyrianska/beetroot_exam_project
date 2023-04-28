import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {motion} from 'framer-motion';


function Searched() {
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  let params = useParams();

  const getSearched = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=a8bbe7a2dce042ffa20a60d7632f4667&query=${name}`
    );
    const recipes = await data.json();
    setSearchedRecipes(recipes.results);
  };

  useEffect(() => {
    getSearched(params.search);
    // search - тому що так написано в Route у файлі Pages після двокрапки (те, що задається, змінюється)
  }, [params.search]);

  return (
    <motion.div className="grid wrapper"
    animate={{opacity: 1}}
    initial={{opacity: 0}}
    exit={{opacity: 0}}
    transition={{duration: 0.5}}
    >
      {searchedRecipes.map((item) => {
        return (
        <div className="cuisine-card" key={item.id}>
            <Link to={'/recipe/' + item.id} className="cuisine-card__link">
          <img src={item.image} alt="" className="cuisine-card__img" />
          <h4 className="cuisine-card__title">{item.title}</h4>
          </Link>
        </div>
        )
      })}
    </motion.div>
  );
}

export default Searched;
