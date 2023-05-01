

export default function Project(props) {
    return(
        <div>
            <h1><strong>{props.projName}</strong></h1>
            <h2 className="mb-2">Technologies: {props.techs}</h2>
            <div className="flex items-center flex-col">
                {props.children}
                <img alt='...' className="rounded-lg mt-2" src={props.int}/>
            </div>
        </div>
    );
}