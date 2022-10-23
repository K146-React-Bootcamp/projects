import {
	Divider,
	List,
	ListItem,
	ListItemAvatar
} from "@mui/material";
import { Fragment } from "react";
import { useFavorites } from "../../context";
import DrawerModal from "../DrawerModal";
import { StyledListItemText } from "./style";

export default function Favorites({ show = false, onClose = () => null }) {
  const { state } = useFavorites();
  return (
		<DrawerModal title={"Favoriler"} open={show} onClose={onClose}>
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
		</DrawerModal>
  )
}