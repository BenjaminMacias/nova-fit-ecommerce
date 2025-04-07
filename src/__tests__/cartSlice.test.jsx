import cartReducer, { addToCart, removeFromCart, clearCart } from '../store/cartSlice';

describe('cartSlice', () => {
  const mockProduct = { id: 1, name: 'Producto 1', price: 100, image: 'image.jpg' };

  // Test: Estado inicial
  it('debería retornar el estado inicial', () => {
    const initialState = { items: [] };
    const result = cartReducer(undefined, {});
    expect(result).toEqual(initialState);
  });

  // Test: Agregar un producto
  it('debería agregar un producto al carrito', () => {
    const initialState = { items: [] };
    const nextState = cartReducer(initialState, addToCart(mockProduct));
    expect(nextState.items).toHaveLength(1);
    expect(nextState.items[0]).toEqual({ ...mockProduct, quantity: 1 });
  });

  // Test: Incrementar la cantidad si el producto ya está en el carrito
  it('debería incrementar la cantidad si el producto ya está en el carrito', () => {
    const initialState = { items: [{ ...mockProduct, quantity: 1 }] };
    const nextState = cartReducer(initialState, addToCart(mockProduct));
    expect(nextState.items[0].quantity).toBe(2); // La cantidad debería incrementarse a 2
  });

  // Test: Eliminar un producto
  it('debería eliminar un producto del carrito', () => {
    const initialState = { items: [{ ...mockProduct, quantity: 1 }] };
    const nextState = cartReducer(initialState, removeFromCart(mockProduct.id));
    expect(nextState.items).toHaveLength(0); // El carrito debería quedar vacío
  });

  // Test: Limpiar el carrito
  it('debería limpiar el carrito', () => {
    const initialState = { items: [{ ...mockProduct, quantity: 1 }] };
    const nextState = cartReducer(initialState, clearCart());
    expect(nextState.items).toHaveLength(0); // El carrito debería estar vacío
  });
});
