export default function Job(props) {
  return (
    <div className="">
        <div className="font-bold flex flex-col items-center">
          <h1>{props.jobTitle} at {props.companyName}</h1>
          <h2 className="mb-2"><em>{props.location}, {props.duration}</em></h2>
        </div>
        <div className="flex flex-col items-center">
          {props.children}
        </div>
    </div>
  );
}

