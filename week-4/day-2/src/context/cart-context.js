import React, { createContext, useContext, useEffect, useState } from "react";

const Context = createContext({
	state: {},
	updateFromCart: (item) => {},
	addToCart: (item) => {},
  hasShoppingCart: (item) => { },
	getCartCount: () => 0,
	/**
	 * 
	 * @param {number} id 
	 */
	removeFromCart: (id) => { },
	removeCartItems: () => {}
});

export const useShoppingCart = () => useContext(Context);

export const CartProvider = ({ children, initialState = {}}) => {
  const [state, setState] = useState(initialState);
  useEffect(() => {
    window.localStorage.setItem("cart", JSON.stringify(state))
  }, [state])

	const addToCart = (item) => {
		setState((prev) => {
			return { ...prev, [item.id]: { quantity: 1 } };
		});
	};

	/// jsdoc
	/**
	 *
	 * @param {any} item
	 * @param {"minus" | "plus"} type
	 * @returns
	 */
	const updateFromCart = (item, type) => {
		if (type === "plus") {
			setState((prev) => {
				prev[item.id].quantity++;
				return { ...prev };
			});
			return;
		}
		if (type === "minus") {
			setState((prev) => {
				if (prev[item.id].quantity > 1) {
					prev[item.id].quantity--;
				} else {
					delete prev[item.id];
				}
				return { ...prev };
			});
		}
	};

	const hasShoppingCart = (item) => {
		return state[item.id] ? true : false;
	};

	const getCartCount = () => {
		let count = 0;
		Object.keys(state).forEach((id) => {
			const item = state[id];
			count += item.quantity;
		});
		return count;
	};

	const removeFromCart = id => {
		setState(prev => {
			const state = { ...prev };
			delete state[id]
			return {...state }
		})
	}

	const removeCartItems = () => {
		setState({});
	}
	return (
		<Context.Provider
			value={{
				state,
				updateFromCart,
				addToCart,
				hasShoppingCart,
				getCartCount,
				removeFromCart,
				removeCartItems
			}}
		>
			{children}
		</Context.Provider>
	);
};
