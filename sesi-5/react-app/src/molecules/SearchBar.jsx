import React from "react";
import MyButton from "../atoms/Button";
import MyInput from "../atoms/Input";

class SearchBar extends React.Component {

  render() {
    return (
      <div >
        <MyInput
          placeholder={"please input here"}
        />
        <MyButton
          text={"Search"}
        />
      </div>
    )
  }
}

export default SearchBar