import {
	Divider,
	List,
	ListItem,
	ListItemAvatar,
	ListItemText,
} from "@mui/material";
import { Fragment } from "react";
import { usePhotos } from "../../context";
import DrawerModal from "../Drawer";

interface Props {
	open: boolean;
	onClose: () => void;
}
export default function Favorites(props: Props) {
	const { favorites } = usePhotos();
	return (
		<DrawerModal {...props}>
			<List sx={{ width: "100%", bgcolor: "background.paper" }}>
				{favorites.map((item) => (
					<Fragment key={item.id}>
						<ListItem>
							<ListItemAvatar>
								<img src={item.thumbnailUrl} />
							</ListItemAvatar>
							<ListItemText primary={item.title} secondary="1 Ocak 2023" />
						</ListItem>
						<Divider />
					</Fragment>
				))}
			</List>
		</DrawerModal>
	);
}
