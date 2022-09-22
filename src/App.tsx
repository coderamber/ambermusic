import React, { memo } from "react";
import { renderRoutes } from "react-router-config";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import AppHeader from "@/components/app-header";
import AppFooter from "@/components/app-footer";
import AppPlayerBar from "./pages/player/app-player-bar";

import routes from "@/router";
import store from "@/store";

const App = memo(() => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppHeader />
        {renderRoutes(routes)}
        <AppFooter />
        <AppPlayerBar/>
      </BrowserRouter>
    </Provider>
  );
});

export default App;
