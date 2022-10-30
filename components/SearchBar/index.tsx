import { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchCharacter } from "../../store/reducer/moviesReducer";

export const SearchBar = () => {
  const dispatch = useDispatch();
  const searchValue = useSelector((state: any) => state.characters.searchValue);
  const handleChange = (event: any) => {
    dispatch(searchCharacter(event.target.value));
  };

  return (
    <fieldset className={"d-flex"}>
      <input
        placeholder="Insert a character name"
        type="text"
        value={searchValue}
        onChange={handleChange}
        className="form-control py-3"
      />
    </fieldset>
  );
};
