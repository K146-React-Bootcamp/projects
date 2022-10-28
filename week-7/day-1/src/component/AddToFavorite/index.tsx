import { IconButton } from "@mui/material";
import { Photo } from "../../types";
import { FavoriteBorder, Favorite } from "@mui/icons-material";
import { usePhotos } from "../../context";
interface Props {
	item: Photo;
}
export default function AddToFavorite(props: Props) {
	const { hasFavorite, addToFavorite, removeFormFavorite } = usePhotos();

	if (hasFavorite(props.item)) {
		return (
			<IconButton onClick={() => removeFormFavorite(props.item)}>
				<Favorite />
			</IconButton>
		);
	}
	return (
		<IconButton onClick={() => addToFavorite(props.item)}>
			<FavoriteBorder />
		</IconButton>
	);
}
