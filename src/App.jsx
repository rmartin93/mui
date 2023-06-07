import Button from "@mui/material/Button";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import PrimarySearchAppBar from "./components/PrimarySearchAppBar";
import Grid from "@mui/material/Unstable_Grid2";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { Card, CardContent } from "@mui/material";
import TemporaryDrawer from "./components/TemporaryDrawer";
function App() {
	const Item = styled(Paper)(({ theme }) => ({
		backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
		...theme.typography.body2,
		padding: theme.spacing(1),
		textAlign: "center",
		color: theme.palette.text.secondary,
	}));
	return (
		<>
			<PrimarySearchAppBar />
			<main>
				<Grid container spacing={2}>
					<Grid xs={8}>
						<Card>
							<CardContent>
								<Button variant="contained">
									<AccessAlarmIcon style={{ marginRight: ".5rem" }} />
									Hello World
								</Button>
							</CardContent>
						</Card>
					</Grid>
					<Grid xs={4}>
						<Card>
							<CardContent>
								<TemporaryDrawer />
							</CardContent>
						</Card>
					</Grid>
				</Grid>
			</main>
		</>
	);
}

export default App;
