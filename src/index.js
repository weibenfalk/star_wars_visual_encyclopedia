import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import { Provider } from "./store/store";

import HomeContainer from "./components/Home/HomeContainer";
import SinglePageContainer from './components/SinglePage/SinglePageContainer';
import CategoryContainer from "./components/Category/CategoryContainer";

const App = () => {

  const initialState = {
    categoryState: {
      elements: [],
      nextPage: null,
      category: null,
      loading: false,
      searchTerm: ""
    },
    singlePageState: {
      id: null,
      category: null,
      element: null,
      related: {},
      loading: false
    }
  };

  return (
    <Provider initialValue={initialState}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomeContainer} />
          <Route path="/:category" exact component={CategoryContainer} />
          <Route path="/:category/:id" exact component={SinglePageContainer} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));