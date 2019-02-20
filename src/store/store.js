import React, { useContext, useState, useMemo } from "react";

function makeStore() {
  // Make a context for the store
  const context = React.createContext();

  // Make a provider that takes an initialValue
  const Provider = ({ initialValue = {}, children }) => {
    const [state, setState] = useState(initialValue);
    // Memoize the context value to update when the state does
    const contextValue = useMemo(() => [state, setState], [state]);
    // Provide the store to children
    return <context.Provider value={contextValue}>{children}</context.Provider>;
  };
  // A hook to help consume the store
  const useStore = statePart => {
    const [state, setState] = useContext(context);
    // If we're specifying a part of the state to be received and updated
    if (statePart) {
      const customSetState = newStateValue => {
        // We want to be able to use a function with the previous state in or setState
        // So checking if we provide a function for the new state value
        if (typeof newStateValue === "function") {
          setState(prevState => ({ ...prevState, [statePart]: newStateValue(prevState[statePart]) }));
        } else {
          setState(prevState => ({ ...prevState, [statePart]: { ...newStateValue } }));
        }
      };
      return [state[statePart], customSetState];
    // Else just receive the state and setState as they are out of the box
    } else {
      return [state, setState];
    }
  };

  return { Provider, useStore };
}

export const { Provider, useStore } = makeStore();
