import React from 'react'

const MainContent = () => {
    return (
        <div className='min-h-screen flex justify-between bg-black shadow-lg rounded-xl p-4'>
            <div className="flex flex-1 justify-between p-4">
                <div className="w-1/2 text-left p-6">
                    <div className="justify-between bg-white h-[80%] shadow-md rounded-xl p-6">
                        <h1 className="text-2xl font-bold text-black">Welcome Kruthika</h1>
                    </div>
                </div>
                <div className='w-1/2 p-4'>
                    <div className="justify-between bg-white h-[80%] shadow-md rounded-xl p-6">
                        <h1 className="text-2xl font-bold mb-2 text-black">Trending</h1>

                            <ul className="list-disc pl-5">
                                <li className="text-black">Kruthika is awesome</li>
                                <li className="text-black">Visruth is always second</li>
                            </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainContent;