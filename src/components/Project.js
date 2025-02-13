
export default function Project(props) {

  return (
    <>
        <div className="fixed z-10 overflow-y-auto blow-up flex justify-evenly items-center max-h-fit w-9/12 flex-col lg:flex-row gap-11">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg min-w-sm">
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="flex text-gray-900 flex-col flex-nowrap items-center justify-center">
                  <h1 className="font-bold text-2xl text-center">{props.projName}</h1>
                  <h2 className="my-2 text-gray-400 text-sm text-center">
                    Technologies: {props.techs}
                  </h2>
                  <div className="text-center my-2 flex flex-col items-center gap-4">{props.children}</div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 w-full px-4 py-3 flex justify-end sm:px-6">
              <button
                type="button"
                onClick={() => {
                  const temp = document.getElementById(props.id);
                  temp.classList.toggle("hidden");
                }}
                className="h-10 px-5 text-white bg-red-500 rounded-2xl transition-colors duration-150
                                                    focus:shadow-outline
                                                    hover:bg-red-700 sm:mt-0 sm:w-auto"
              >
                Close
              </button>
            </div>
          </div>
          <img alt="..." className="rounded-2xl mt-2 w-5/12 h-5/12 shadow-lg max-w-xl max-h-xl" src={props.int} id="int-image" />
        </div>
    </>

  );
}
