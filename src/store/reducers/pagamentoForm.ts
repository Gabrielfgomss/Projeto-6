import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface PagamentoFormState {
  nomeCartao: string;
  cartaoNum: string;
  cvv: string;
  mesVencimento: string;
  anoVencimento: string;
}

const initialState: PagamentoFormState = {
  nomeCartao: "",
  cartaoNum: "",
  cvv: "",
  mesVencimento: "",
  anoVencimento: "",
};

const pagamentoSlice = createSlice({
  name: "pagamentoForm",
  initialState,
  reducers: {
    updateField: (
      state,
      action: PayloadAction<{ name: keyof PagamentoFormState; value: string }>
    ) => {
      state[action.payload.name] = action.payload.value;
    },
    resetForm: () => initialState,
  },
});

export const { updateField, resetForm } = pagamentoSlice.actions;

export default pagamentoSlice.reducer;
