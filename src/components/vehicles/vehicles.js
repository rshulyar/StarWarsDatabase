import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import classes from './vehicles.module.css';

/** Creates objects that contain information for inclusion in the rows of the table. */
function createData(name, model, vehicleClass, manufacturer, maxAtmospheringSpeed) {
    return { name, model, vehicleClass, manufacturer, maxAtmospheringSpeed };
}

/** An array of objects to be included in the table. */
const rows = [
    createData('Test name', 'test model', 'Test class', 'adeptus manufactorum', 40000),
];

export default function Vehicles() {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Vehicle name</TableCell>
                        <TableCell align="right">Vehicle model</TableCell>
                        <TableCell align="right">Vehicle class</TableCell>
                        <TableCell align="right">Manufacturer</TableCell>
                        <TableCell align="right">Maximum atmosphering speed</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.model}</TableCell>
                            <TableCell align="right">{row.vehicleClass}</TableCell>
                            <TableCell align="right">{row.manufacturer}</TableCell>
                            <TableCell align="right">{row.maxAtmospheringSpeed}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
