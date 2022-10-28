import React, {
	createContext,
	FC,
	useContext,
	useEffect,
	useState,
} from "react";
import { Photo } from "../types";

export interface PhotosContextType {
	items: Photo[];
	loading: boolean;
	favorites: Photo[];
	addToFavorite: (item: Photo) => void;
	removeFormFavorite: (item: Photo) => void;
	hasFavorite: (item: Photo) => boolean;
}

const initialState: PhotosContextType = {
	items: [],
	loading: false,
	favorites: [],
	addToFavorite: (item) => {},
	hasFavorite: (item) => false,
	removeFormFavorite: (item) => {},
};
export const Context = createContext<PhotosContextType>(initialState);

export const usePhotos = () => useContext(Context);

interface Props {
	children: React.ReactNode;
}

const API_BASE_URL = "https://jsonplaceholder.typicode.com";

interface State {
	items: Photo[];
	loading: boolean;
	favorites: Photo[];
}
export const PhotosProvider: FC<Props> = ({ children }) => {
	const [state, setState] = useState<State>({
		favorites: [],
		items: [],
		loading: true,
	});

	useEffect(() => {
		fetch(`${API_BASE_URL}/photos`)
			.then((res) => res.json())
			.then((items: Photo[]) => {
				setTimeout(() => {
					setState({
						loading: false,
						items: items.slice(0, 50),
						favorites: [],
					});
				}, 1000);
			});
	}, []);

	const addToFavorite = (item: Photo) => {
		setState((prev) => {
			prev.favorites.push(item);
			return { ...prev };
		});
	};
	const removeFormFavorite = (item: Photo) => {
		setState((prev) => {
			return {
				...prev,
				favorites: prev.favorites.filter((x) => x.id !== item.id),
			};
		});
	};
	const hasFavorite = (item: Photo) => {
		return state.favorites.some((x) => x.id === item.id);
	};
	return (
		<Context.Provider
			value={{
				...state,
				addToFavorite: addToFavorite,
				removeFormFavorite: removeFormFavorite,
				hasFavorite: hasFavorite,
			}}
		>
			{children}
		</Context.Provider>
	);
};
