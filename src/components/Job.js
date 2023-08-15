export default function Job(props) {
  return (
    <div className="">
        <div className="flex flex-col text-center items-center">
          <h1 className="font-bold text-2xl text-gray-900">{props.jobTitle} at {props.companyName}</h1>
          <h2 className="my-2 text-gray-400 text-sm">{props.location}, {props.duration}</h2>
        </div>
        <div className="flex text-gray-900 flex-col items-center text-center my-2">
          {props.children}
        </div>
    </div>
  );
}

