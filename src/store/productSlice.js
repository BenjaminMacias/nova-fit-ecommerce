// src/store/productSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    {
      id: 1,
      name: "Leggings ProFlex",
      price: 799,
      image: "/assets/leggings.jpg",
      description: "Leggings deportivos ultra cómodos y de alto rendimiento.",
    },
    {
      id: 2,
      name: "Playera DryFit Nova",
      price: 599,
      image: "/assets/playera.jpg",
      description: "Camiseta de entrenamiento transpirable, ideal para gym o outdoor.",
    },
    {
      id: 3,
      name: "Sudadera NovaFit Max",
      price: 999,
      image: "/assets/sudadera.jpg",
      description: "Sudadera premium con ajuste atlético y diseño moderno.",
    },
  ],
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
});

export default productSlice.reducer;
