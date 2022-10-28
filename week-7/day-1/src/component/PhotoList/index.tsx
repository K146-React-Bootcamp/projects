import {
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Container,
	Grid,
	Typography,
} from "@mui/material";
import { Photo } from "../../types";
import AddToFavorite from "../AddToFavorite";

interface Props {
	items: Array<Photo>;
}
export default function PhotoList(props: Props) {
	return (
		<Container sx={{ py: 8 }} maxWidth="md">
			{/* End hero unit */}
			<Grid container spacing={4}>
				{props.items.map((item) => (
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
								alt={item.title}
							/>
							<CardContent sx={{ flexGrow: 1 }}>
								<Typography gutterBottom variant="h5" component="h2">
									{item.title}
								</Typography>
							</CardContent>
							<CardActions>
								<AddToFavorite item={item} />
							</CardActions>
						</Card>
					</Grid>
				))}
			</Grid>
		</Container>
	);
}
