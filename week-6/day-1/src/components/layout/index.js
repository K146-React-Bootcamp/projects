import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Footer from "./footer";
import Header from "./header";

const theme = createTheme({
	typography: {
		fontFamily: ["Montserrat", "sans-serif"].join(","),
		button: {
			textTransform: "none",
		},
	},
});

export default function Layout(props) {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Header />
			<main>{props.children}</main>
			<Footer />
		</ThemeProvider>
	);
}
