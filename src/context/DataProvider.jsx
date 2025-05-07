import { createContext, useState } from "react";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [number, setNumber] = useState(10);
  const [name, setName] = useState("Heng");
 
  return (
    <>
      <DataContext.Provider value={{ number, name, test }}>
        {children}
      </DataContext.Provider>
    </>
  );
};

export default DataProvider;
