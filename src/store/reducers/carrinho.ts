import { createSlice } from "@reduxjs/toolkit";
import { Prato } from "../../utils/models";

interface CarrinhoState {
  itens: Prato[];
}

const initialState: CarrinhoState = {
  itens: [],
};

const contatosSlice = createSlice({
  name: "carrinho",
  initialState,
  reducers: {
    adicionar: (state, action) => {
      state.itens.push(action.payload);
    },
    remover: (state, action) => {
      state.itens = state.itens.filter((item) => item.id !== action.payload);
    },
  },
});

export const { adicionar, remover } = contatosSlice.actions;

export default contatosSlice.reducer;
