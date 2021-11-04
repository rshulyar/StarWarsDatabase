import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import classes from './starships.module.css';

/** Creates objects that contain information for inclusion in the rows of the table. */
function createData(name, model, starshipClass, manufacturer, MGLT) {
    return { name, model, starshipClass, manufacturer, MGLT };
}

/** An array of objects to be included in the table. */
const rows = [
    createData('Test starship', 'test model', 'test class', 'adeptus manufactorum', 4.0),
];

export default function Starships() {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Starship name</TableCell>
                        <TableCell align="right">Model</TableCell>
                        <TableCell align="right">Starship class</TableCell>
                        <TableCell align="right">Manufacturer</TableCell>
                        <TableCell align="right">MGLT</TableCell>
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
                            <TableCell align="right">{row.starshipClass}</TableCell>
                            <TableCell align="right">{row.manufacturer}</TableCell>
                            <TableCell align="right">{row.MGLT}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
