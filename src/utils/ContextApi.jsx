import React, { createContext, useState } from "react";

export const Context = createContext(); //it return a context and whenever we have to use the value of provide we can use createContext

export const AppContext = (props) => {
  const [imageSearch, setImageSearch] = useState(false);

  return (
    // int context we get provider : it take one props and this props works throughout the application we can access
    <Context.Provider
      value={{
        imageSearch,
        setImageSearch,
      }}
    >
      {/* We return here because we will wrap our app in AppContext means all app.jsx come here*/}
      {props.children}
    </Context.Provider>
  );
};
