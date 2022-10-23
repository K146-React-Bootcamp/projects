import React, { useState } from "react";
import {
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Container,
	Grid,
	Typography,
} from "@mui/material";
import FavoriteButton from "@components/FavoriteButton";

export default function ProductList({ items = [], selectedItemId }) {
	const [page] = useState(1);
	const [itemsPerPage] = useState(12);

	return (
		<Container sx={{ py: 8 }} maxWidth="md">
			{/* End hero unit */}
			<Grid container spacing={4}>
				{items
					.filter((x) => x.albumId === selectedItemId)
					.slice(page, page * itemsPerPage + 1)
					.map((item) => (
						<Grid item key={item.id} xs={12} sm={6} md={4}>
							<Card
								sx={{
									height: "100%",
									display: "flex",
									flexDirection: "column",
								}}
							>
								<CardMedia
									component="img"
									image={item.thumbnailUrl}
									alt="random"
								/>
								<CardContent sx={{ flexGrow: 1 }}>
									<Typography gutterBottom variant="h5" component="h2">
										{item.title}
									</Typography>
								</CardContent>
								<CardActions>
									<FavoriteButton item={item} />
								</CardActions>
							</Card>
						</Grid>
					))}
			</Grid>
		</Container>
	);
}
