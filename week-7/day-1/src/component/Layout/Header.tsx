import AppBar from "@mui/material/AppBar";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { usePhotos } from "../../context";
import Favorites from "../Favorites";
import { useState } from "react";

export default function Header() {
	const [open, setOpen] = useState<boolean>(false);
	const { favorites } = usePhotos();
	return (
		<>
			<AppBar position="sticky">
				<Toolbar>
					<CameraIcon sx={{ mr: 2 }} />
					<Typography variant="h6" color="inherit" noWrap>
						Album layout
					</Typography>
					<div style={{ flexGrow: 1 }} />
					<Box
						component={"div"}
						onClick={() => setOpen(true)}
						style={{ cursor: "pointer" }}
					>{`Favorilerim (${favorites.length})`}</Box>
				</Toolbar>
			</AppBar>
			<Favorites open={open} onClose={() => setOpen(false)} />
		</>
	);
}
