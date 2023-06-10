import { useEffect, useState } from "react";
import Instructor from "../Instructor/Instructor";


const Instructors = () => {
    const [instructors, setInstructors] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/users?role=instructor')
        .then(res => res.json())
        .then(data => setInstructors(data))
    } ,[])
    return (
        <div className="">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {
                instructors.map(instructor => <Instructor key={instructor._id} instructor={instructor}></Instructor>)
            }
        </div>
        </div>
    );
};

export default Instructors;