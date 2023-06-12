import { Parallax } from 'react-parallax';

const Cover = ({photo, heading}) => {
    return (
        <Parallax
        blur={{ min: -50, max: 50 }}
        bgImage={photo}
        bgImageAlt="the menu"
        strength={-200}
    >
        <div className="hero h-[700px]">
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">{heading}</h1>
                    <p className="mb-5">Summer Dance is one of the popular dance class academy which gives student the best experience on their vacation period.</p>

                </div>
            </div>
        </div>
    </Parallax>
    );
};

export default Cover;