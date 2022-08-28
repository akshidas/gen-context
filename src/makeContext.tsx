import React, { createContext, ReactNode, useContext, useReducer } from "react";

type Props = {
  children: ReactNode;
};

const makeContext = (reducer: any, initialState: any) => {
  const dataContext = createContext<any>(null);
  const dispatchContext = createContext<any>(null);

  const Provider = ({ children }: Props) => {
    const [data, dispatch] = useReducer(reducer, initialState);
    return (
      <>
        <dataContext.Provider value={data}>
          <dispatchContext.Provider value={dispatch}>
            {children}
          </dispatchContext.Provider>
        </dataContext.Provider>
      </>
    );
  };

  const useData = () => useContext(dataContext);
  const useDispatch = () => useContext(dispatchContext);

  return { Provider, useDispatch, useData };
};

export default makeContext;
