import useSWR from "swr";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
export default function PokeDetail({ pokeId }) {
	// fetch pokemon data by id whenever pokeId changes
	const fetcher = (url) =>
		fetch(url).then((res) => {
			return new Promise((resolve) => {
				// slight delay to simulate network latency and show spinner in UI
				setTimeout(() => {
					resolve(res.json());
				}, 500);
			});
		});
	const { data, error } = useSWR(
		`https://pokeapi.co/api/v2/pokemon/${pokeId}`,
		fetcher
	);
	if (error) return <div>failed to load</div>;
	if (!data)
		return (
			<Box sx={{ display: "flex", justifyContent: "center" }}>
				<CircularProgress />
			</Box>
		);
	const { name, sprites } = data;
	const nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1);
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Typography mb={1} variant="h5" component="div">
				{nameCapitalized}
			</Typography>
			<img src={sprites.front_default} />
		</div>
	);
}
