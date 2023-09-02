import Viewer from 'react-viewer';
import {useState} from 'react';

export default function Resume() {
    const [visible, setVisible] = useState(false);
    return (
        <div className="mt-4 mb-4">
            <button className="
            h-10 px-5 text-white bg-none border-2 border-white rounded-2xl transition-colors duration-150
            focus:shadow-outline
            hover:bg-white
            hover:text-blue-500
            flex items-center
            " onClick={() => {setVisible(true);}}>View Resume 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-2 inline">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
            </svg>
          </button>
            <Viewer
            visible = {visible}
            onClose={()=>{setVisible(false);}}
            images={[{src:'./resume.jpg',alt:"Resume"}]}
            rotatable={false}
            noImgDetails={true}
            showTotal={false}
            changeable={false}
            downloadable={true}
            scalable={false}
            downloadInNewWindow={true}
            />
        </div>
    );
}

