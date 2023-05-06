import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";

const API_KEY = process.env.REACT_APP_API_KEY;

function Popular() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);
  // useEffect - запускає функцію, щойно відбудеться рендеринг компонента

  const getPopular = async () => {
    const check = sessionStorage.getItem("popular");
    //для перевірки, чи збережені наші popular у локальному сховищі

    if (check) {
      setPopular(JSON.parse(check));
      //якщо збережені - розпарсили і зберегли в наш State
    } else {
      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=9`);
      const data = await api.json();
      sessionStorage.setItem("popular", JSON.stringify(data.recipes));
      //якщо сховище пусте - фетчимо і зберігаємо туди дані у вигляді рядка (метод stringify)
      console.log(data);
      setPopular(data.recipes);
      //Оновлюємо змінну popular, передаючи туди масив об'єктів, отриманих через API
    }
  };

  return (
    <div className="container">
      <h3 className="title">Popular</h3>

      <Splide
        options={{
          type: "loop",
          autoWidth: true,
          perPage: 3,
          arrows: false,
          pagination: true,
          drag: "free",
          gap: "3em",
          arrows: true,
          breakpoints: {
            767: {
              gap: "1em",
              arrows: false,
            },
          }          
        }}
      >
        {popular.map((recipe) => {
          return (
            <SplideSlide key={recipe.id}>
              <div className="card">
                <Link to={"beetroot_exam_project/recipe/" + recipe.id}>
                  <p className="card__title">{recipe.title}</p>
                  <img src={recipe.image} alt={recipe.title} className="card__img" />
                </Link>
              </div>
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
}

export default Popular;
