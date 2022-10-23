import { AppBar, Toolbar, Typography } from "@mui/material";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import { useState } from "react";
import ErrorBoundary from "@components/ErrorBoundary";
import { FavoritesButton } from "./style";
import { useFavorites } from "@context/index";
import Favorites from "@components/Favorites";

export default function Header() {
	const [showFavorites, setShowFavorites] = useState(false);
	const { getFavoriteCount } = useFavorites();
	
	return (
		<>
			<AppBar position="sticky">
				<Toolbar>
					<CameraIcon sx={{ mr: 2 }} />
					<Typography variant="h6" color="inherit" noWrap>
            Example NextJs Gallery App
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
			<ErrorBoundary>
				<Favorites
					show={showFavorites}
					onClose={() => setShowFavorites(false)}
				/>
			</ErrorBoundary>
		</>
	);
}
