import { DrawerHeader, StyledDrawer, DrawerTitle } from "./style";
import CloseIcon from "@mui/icons-material/Close";
import { Divider, IconButton } from "@mui/material";

export default function DrawerModal({
	anchor = "right",
	open,
	onClose,
	children,
	title,
}) {
	return (
		<StyledDrawer anchor={anchor} open={open} onClose={onClose}>
			<DrawerHeader>
				<DrawerTitle>{title}</DrawerTitle>
				<IconButton onClick={onClose}>
					<CloseIcon />
				</IconButton>
			</DrawerHeader>
			<Divider />
			{children}
		</StyledDrawer>
	);
}
