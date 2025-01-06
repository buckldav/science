import React, { createContext, useState, ReactNode, useContext } from "react";

type ColorEnum = "green" | "red" | "blue" | "black" | "white";

export const colorLocks: Record<ColorEnum, Array<number>> = {
  green: [19, 41, 24],
  red: [19, 41, 24],
  blue: [19, 41, 24],
  black: [19, 41, 24],
  white: [19, 41, 24],
};

export const colorKeys: Array<ColorEnum> = Object.keys(
  colorLocks
) as Array<ColorEnum>;

// Define the type for the context state
interface EnvelopeContextType {
  lockColor: ColorEnum | null;
  setLockColor: (color: ColorEnum) => void;
  lockCombo: Array<number> | null;
}

// Create the context with default values
const EnvelopeContext = createContext<EnvelopeContextType | undefined>(
  undefined
);

// Provider component
export const EnvelopeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [lockColor, setLockColor] = useState<ColorEnum | null>(null); // Default color can be set here
  const lockCombo = lockColor ? colorLocks[lockColor] : null;

  return (
    <EnvelopeContext.Provider value={{ lockColor, setLockColor, lockCombo }}>
      {children}
    </EnvelopeContext.Provider>
  );
};

// Custom hook to use the EnvelopeContext
export const useEnvelope = (): EnvelopeContextType => {
  const context = useContext(EnvelopeContext);
  if (context === undefined) {
    throw new Error("useEnvelope must be used within an EnvelopeProvider");
  }
  return context;
};
