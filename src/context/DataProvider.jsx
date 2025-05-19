import { createContext, useState } from "react";

export const DataContext = createContext();

// State Management
const DataProvider = ({ children }) => {
  const [number, setNumber] = useState(10);
  const [name, setName] = useState("Heng");
  const [userData, setUserData] = useState({ id: 1001, username: "Nuth" });

  return (
    <>
      <DataContext.Provider value={{ number, name, userData, setNumber }}>
        {children}
      </DataContext.Provider>
    </>
  );
};

export default DataProvider;
