
// import React from 'react';
// import { Link } from 'react-router-dom';

// const Button = () => {
//     return (
//         <div className='flex items-center mt-6 justify-center'>
//             <div className='flex rounded-2xl border h-[50px] justify-center w-[300px] items-center bg-[#f2f2f2] dark:bg-[#121212] gap-3'>
//                 <div className='hover:rounded-xl hover:border px-3 py-3 hover:text-xs hover:bg-gray-300 dark:hover:bg-gray-700 hover:h-[40px] hover:w-[132px] active:bg-gray-700 active:text-white justify-center flex items-center'>
//                     <Link to='' className='text-sm text-gray-800 dark:text-gray-200'>Admission Form</Link>
//                 </div>

//                 <div className='hover:rounded-xl hover:border px-3 py-3 hover:text-xs hover:bg-gray-300 dark:hover:bg-gray-700 hover:h-[40px] hover:w-[132px] active:bg-gray-700 active:text-white justify-center flex items-center'>
//                     <Link to='verify' className='text-sm text-gray-800 dark:text-gray-200'>Verify Admission</Link>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Button;



import React from 'react';
import { Link } from 'react-router-dom';

const Button = () => {
    return (
        <div className='flex items-center mt-6 justify-center'>
            <div className='flex flex-col md:flex-row rounded-2xl border h-auto justify-center items-center bg-[#f2f2f2] dark:bg-[#121212] gap-4 p-4'>
                <Link 
                    to='' 
                    className='flex-1 min-w-[150px] text-center text-sm text-gray-800 dark:text-gray-200 
                    px-4 py-2 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700 
                    active:bg-gray-700 active:text-white transition duration-200 ease-in-out'>
                    Admission Form
                </Link>

                <Link 
                    to='verify' 
                    className='flex-1 min-w-[150px] text-center text-sm text-gray-800 dark:text-gray-200 
                    px-4 py-2 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700 
                    active:bg-gray-700 active:text-white transition duration-200 ease-in-out'>
                    Verify Admission
                </Link>
            </div>
        </div>
    );
}

export default Button;










// import React from 'react';
// import { Link } from 'react-router-dom';

// const Button = () => {
//     return (
//         <div className='flex items-center mt-6 justify-center'>
//             <div className='flex rounded-2xl border h-[50px] justify-center w-full max-w-[300px] items-center bg-[#f2f2f2] dark:bg-[#121212] gap-3'>
//                 <div className='hover:rounded-xl hover:border px-3 py-2 hover:text-xs hover:bg-gray-300 dark:hover:bg-gray-700 hover:h-[40px] hover:w-full active:bg-gray-700 active:text-white justify-center flex items-center'>
//                     <Link to='' className='text-sm text-gray-800 dark:text-gray-200'>Admission Form</Link>
//                 </div>

//                 <div className='hover:rounded-xl hover:border px-3 py-2 hover:text-xs hover:bg-gray-300 dark:hover:bg-gray-700 hover:h-[40px] hover:w-full active:bg-gray-700 active:text-white justify-center flex items-center'>
//                     <Link to='verify' className='text-sm text-gray-800 dark:text-gray-200'>Verify Admission</Link>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Button;
