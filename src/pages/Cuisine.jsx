import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
//The useParams() hook is a React Router hook that allows you to access the parameters of the current URL. This can be useful if you want to dynamically render content based on the URL parameters. For example, if you have a blog application, you may want to render different articles based on the article ID in the URL.

const API_KEY = process.env.REACT_APP_API_KEY;

function Cuisine() {
  const [cuisine, setCuisine] = useState([]);
  let params = useParams();

  const getCuisine = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=18&cuisine=${name}`
    );
    const recipes = await data.json();
    setCuisine(recipes.results);
  };

  useEffect(() => {
    getCuisine(params.type);
    console.log(params);
  }, [params.type]);
  //коли рендериться компонент і змінюється params.type, запускається функція і ми передаємо параметр у фетч-запит

  return (
    <motion.div
      className="grid wrapper"
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {cuisine.map((item) => {
        return (
          <div className="cuisine-card" key={item.id}>
            <Link to={"/beetroot_exam_project/recipe/" + item.id} className="cuisine-card__link">
              {/* <div className="img-wrapper" style={{ background: `url(${item.image})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '300px', minWidth: '100%'}} > */}
              <div className="img-container">
                <img src={item.image} alt="" className="cuisine-card__img" />
              {/* </div> */}
              </div>
              <h4 className="cuisine-card__title">{item.title}</h4>
            </Link>
          </div>
        );
      })}
    </motion.div>
  );
}

export default Cuisine;
