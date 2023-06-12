import useSWR from "swr";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

export default function PokeTable({ setPokeId }) {
	// Fetch the pokemon data from the API
	const fetcher = (url) => fetch(url).then((res) => res.json());
	const { data, error } = useSWR(
		"https://pokeapi.co/api/v2/pokemon?limit=151",
		fetcher
	);
	if (error) return <div>failed to load</div>;
	if (!data) return <div>loading...</div>;

	// Define the columns for the table
	const columns = [
		{ field: "id", headerName: "ID", width: 70 },
		{ field: "name", headerName: "Name", width: 130 },
	];
	// Define the rows for the table
	const rows = data.results.map((pokemon, index) => {
		return {
			id: index + 1,
			name: pokemon.name,
		};
	});
	return (
		<div style={{ height: 500, width: "100%" }}>
			<DataGrid
				rows={rows}
				columns={columns}
				initialState={{
					pagination: {
						paginationModel: { pageSize: 25, page: 0 },
					},
				}}
				slots={{ toolbar: GridToolbar }}
				slotProps={{
					toolbar: {
						showQuickFilter: true,
						quickFilterProps: { debounceMs: 500 },
					},
				}}
				// on row click, get row info
				onRowClick={(row) => {
					console.log("row", row);
					setPokeId(row.id);
				}}
			/>
		</div>
	);
}
