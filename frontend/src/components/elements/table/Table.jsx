import react from "react";

import {TableCell, TableHeader, TableRow, TableWrapper} from "./styledTable";

const Table = ({colNames, data}) => {
    return (
        <TableWrapper>
            <TableHeader>
                {colNames && colNames.map((value, key) => (
                    <TableCell key={key}>
                        {value}
                    </TableCell>
                ))}
            </TableHeader>
            {data && Object.values(data).map((value, key) => (
                    <TableRow key={key}>
                        <TableCell key={'id_'+key}>{value.id}</TableCell>
                        <TableCell key={'title_'+key}>{value.title}</TableCell>
                        <TableCell key={'desc_'+key}>{value.description}</TableCell>
                        <TableCell key={'price_'+key}>{value.price}</TableCell>
                    </TableRow>
                ))}
        </TableWrapper>
    )
}

export default Table;