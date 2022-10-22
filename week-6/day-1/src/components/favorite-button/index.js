import { IconButton } from "@mui/material";
import { useFavorites } from "../../context";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { withSnackbar } from "../snackbar";

function FavoriteButton({ item, handleToggle }) {
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
						handleToggle(true, "Eklendi");
					}}
				>
					<FavoriteBorderIcon />
				</IconButton>
			)}
		</>
	);
}
export default withSnackbar(FavoriteButton);
