import React from "react";
import { RootNavigationContainer } from "./src/navigation/RootNavigationContainer";
import { observer, Provider } from "mobx-react";
import { store } from "./src/store/store";

const App = observer(() => {
  return (
    <Provider store={store}>
      <RootNavigationContainer />
    </Provider>
  );
});

export default App;
