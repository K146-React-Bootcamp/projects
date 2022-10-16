import { createContext, useContext, useState } from "react";
const Context = createContext({
	state: [],
	removeFavorite: (item) => {},
	addToFavorite: (item) => {},
  hasFavorite: (item) => { },
  getFavoriteCount: () => {},
});

const Provider = (props) => {
	const [state, setState] = useState([]);

	const addToFavorite = (item) => {
		setState((prev) => [...prev, { ...item }]);
	};

	const removeFavorite = (item) => {
		setState((prev) => [...prev.filter((x) => x.id !== item.id)]);
	};

	const hasFavorite = (item) => state.some((x) => x.id === item.id);

	const getFavoriteCount = () => state.length;
	return (
		<Context.Provider
			value={{
				state,
				removeFavorite,
				addToFavorite,
        hasFavorite,
        getFavoriteCount
			}}
		>
			{props.children}
		</Context.Provider>
	);
};

export const useFavorites = () => useContext(Context);

export const Favorite = {
	Context,
	Provider,
};
