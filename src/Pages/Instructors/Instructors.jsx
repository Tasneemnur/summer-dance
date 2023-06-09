import { useEffect, useState } from "react";


const Instructors = () => {
    const [instructor, setInstructor] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/users?role=instructor')
        .then(res => res.json())
        .then(data => setInstructor(data))
    } ,[])
    return (
        <div>
            
        </div>
    );
};

export default Instructors;