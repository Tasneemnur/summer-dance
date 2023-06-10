

const Title = ({heading, subHeading}) => {
    return (
        <div className="mt-14 mb-10">
            <h1 className="text-3xl font-bold text-blue-950 text-center">{heading}</h1>
            <p className="text-center text-sm text-neutral-600 mt-2 ">----{subHeading}----</p>
        </div>
    );
};

export default Title;