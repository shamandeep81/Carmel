import React, { useContext }from "react";


const AppContext = React.createContext();

const AppProvider = ({ children }) => {

    return <AppContext.Provider value="a Frontend Web developer">

{children}

    </AppContext.Provider>
};

const useGlobalContext = () => {
   return useContext(AppContext); 
}

export { AppContext, AppProvider, useGlobalContext };