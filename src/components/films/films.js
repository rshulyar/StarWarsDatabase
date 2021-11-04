import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import classes from './films.module.css';

/** Creates objects that contain information for inclusion in the rows of the table. */
function createData(title, episodeID, director, releaseDate) {
    return { title, episodeID, director, releaseDate};
}

/** An array of objects to be included in the table. */
const rows = [
    createData('Test title', -1, 'noname', 0),
];

export default function Films() {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Title</TableCell>
                        <TableCell align="right">Episode ID</TableCell>
                        <TableCell align="right">Director</TableCell>
                        <TableCell align="right">Release Date</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.title}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.title}
                            </TableCell>
                            <TableCell align="right">{row.episodeID}</TableCell>
                            <TableCell align="right">{row.director}</TableCell>
                            <TableCell align="right">{row.releaseDate}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
