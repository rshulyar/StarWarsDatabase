import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import classes from './species.module.css';

/** Creates objects that contain information for inclusion in the rows of the table. */
function createData(name, classification, designation, homeworld) {
    return { name, classification, designation, homeworld };
}

/** An array of objects to be included in the table. */
const rows = [
    createData('Test species', 'data deleted', 'data not found', 'Arakis'),
];

export default function Species() {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Species name</TableCell>
                        <TableCell align="right">Classification</TableCell>
                        <TableCell align="right">Designation</TableCell>
                        <TableCell align="right">Homeworld</TableCell>
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
                            <TableCell align="right">{row.classification}</TableCell>
                            <TableCell align="right">{row.designation}</TableCell>
                            <TableCell align="right">{row.homeworld}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
