import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { BrowserRouter } from "react-router-dom";

import { GraphQLClient, ClientContext } from "graphql-hooks";

const client = new GraphQLClient({
  url: "https://graphql.datocms.com/",
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_REACT_APP_DATOCMS_TOKEN}`,
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ClientContext.Provider value={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ClientContext.Provider>
  </React.StrictMode>
);
