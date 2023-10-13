import {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
    const [hasSent, setSent] = useState(false);
    // const [buttonClicked, setClicked] = useState(false);
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        setSent(true);
        //emailjs config
        emailjs.sendForm('service_ajhgyqk', 'template_vazjq7c', form.current, 'tL9cH8fOHQHiJsNBt');
    }
    return (
        <div className="relative
            min-h-screen overflow-hidden
            font-jose
            mt-4 
            -mb-48
            ">
            <div className="
            w-9/12 p-6 m-auto  rounded-md
            max-w-screen-lg	
        rin-2 ring-indigo-600
            " id="contact">
                <form ref={form} onSubmit={sendEmail} className="mt-8 space-y-6">
                    <div className="flex flex-col justify-center items-center">
                        <h1 className="mb-5 text-4xl text-gray-900">Contact me!</h1>
                        <label htmlFor="name" className="text-xl text-gray-900">
                            Name
                        </label>
                        <input
                            id="name"
                            name="user_name"
                            type="text"
                            autoComplete="name"
                            required
                            className="
                                w-full
                                block px-2 py-2
                                border
                                border-gray-300
                                rounded-md
                                shadow-lg
                                focus:border-indigo-300
                                focus:ring
                                focus:ring-indigo-200
                                focus:ring-opacity-50
                                mt-3
                                mb-3
                                hover:shadow-2xl
                                max-w-lg
                            "
                        placeholder="Name"/>

                        <label htmlFor="email-address" className="text-xl text-gray-900">
                            Email address
                        </label>
                        <input
                            id="email-address"
                            name="user_email"
                            type="email"
                            autoComplete="email"
                            required
                            className="
                                w-full
                                block px-2 py-2
                                border
                                border-gray-300
                                rounded-md
                                shadow-lg
                                focus:border-indigo-300
                                focus:ring
                                focus:ring-indigo-200
                                focus:ring-opacity-50
                                mt-3
                                mb-3
                                hover:shadow-2xl
                                max-w-lg
                            "
                    placeholder="youremailhere@email.com"/>
                    <label className="text-xl text-gray-900" htmlFor='textmessage'>
                        Message 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-2 inline">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                        </svg>
                    </label>
                    <textarea name="message" id="textmessage"
                    className="block
                        py-2 
                        px-2
                        w-full
                        mt-3
                        mb-3
                        border
                        border-gray-300
                        rounded-md
                        shadow-lg
                        focus:border-indigo-300
                        focus:ring
                        focus:ring-indigo-200
                        focus:ring-opacity-50
                        resize-none
                        hover:shadow-2xl
                    "
                    placeholder="Message here!"
                    rows={10}
                    required
                    />
                    {(hasSent) ? (
                        <h1 className='flex items-center mt-4'>Thanks!
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-2 inline">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
                            </svg>
                        </h1>) 
                        : (<input type="submit" value="Send!" className="h-10
                        px-5
                        text-blue-500
                        bg-white
                        rounded-2xl
                        transition-colors
                        duration-150
                        focus:shadow-outline
                        hover:bg-blue-500
                        border-2
                        border-blue-500
                        hover:text-white
                        mt-4"/>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
}

