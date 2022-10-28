import React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Footer from "./Footer";
import Header from "./Header";
import { Backdrop, CircularProgress } from "@mui/material";

const theme = createTheme();

interface Props {
	children: React.ReactNode;
	loading?: boolean;
}
export default function Layout({ loading = false, children }: Props) {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Backdrop
				sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
				open={loading}
			>
				<CircularProgress color="inherit" />
			</Backdrop>
			<Header />
			<main>
				{/* Hero unit */}
				<Box
					sx={{
						bgcolor: "background.paper",
						pt: 8,
						pb: 6,
					}}
				>
					<Container maxWidth="sm">
						<Typography
							component="h1"
							variant="h2"
							align="center"
							color="text.primary"
							gutterBottom
						>
							Album layout
						</Typography>
						<Typography
							variant="h5"
							align="center"
							color="text.secondary"
							paragraph
						>
							Something short and leading about the collection below—its
							contents, the creator, etc. Make it short and sweet, but not too
							short so folks don&apos;t simply skip over it entirely.
						</Typography>
						<Stack
							sx={{ pt: 4 }}
							direction="row"
							spacing={2}
							justifyContent="center"
						>
							<Button variant="contained">Main call to action</Button>
							<Button variant="outlined">Secondary action</Button>
						</Stack>
					</Container>
				</Box>
				{children}
			</main>
			{/* Footer */}

			<Footer />
			{/* End footer */}
		</ThemeProvider>
	);
}
