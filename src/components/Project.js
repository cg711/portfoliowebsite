

export default function Project(props) {
    return(
        <div className="flex flex-col flex-nowrap items-center justify-center">
            <h1 className="font-bold text-2xl">{props.projName}</h1>
            <h2 className="my-2 text-gray-400 text-sm">Technologies: {props.techs}</h2>
            <div className="text-center my-2">
                {props.children}
            </div>
            <img alt='...' className="rounded-xl mt-2" src={props.int}/>
        </div>
    );
}