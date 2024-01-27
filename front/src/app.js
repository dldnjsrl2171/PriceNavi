import React from "react";

import { Provider } from "react-redux";
import store from "./Store/store";

import Header from "./Header/header";
import Section from "./Section/section";
import Aside from "./Aside/aside";
import Modal from "./Common/Modal/modal";


function App() {
  return (   
    <Provider store={store}>
      <Header></Header>
      <Section></Section>
      <Aside></Aside>
      <Modal></Modal>
      
    </Provider>
  );
}

export default App;
