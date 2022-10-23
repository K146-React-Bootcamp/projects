import React from "react";
import { Button } from "@mui/material";
import { TabWrapper } from "./style";

export default function CategoryList({ items = [], onClick, selectedItemId }) {
	return (
		<TabWrapper>
			{items.map((album, index) => (
				<div key={index} style={{ marginRight: 10, whiteSpace: "nowrap" }}>
					<Button
						onClick={() => onClick(album.id)}
						variant={selectedItemId === album.id ? "contained" : "outlined"}
					>
						{album.title}
					</Button>
				</div>
			))}
		</TabWrapper>
	);
}
