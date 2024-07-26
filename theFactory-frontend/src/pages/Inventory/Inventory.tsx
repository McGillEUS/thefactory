import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {DataGrid} from "@mui/x-data-grid";

export function Inventory() {
    const headers = [
        {field: 'id', headerName: 'ID', width: 90},
        {field: 'name', headerName: 'Name', width: 150},
        {field: 'description', headerName: 'Description', width: 150},
        {field: 'quantity', headerName: 'Quantity', width: 150},
        {field: 'price', headerName: 'Price', width: 150},
    ];

    const data: any[] = [];
    return (
        <Box className="px-8 max-w-7xl flex flex-col">
            <Typography variant="h1">Inventory</Typography>
            <DataGrid className="self-center w-full" columns={headers} rows={data} />
        </Box>
    );
}
