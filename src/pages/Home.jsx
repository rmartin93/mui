import * as React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { Card, CardContent, Typography } from "@mui/material";
import PokeTable from "../components/PokeTable";
import Button from "@mui/material/Button";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import PokeDetail from "../components/PokeDetail";

export default function Home() {
	const [pokeId, setPokeId] = React.useState(null);
	return (
		<Grid container spacing={2}>
			<Grid xs>
				<Card>
					<CardContent>
						<Typography mb={3} variant="h5" component="div">
							Pokemon (OG 151)
						</Typography>
						<PokeTable setPokeId={setPokeId} />
					</CardContent>
				</Card>
			</Grid>
			<Grid xs={3}>
				{pokeId && (
					<Card>
						<CardContent>
							<PokeDetail pokeId={pokeId} />
						</CardContent>
					</Card>
				)}
			</Grid>
		</Grid>
	);
}
