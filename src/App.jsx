import Button from "@mui/material/Button";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import PrimarySearchAppBar from "./components/PrimarySearchAppBar";
import Grid from "@mui/material/Unstable_Grid2";
import { Card, CardContent, Typography } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import PokeTable from "./components/PokeTable";
import * as React from "react";

export default function App() {
	const [mode, setMode] = React.useState("dark");
	const colorMode = React.useMemo(
		() => ({
			toggleColorMode: () => {
				setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
			},
		}),
		[]
	);

	const theme = React.useMemo(
		() =>
			createTheme({
				palette: {
					mode,
				},
			}),
		[mode]
	);

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<PrimarySearchAppBar colorMode={colorMode} />
			<main>
				<Grid container spacing={2}>
					<Grid xs={6}>
						<Card>
							<CardContent>
								<Typography mb={3} variant="h5" component="div">
									Pokemon (OG 151)
								</Typography>
								<PokeTable />
							</CardContent>
						</Card>
					</Grid>
					<Grid xs={6}>
						<Card>
							<CardContent>
								<Button variant="contained">
									<AccessAlarmIcon style={{ marginRight: ".5rem" }} />
									Hello World
								</Button>
							</CardContent>
						</Card>
					</Grid>
				</Grid>
			</main>
		</ThemeProvider>
	);
}
