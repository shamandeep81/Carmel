const AppContext = React.createContext();

const AppProvider = ({ children }) => {

    return <AppContext.Provider>

{children}

    </AppContext.Provider>
};
