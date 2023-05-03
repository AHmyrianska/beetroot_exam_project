import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { CiForkAndKnife } from 'react-icons/ci';

const API_KEY = process.env.REACT_APP_API_KEY;

function Recipe() {
  let params = useParams();
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");

  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${API_KEY}`
    );
    const detailData = await data.json();
    setDetails(detailData);
    console.log(details.instructions);

  };

  useEffect(() => {
    fetchDetails();
  }, [params.name]);

  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="wrapper"
    >
      <div className="recipe">
        <div>
          <div className="recipe__card">
          <h2 className="recipe__title">{details.title}</h2>
            <img src={details.image} className="card__img card__img-recipe" />
          </div>
        </div>
        <div className="recipe__info">
          <div className="recipe__btns">
            <button
              className={activeTab === "instructions" ? "active" : ""}
              onClick={() => setActiveTab("instructions")}
            >
              Instructions
            </button>
            <button className={activeTab === "ingredients" ? "active" : ""} onClick={() => setActiveTab("ingredients")}>
              Ingredients
            </button>
          </div>
          {activeTab === "instructions" && (
            <div>
              <p dangerouslySetInnerHTML={{ __html: details.summary }} className="text"></p>
              <p dangerouslySetInnerHTML={{ __html: details.instructions }} className="text"></p>
            </div>
          )}

          {activeTab === "ingredients" && (
            <ul className="ingredients">
              {details.extendedIngredients.map((ingredient) => (
                <div className="ingredients__item" key={ingredient.id}>
                <CiForkAndKnife size={'1rem'} color={'#2c853e'}/>
                <li>{ingredient.original}</li>
                </div>
              ))}
            </ul>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default Recipe;
