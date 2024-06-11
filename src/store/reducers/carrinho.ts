import { createSlice } from "@reduxjs/toolkit";
import { Cardapio } from "../../utils/models";

interface CarrinhoState {
  itens: Cardapio[];
}

const initialState: CarrinhoState = {
  itens: [],
};

const carrinhoSlice = createSlice({
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

export const { adicionar, remover } = carrinhoSlice.actions;

export default carrinhoSlice.reducer;
