// import React, { useState } from 'react'
// import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'
// import InputField from '../InputField/InputField'
// import { Link } from 'react-router-dom'

// export default function CreatePassword() {


//   return (
//     <div className='flex flex-col w-full items-center pt-8'>

//             <div className='flex flex-col w-[90%] md:w-[50%] lg:w-[25%] '>
//                 <p className='text-3xl font-bold text-gray-700 pb-5'>Create New Password</p>

//                 <InputField
//                     icon={faLock}
//                     type={"password"}
//                     placeholder={"New Password"}
//                     value={data.password}
//                     isPswd
//                 />

//                 <InputField
//                     icon={faLock}
//                     type={"password"}
//                     placeholder={"Confirm New Password"}
//                     value={data.confirmPassword}
//                     isPswd
//                 />

//                 <Link
//                     className={`font-bold text-center text-xl hover:cursor-pointer text-white px-4 py-2 bg-primary-blue rounded-lg md:hover:bg-primary-blue-hover active:bg-primary-blue-hover duration-200 mt-6`}
//                     // onClick={() => onSubmit()}
//                 >
//                     Submit
//                 </Link>
//             </div>

//             <div className='w-[90%] md:w-[30%] flex flex-col items-center mt-10'>
//                 <p className='text-lg text-gray-400 '>Remember your Password?</p>
//                 <Link className='underline text-lg text-primary-blue hover:cursor-pointer md:hover:text-primary-blue-hover active:text-primary-blue-hover ' to={'/login'}>Log In</Link>
//             </div>

//         </div>
//   )
// }
