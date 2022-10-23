import { IconButton } from "@mui/material";
import { useFavorites } from "@context/index";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

function FavoriteButton({ item }) {
	const { hasFavorite, removeFavorite, addToFavorite } = useFavorites();
	return (
		<>
			{hasFavorite(item) ? (
				<IconButton onClick={() => removeFavorite(item)}>
					<FavoriteIcon />
				</IconButton>
			) : (
				<IconButton
					onClick={() => {
						addToFavorite(item);
					}}
				>
					<FavoriteBorderIcon />
				</IconButton>
			)}
		</>
	);
}
export default FavoriteButton
