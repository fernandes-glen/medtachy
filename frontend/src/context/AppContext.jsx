import React, { createContext, useContext, useMemo, useState } from "react";

/**
 * Global application context for cross-cutting UI state.
 * Extend this as features (auth, notifications, etc.) are added.
 */
const AppContext = createContext(undefined);

export function AppProvider({ children }) {
  const [appName] = useState("Medtachy");

  const value = useMemo(() => ({ appName }), [appName]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
}

export default AppContext;
