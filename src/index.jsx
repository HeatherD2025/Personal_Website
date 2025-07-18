import React from "react";
import { createRoot } from "react-dom/client";
import Router from "./Router";

const root = createRoot(document.getElementById("root"));

root.render(<Router />);