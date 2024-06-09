import { configureStore } from "@reduxjs/toolkit";

import carrinhoReducer from "./reducers/carrinho";
import restauranteReducer from "./reducers/restaurantes";
import pagamentoReducer from "./reducers/pagamentoForm";
import enderecoReducer from "./reducers/enderecoForm";

const store = configureStore({
  reducer: {
    restaurante: restauranteReducer,
    carrinho: carrinhoReducer,
    enderecoForm: enderecoReducer,
    pagamentoForm: pagamentoReducer,
  },
});

export type RootReducer = ReturnType<typeof store.getState>;

export default store;
