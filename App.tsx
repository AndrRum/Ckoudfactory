import React from "react";
import { RootNavigationContainer } from "./src/navigation/RootNavigationContainer";
import { Provider } from "react-redux";
import { store } from "./src/store/store";

const App = () => {
  return (
    <Provider store={store}>
      <RootNavigationContainer />
    </Provider>
  );
};

export default App;
