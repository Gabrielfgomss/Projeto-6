import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface EnderecoFormState {
  nome: string;
  endereco: string;
  cidade: string;
  cep: string;
  numero: string;
  complemento?: string;
}

const initialState: EnderecoFormState = {
  nome: "",
  endereco: "",
  cidade: "",
  cep: "",
  numero: "",
  complemento: "",
};

const enderecoSlice = createSlice({
  name: "enderecoForm",
  initialState,
  reducers: {
    updateField: (
      state,
      action: PayloadAction<{ name: keyof EnderecoFormState; value: string }>
    ) => {
      state[action.payload.name] = action.payload.value;
    },
    resetForm: () => initialState,
  },
});

export const { updateField, resetForm } = enderecoSlice.actions;

export default enderecoSlice.reducer;
