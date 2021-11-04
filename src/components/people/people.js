import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import classes from './people.module.css';

/** Creates objects that contain information for inclusion in the rows of the table. */
function createData(name, birthYear, gender, homeworld, species) {
    return { name, birthYear, gender, homeworld, species };
}

/** An array of objects to be included in the table. */
const rows = [
    createData('Test name', '159 BBY', 'x', 'Arakis', 'Hum'),
];

export default function People() {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Birth year</TableCell>
                        <TableCell align="right">Gender</TableCell>
                        <TableCell align="right">Homeworld</TableCell>
                        <TableCell align="right">Species</TableCell>
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
                            <TableCell align="right">{row.birthYear}</TableCell>
                            <TableCell align="right">{row.gender}</TableCell>
                            <TableCell align="right">{row.homeworld}</TableCell>
                            <TableCell align="right">{row.species}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
