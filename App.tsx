import React from "react";
import { RootNavigationContainer } from "./src/navigation/RootNavigationContainer";
import { observer, Provider } from "mobx-react";
import {rootStore} from "./src/store/rootStore";

const App = observer(() => {
  return (
    <Provider rootStore={rootStore}>
      <RootNavigationContainer />
    </Provider>
  );
});

export default App;
