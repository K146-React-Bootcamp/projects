import * as React from "react";
import Drawer, { DrawerProps } from "@mui/material/Drawer";
import { styled } from "@mui/material";

const StyledDrawer = styled(Drawer)`
	.MuiDrawer-paperAnchorRight {
		width: 50%;
	}
`;
export default function DrawerModal(props: DrawerProps) {
	return (
		<StyledDrawer
			anchor={"right"}
			open={props.open}
			onClose={props.onClose}
			{...props}
		>
			{props.children}
		</StyledDrawer>
	);
}
