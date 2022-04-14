import React from "react";
import Inner from "./Inner/Inner";

export default function Layout({ children }) {
  return (
    <div>
      <Inner>{children}</Inner>
    </div>
  );
}
