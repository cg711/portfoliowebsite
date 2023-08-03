export default function Job(props) {
  return (
    <div className="">
        <div className="font-bold flex flex-col text-center items-center">
          <h1 className="font-bold text-2xl">{props.jobTitle} at {props.companyName}</h1>
          <h2 className="my-2 text-gray-400 text-sm">{props.location}, {props.duration}</h2>
        </div>
        <div className="flex flex-col items-center text-center my-2">
          {props.children}
        </div>
    </div>
  );
}

