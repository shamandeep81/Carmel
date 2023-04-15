import React, { useContext, useReducer, useEffect }from "react";
import reducer from "./reducer";

const AppContext = React.createContext();


const initialState = {
name: "",
image: "",
};


const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const updateHomePage = () => {

        return dispatch ({
    
                type :"HOME_UPDATE",
                payload: {
                    name:"Shamandeep",
                    image: "./images/monitor.gif",
                },
            });
        
    };
    
    const updateAboutPage = () => {
    
        return dispatch ({
    
            type :"ABOUT_UPDATE",
            payload: {
                name:"babni",
                image: "./images/responsive.gif",
            },
    
    });
    };



    

    return <AppContext.Provider value={{...state, updateHomePage, updateAboutPage }}>

{children}

    </AppContext.Provider>
    
};

const useGlobalContext = () => {
   return useContext(AppContext); 
}

export { AppProvider, useGlobalContext };