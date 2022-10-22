import {
	Divider,
	List,
	ListItem,
	ListItemAvatar
} from "@mui/material";
import { Fragment, useEffect } from "react";
import { useFavorites } from "../../context";
import DrawerModal from "../drawer-modal";
import CustomModal from "../modal";
import { StyledListItemText } from "./style";

export default function Favorites({ show, onClose }) {
	const { state } = useFavorites();
	// useEffect(() => {
	// 	if (show) {
	// 		throw new Error("Favorites component has an error")
	// 	}
	// }, [show])

	const renderError = () => {
		//throw "error";
		return null;
	}
	return (
		// <DrawerModal title={"Favoriler"} open={show} onClose={onClose}>
		// 	{show && renderError()}
		// 	<List sx={{ width: "100%", bgcolor: "background.paper" }}>
		// 		{state.map((item) => (
		// 			<Fragment key={item.id}>
		// 				<ListItem>
		// 					<ListItemAvatar>
		// 						<img src={item.thumbnailUrl} />
		// 					</ListItemAvatar>
		// 					<StyledListItemText primary={item.title} secondary="1 Ocak 2023" />
    //         </ListItem>
    //         <Divider />
		// 			</Fragment>
		// 		))}
		// 	</List>
		// </DrawerModal>
		<CustomModal open={show} onClose={onClose}  title={"Favoriler"}>
			<List sx={{ width: "100%", bgcolor: "background.paper" }}>
				{state.map((item) => (
					<Fragment key={item.id}>
						<ListItem>
							<ListItemAvatar>
								<img src={item.thumbnailUrl} />
							</ListItemAvatar>
							<StyledListItemText primary={item.title} secondary="1 Ocak 2023" />
            </ListItem>
            <Divider />
					</Fragment>
				))}
			</List>
		</CustomModal>
	);
}
