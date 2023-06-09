import { useEffect, useState } from "react";
import DanceClass from "../DanceClass/DanceClass";

const Classes = () => {
    const [approved, setApproved] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/classes?status=Approved')
        .then(res => res.json())
        .then(data => setApproved(data))
    } ,[])
    
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 my-10">
            {
                approved.map(item => <DanceClass key={item._id} item={item}></DanceClass> )
            }
        </div>
    );
};

export default Classes;