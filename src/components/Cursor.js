import React, { useState } from "react";
import "./Cursor.css";
import Error from "./messages/Error";
import ComHelp from "./messages/CommandHelp";
import ComOOO from "./messages/CommandOOO";
import ComFilms from "./messages/CommandFilms";
import ComBooks from "./messages/CommandBooks";
import ComWhoAmI from "./messages/CommandWhoAmI";
import ComWhyCS from "./messages/CommandWhyStudyCS";

const Cursor = (props) => {
  const [enteredValue, setEnteredValue] = useState([]);

  const handleValueChange = (event) => {
    setEnteredValue(event.target.value.split(" "));
  };


  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      let labelValue = "not_valid";
      let returnedValue = <Error />;
      
      if (enteredValue[0] === "help") {
        labelValue = "valid";
        returnedValue = <ComHelp />;
      } else if (enteredValue[0] === "whoami") {
        labelValue = "valid";
        returnedValue = <ComWhoAmI />;
      } else if (enteredValue[0] === "films") {
        labelValue = "valid";
        returnedValue = <ComFilms />;
      } else if (enteredValue[0] === "books") {
        labelValue = "valid";
        returnedValue = <ComBooks id={(enteredValue.length>1 ? enteredValue[1] : "0")}/>
      } else if (enteredValue[0] === "why") {
        labelValue = "valid";
        returnedValue = <ComWhyCS />;
      } else if (enteredValue[0] === "ooo") {
        labelValue = "valid";
        returnedValue = <ComOOO />;
      } else if (enteredValue[0] === "clear") {
        labelValue = "valid";
        returnedValue = "Clear";
      }

      // console.log("inside", props.items);
      try {
        const last_label = props.items[props.items.length - 1].label;
        if (last_label === "valid" && labelValue === "not_valid") {
          returnedValue = (
            <div>
              <br></br>
              <Error />
            </div>
          );
        }
      } catch (error) {
        //console.log(error);
        console.log('error logged')
      }

      const dataBack = {
        id: Math.random().toString(),
        label: labelValue,
        message: returnedValue,
      };
      props.onEnterValue(dataBack);

      // set entered value to zero
      setEnteredValue([]);
    }
  };

  return (
    <div className="user_command">
      <label className="label-base">user@home ~ %</label>
      <span className="input-base">
        <input
          type="text"
          value={enteredValue.join(' ')}
          autoFocus
          spellCheck="false"
          onChange={handleValueChange}
          onKeyPress={handleKeyPress}
        ></input>
      </span>
    </div>
  );
};

export default Cursor;
