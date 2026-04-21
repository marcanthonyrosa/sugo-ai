"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from "react";

type NavColor = "paper" | "clay" | "moss";

interface NavColorContextValue {
  navColor: NavColor;
  setNavColor: (colorOrFn: NavColor | ((prev: NavColor) => NavColor)) => void;
}

const NavColorContext = createContext<NavColorContextValue>({
  navColor: "paper",
  setNavColor: () => {},
});

export function NavColorProvider({ children }: { children: ReactNode }) {
  const [navColor, setNavColorRaw] = useState<NavColor>("paper");

  const setNavColor = useCallback(
    (colorOrFn: NavColor | ((prev: NavColor) => NavColor)) => {
      if (typeof colorOrFn === "function") {
        setNavColorRaw(colorOrFn);
      } else {
        setNavColorRaw(colorOrFn);
      }
    },
    [],
  );

  return (
    <NavColorContext value={{ navColor, setNavColor }}>
      {children}
    </NavColorContext>
  );
}

export function useNavColor() {
  return useContext(NavColorContext);
}
