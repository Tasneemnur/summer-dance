import { useEffect, useState } from "react";
import Cover from "../../Shared/Cover/Cover";
import Title from "../../Shared/Title/Title";
import Instructor from "../Instructor/Instructor";
import cover from "../../images/banner3.jpg"


const Instructors = () => {
    const [instructors, setInstructors] = useState([]);
    useEffect(() => {
        fetch('https://assignment-12-summer-dance-server.vercel.app/users?role=instructor')
        .then(res => res.json())
        .then(data => setInstructors(data))
    } ,[])
    return (
        <div className="">
            <Cover photo={cover} heading="Get to Know Our Instructors"></Cover>
            <Title heading="Our Instructors" subHeading="Here we provide the best we can. These are some well known instructors in the town"></Title>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {
                instructors.map(instructor => <Instructor key={instructor._id} instructor={instructor}></Instructor>)
            }
        </div>
        </div>
    );
};

export default Instructors;