

export default function Project(props) {
    return(
        <div className="flex flex-col flex-nowrap items-center justify-center">
            <h1 className="font-bold text-2xl">{props.projName}</h1>
            <h2 className="mb-2">Technologies: {props.techs}</h2>
                {props.children}
                <img alt='...' className="rounded-lg mt-2" src={props.int}/>
        </div>
    );
}