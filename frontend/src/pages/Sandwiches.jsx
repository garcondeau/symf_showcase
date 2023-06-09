import react, {useEffect, useState} from "react";
import axios from "axios"
import SandwichesList from "../components/sandwiches/SandwichesList";

const Sandwiches = () => {
    const [data, setData] = useState({});
    const fetchData = () => {
        axios.get('/sandwiches/public')
            .then((response) => setData(response.data))
    }
    useEffect(() => {
        fetchData()
    }, []);
    console.log(data)
    return (
        <>
            {data &&
                <SandwichesList colNames={['id', 'title', 'description', 'price']} data={data}/>
            }
        </>
    )
}

export default Sandwiches;