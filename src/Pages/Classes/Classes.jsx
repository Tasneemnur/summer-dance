import { useEffect, useState } from "react";
import Cover from "../../Shared/Cover/Cover";
import DanceClass from "../DanceClass/DanceClass";
import cover from "../../images/banner3.jpg"
import Title from "../../Shared/Title/Title";

const Classes = () => {
    const [approved, setApproved] = useState([]);
    useEffect(() => {
        fetch('https://assignment-12-summer-dance-server.vercel.app/classes?status=Approved')
        .then(res => res.json())
        .then(data => setApproved(data))
    } ,[])
    
    return (
        <div className="">
            <Cover photo={cover} heading="Our Classes"></Cover>
            <Title heading="All Classes" subHeading="These are the classes that we provide"></Title>
            
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mb-10">
            {
                approved.map(item => <DanceClass key={item._id} item={item}></DanceClass> )
            }
        </div>
        </div>
    );
};

export default Classes;