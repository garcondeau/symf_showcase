import react from 'react'
import Table from "../elements/table/Table";

const SandwichesList = ({colNames, data}) => {
    return (
        <>
            {data  &&
                <Table colNames={colNames} data={data}/>
            }
        </>
    )
}

export default SandwichesList;