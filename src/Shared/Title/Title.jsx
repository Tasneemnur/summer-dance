

const Title = ({heading, subHeading}) => {
    return (
        <div className="mt-14 mb-10 border-b-2 border-orange-600 w-1/3 mx-auto py-4">
            <h1 className="text-2xl font-bold text-blue-950 text-center">{heading}</h1>
            <p className="text-center text-sm text-neutral-600 ">{subHeading}</p>
        </div>
    );
};

export default Title;