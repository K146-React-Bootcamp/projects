import React, { useState } from "react";
import Layout from "@components/Layout";
import { Box, Container, Typography } from "@mui/material";
import CategoryList from "@components/CategoryList";
import ProductList from "@components/ProductList";

export default function Index(props) {
	const [selectedAlbumId, setSelectedAlbumId] = useState(1);

	return (
		<Layout>
			<Box
				sx={{
					bgcolor: "background.paper",
					pt: 8,
				}}
			>
				<Container maxWidth="md">
					<Typography
						component="h1"
						variant="h2"
						align="center"
						color="text.primary"
						gutterBottom
					>
						Sizin İçin Harika Resimler Listeliyoruz
					</Typography>
					<Typography
						variant="h5"
						align="center"
						color="text.secondary"
						paragraph
					>
						Something short and leading about the collection below—its contents,
						the creator, etc. Make it short and sweet, but not too short so
						folks don&apos;t simply skip over it entirely.
					</Typography>

					<CategoryList
						items={props.albums}
						selectedItemId={selectedAlbumId}
						onClick={(id) => setSelectedAlbumId(id)}
					/>
				</Container>
			</Box>
			<ProductList items={props.photos} selectedItemId={selectedAlbumId} />
		</Layout>
	);
}

export async function getServerSideProps(context) {
	const photos = await fetch(
		"https://jsonplaceholder.typicode.com/photos"
	).then((res) => res.json());
	const albums = await fetch(
		"https://jsonplaceholder.typicode.com/albums"
	).then((res) => res.json());

	return {
		props: {
			title: "Next.js",
			photos: photos,
			albums: albums,
		},
	};
}
