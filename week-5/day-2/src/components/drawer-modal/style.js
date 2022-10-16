import { Drawer, styled } from "@mui/material";

export const StyledDrawer = styled(Drawer)`
	& .MuiDrawer-paperAnchorRight {
		width: 50%;
	}
`;
export const DrawerHeader = styled("div")`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0px 10px;
`;
export const DrawerTitle = styled("h2")``;
