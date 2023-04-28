import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Search() {
    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        navigate('/searched/' + input);
    }

  return (
    <form className="search" onSubmit={submitHandler}>
        <FaSearch className="search__icon" />
      <input placeholder="What do you want to cook?" onChange={(e) => setInput(e.target.value)} type="text" className="search__input" value={input}/>
    </form>
  );
}

export default Search;
