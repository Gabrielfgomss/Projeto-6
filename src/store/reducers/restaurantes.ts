import { createSlice } from "@reduxjs/toolkit";
import japaneseCover from "../../../public/28895a55942ffb290182da4c32ba645d.png";
import italianCover from "../../../public/c90467aeb9c58ffac7808807e160ee0c.png";
import lamen from "../../../public/lamen.jpg";
import pizza from "../../../public/374d0118af6a26d9cdb2300a285d481a.png";

const contatosSlice = createSlice({
  name: "restaurantes",
  initialState: {
    itens: [
      {
        capa: japaneseCover,
        destaque: true,
        tipoComida: "Japonesa",
        nomeRestaurante: "Hioki Sushi ",
        descricaoRestaurante:
          "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!",
        nota: "4.9",
        id: Math.floor(Math.random() * 1000000),
        pratos: [
          {
            nome: "Lamen",
            descricao:
              "Aorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ligula risus, imperdiet et bibendum id, rutrum at ante. Integer pretium massa magna. Aliquam venenatis in nibh et facilisis. Morbi ultricies nulla elit, in porta magna rhoncus ac. Maecenas ante dui, rutrum at orci sed, ullamcorper bibendum mauris.",
            capa: lamen,
            id: Math.floor(Math.random() * 1000000),
            quantidade: "2 a 3",
            valor: 50.4,
          },
          {
            nome: "Lamen",
            descricao:
              "Borem ipsum dolor sit amet, consectetur adipiscing elit. Donec ligula risus, imperdiet et bibendum id, rutrum at ante. Integer pretium massa magna. Aliquam venenatis in nibh et facilisis. Morbi ultricies nulla elit, in porta magna rhoncus ac. Maecenas ante dui, rutrum at orci sed, ullamcorper bibendum mauris.",
            capa: lamen,
            id: Math.floor(Math.random() * 1000000),
            quantidade: "2 a 3",
            valor: 50.4,
          },
          {
            nome: "Lamen",
            descricao:
              "Corem ipsum dolor sit amet, consectetur adipiscing elit. Donec ligula risus, imperdiet et bibendum id, rutrum at ante. Integer pretium massa magna. Aliquam venenatis in nibh et facilisis. Morbi ultricies nulla elit, in porta magna rhoncus ac. Maecenas ante dui, rutrum at orci sed, ullamcorper bibendum mauris.",
            capa: lamen,
            id: Math.floor(Math.random() * 1000000),
            quantidade: "2 a 3",
            valor: 50.4,
          },
          {
            nome: "Lamen",
            descricao:
              "Dorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ligula risus, imperdiet et bibendum id, rutrum at ante. Integer pretium massa magna. Aliquam venenatis in nibh et facilisis. Morbi ultricies nulla elit, in porta magna rhoncus ac. Maecenas ante dui, rutrum at orci sed, ullamcorper bibendum mauris.",
            capa: lamen,
            id: Math.floor(Math.random() * 1000000),
            quantidade: "2 a 3",
            valor: 50.4,
          },
          {
            nome: "Lamen",
            descricao:
              "Eorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ligula risus, imperdiet et bibendum id, rutrum at ante. Integer pretium massa magna. Aliquam venenatis in nibh et facilisis. Morbi ultricies nulla elit, in porta magna rhoncus ac. Maecenas ante dui, rutrum at orci sed, ullamcorper bibendum mauris.",
            capa: lamen,
            id: Math.floor(Math.random() * 1000000),
            quantidade: "2 a 3",
            valor: 50.4,
          },
          {
            nome: "Lamen",
            descricao:
              "Forem ipsum dolor sit amet, consectetur adipiscing elit. Donec ligula risus, imperdiet et bibendum id, rutrum at ante. Integer pretium massa magna. Aliquam venenatis in nibh et facilisis. Morbi ultricies nulla elit, in porta magna rhoncus ac. Maecenas ante dui, rutrum at orci sed, ullamcorper bibendum mauris.",
            capa: lamen,
            id: Math.floor(Math.random() * 1000000),
            quantidade: "2 a 3",
            valor: 50.4,
          },
        ],
      },
      {
        capa: italianCover,
        destaque: false,
        tipoComida: "Italiana",
        nomeRestaurante: "La Dolce Vita Trattoria",
        descricaoRestaurante:
          "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
        nota: "4.6",
        id: Math.floor(Math.random() * 1000000),
        pratos: [
          {
            nome: "Pizza Marguerita",
            quantidade: "2 a 3",
            descricao:
              "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
            capa: pizza,
            id: Math.floor(Math.random() * 1000000),
            valor: 10,
          },
          {
            nome: "Pizza Marguerita",
            quantidade: "2 a 3",
            descricao:
              "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
            capa: pizza,
            id: Math.floor(Math.random() * 1000000),
            valor: 10,
          },
          {
            nome: "Pizza Marguerita",
            quantidade: "2 a 3",
            descricao:
              "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
            capa: pizza,
            id: Math.floor(Math.random() * 1000000),
            valor: 10,
          },
          {
            nome: "Pizza Marguerita",
            quantidade: "2 a 3",
            descricao:
              "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
            capa: pizza,
            id: Math.floor(Math.random() * 1000000),
            valor: 10,
          },
          {
            nome: "Pizza Marguerita",
            quantidade: "2 a 3",
            descricao:
              "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
            capa: pizza,
            id: Math.floor(Math.random() * 1000000),
            valor: 10,
          },
          {
            nome: "Pizza Marguerita",
            quantidade: "2 a 3",
            descricao:
              "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
            capa: pizza,
            id: Math.floor(Math.random() * 1000000),
            valor: 10,
          },
        ],
      },
      {
        capa: italianCover,
        destaque: false,
        tipoComida: "Italiana",
        nomeRestaurante: "La Dolce Vita Trattoria",
        descricaoRestaurante:
          "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
        nota: "4.6",
        id: Math.floor(Math.random() * 1000000),
        pratos: [
          {
            nome: "Pizza Marguerita",
            quantidade: "2 a 3",
            descricao:
              "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
            capa: pizza,
            id: Math.floor(Math.random() * 1000000),
            valor: 40,
          },
          {
            nome: "Pizza Marguerita",
            quantidade: "2 a 3",
            descricao:
              "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
            capa: pizza,
            id: Math.floor(Math.random() * 1000000),
            valor: 40,
          },
          {
            nome: "Pizza Marguerita",
            quantidade: "2 a 3",
            descricao:
              "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
            capa: pizza,
            id: Math.floor(Math.random() * 1000000),
            valor: 40,
          },
          {
            nome: "Pizza Marguerita",
            quantidade: "2 a 3",
            descricao:
              "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
            capa: pizza,
            id: Math.floor(Math.random() * 1000000),
            valor: 40,
          },
          {
            nome: "Pizza Marguerita",
            quantidade: "2 a 3",
            descricao:
              "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
            capa: pizza,
            id: Math.floor(Math.random() * 1000000),
            valor: 40,
          },
          {
            nome: "Pizza Marguerita",
            quantidade: "2 a 3",
            descricao:
              "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
            capa: pizza,
            id: Math.floor(Math.random() * 1000000),
            valor: 40,
          },
        ],
      },
      {
        capa: italianCover,
        destaque: false,
        tipoComida: "Italiana",
        nomeRestaurante: "La Dolce Vita Trattoria",
        descricaoRestaurante:
          "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
        nota: "4.6",
        id: Math.floor(Math.random() * 1000000),
        pratos: [
          {
            nome: "Pizza Marguerita",
            quantidade: "2 a 3",
            descricao:
              "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
            capa: pizza,
            id: Math.floor(Math.random() * 1000000),
            valor: 80,
          },
          {
            nome: "Pizza Marguerita",
            quantidade: "2 a 3",
            descricao:
              "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
            capa: pizza,
            id: Math.floor(Math.random() * 1000000),
            valor: 80,
          },
          {
            nome: "Pizza Marguerita",
            quantidade: "2 a 3",
            descricao:
              "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
            capa: pizza,
            id: Math.floor(Math.random() * 1000000),
            valor: 80,
          },
          {
            nome: "Pizza Marguerita",
            quantidade: "2 a 3",
            descricao:
              "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
            capa: pizza,
            id: Math.floor(Math.random() * 1000000),
            valor: 80,
          },
          {
            nome: "Pizza Marguerita",
            quantidade: "2 a 3",
            descricao:
              "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
            capa: pizza,
            id: Math.floor(Math.random() * 1000000),
            valor: 80,
          },
          {
            nome: "Pizza Marguerita",
            quantidade: "2 a 3",
            descricao:
              "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
            capa: pizza,
            id: Math.floor(Math.random() * 1000000),
            valor: 80,
          },
        ],
      },
      {
        capa: italianCover,
        destaque: false,
        tipoComida: "Italiana",
        nomeRestaurante: "La Dolce Vita Trattoria",
        descricaoRestaurante:
          "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
        nota: "4.6",
        id: Math.floor(Math.random() * 1000000),
        pratos: [
          {
            nome: "Pizza Marguerita",
            quantidade: "2 a 3",
            descricao:
              "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
            capa: pizza,
            id: Math.floor(Math.random() * 1000000),
            valor: 75,
          },
          {
            nome: "Pizza Marguerita",
            quantidade: "2 a 3",
            descricao:
              "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
            capa: pizza,
            id: Math.floor(Math.random() * 1000000),
            valor: 75,
          },
          {
            nome: "Pizza Marguerita",
            quantidade: "2 a 3",
            descricao:
              "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
            capa: pizza,
            id: Math.floor(Math.random() * 1000000),
            valor: 75,
          },
          {
            nome: "Pizza Marguerita",
            quantidade: "2 a 3",
            descricao:
              "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
            capa: pizza,
            id: Math.floor(Math.random() * 1000000),
            valor: 75,
          },
          {
            nome: "Pizza Marguerita",
            quantidade: "2 a 3",
            descricao:
              "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
            capa: pizza,
            id: Math.floor(Math.random() * 1000000),
            valor: 75,
          },
          {
            nome: "Pizza Marguerita",
            quantidade: "2 a 3",
            descricao:
              "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
            capa: pizza,
            id: Math.floor(Math.random() * 1000000),
            valor: 75,
          },
        ],
      },
      {
        capa: italianCover,
        destaque: false,
        tipoComida: "Italiana",
        nomeRestaurante: "La Dolce Vita Trattoria",
        descricaoRestaurante:
          "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
        nota: "4.6",
        id: Math.floor(Math.random() * 1000000),
        pratos: [
          {
            nome: "Pizza Marguerita",
            quantidade: "2 a 3",
            descricao:
              "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
            capa: "../../public/374d0118af6a26d9cdb2300a285d481a.png",
            id: Math.floor(Math.random() * 1000000),
            valor: 45,
          },
          {
            nome: "Pizza Marguerita",
            quantidade: "2 a 3",
            descricao:
              "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
            capa: "../../public/374d0118af6a26d9cdb2300a285d481a.png",
            id: Math.floor(Math.random() * 1000000),
            valor: 45,
          },
          {
            nome: "Pizza Marguerita",
            quantidade: "2 a 3",
            descricao:
              "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
            capa: "../../public/374d0118af6a26d9cdb2300a285d481a.png",
            id: Math.floor(Math.random() * 1000000),
            valor: 45,
          },
          {
            nome: "Pizza Marguerita",
            quantidade: "2 a 3",
            descricao:
              "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
            capa: "../../public/374d0118af6a26d9cdb2300a285d481a.png",
            id: Math.floor(Math.random() * 1000000),
            valor: 45,
          },
          {
            nome: "Pizza Marguerita",
            quantidade: "2 a 3",
            descricao:
              "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
            capa: "../../public/374d0118af6a26d9cdb2300a285d481a.png",
            id: Math.floor(Math.random() * 1000000),
            valor: 45,
          },
          {
            nome: "Pizza Marguerita",
            quantidade: "2 a 3",
            descricao:
              "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
            capa: "../../public/374d0118af6a26d9cdb2300a285d481a.png",
            id: Math.floor(Math.random() * 1000000),
            valor: 45,
          },
        ],
      },
    ],
  },
  reducers: {
    state: (state) => {
      return state;
    },
  },
});

export default contatosSlice.reducer;
