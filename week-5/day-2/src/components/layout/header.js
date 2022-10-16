import { AppBar, Toolbar, Typography } from "@mui/material";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import { config } from "../../config";
import { FavoritesButton } from "./style";
import { useState } from "react";
import { useFavorites } from "../../context";
import Favorites from "../favorites";

export default function Header() {
	const [showFavorites, setShowFavorites] = useState(false);
	const { getFavoriteCount } = useFavorites();
	return (
		<>
			<AppBar position="sticky">
				<Toolbar>
					<CameraIcon sx={{ mr: 2 }} />
					<Typography variant="h6" color="inherit" noWrap>
						{config.applicationName}
					</Typography>
					<Typography
						variant="h6"
						noWrap
						component="div"
						sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
					></Typography>
					<FavoritesButton
						onClick={() => setShowFavorites(true)}
						variant="h6"
						color="inherit"
						noWrap
					>
						Favoriler {`(${getFavoriteCount()})`}
					</FavoritesButton>
				</Toolbar>
			</AppBar>
			<Favorites show={showFavorites} onClose={() => setShowFavorites(false)} />
		</>
	);
}
