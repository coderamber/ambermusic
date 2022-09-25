import React, { memo, Suspense } from "react";
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
        <Suspense fallback={<div>page loading</div>}>
          {renderRoutes(routes)}
        </Suspense>
        <AppFooter />
        <AppPlayerBar/>
      </BrowserRouter>
    </Provider>
  );
});

export default App;
