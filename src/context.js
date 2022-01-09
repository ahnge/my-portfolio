import React, { useEffect, useState } from "react";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [aboutRef, setaboutRef] = useState();
  const [appPageTag, setAppPageTag] = useState();

  return (
    <AppContext.Provider
      value={{
        setaboutRef,
        aboutRef,
        appPageTag,
        setAppPageTag,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalcontext = () => {
  return React.useContext(AppContext);
};
