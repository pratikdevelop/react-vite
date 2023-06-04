import React from 'react'

const Signup = () => {
    return (
        <>

            <form className=' bg-slate-900 m-auto mt-20 w-4/6 shadow-2xl  shadow-blue-300  bg-clip-content border-white border-2 rounded flex flex-col '>
                <h1 className=" col-span-2 mt-5 text-xl px-auto font-bold leading-none tracking-tight   mx-auto sm:text-2xl text-white" style={{ fontFamily: "cursive" }}> signup and connect with all countries news</h1>
                <div className="grid grid-cols-2 gap-5 p-6">

                    <div className='flex flex-col '>
                        <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-white dark:text-white">First name</label>
                        <input type="text" id="first_name" className="bg-transparent  border-gray-300 text-white text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
                    </div>
                    <div className='flex flex-col '>
                        <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-white dark:text-white">Last name</label>
                        <input type="text" id="last_name" className="bg-transparent  border-gray-300 text-white text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required />
                    </div>

                    <div className='flex flex-col '>
                        <label htmlFor="phone" className="block mb-2 text-sm font-medium text-white dark:text-white">Phone number</label>
                        <input type="tel" id="phone" className="bg-transparent  border-gray-300 text-white text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-white dark:text-white">Email address</label>
                        <input type="email" id="email" className="bg-transparent  border-gray-300 text-white text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-white dark:text-white">Password</label>
                        <input type="password" id="password" className="bg-transparent  border-gray-300 text-white text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="confirm_password" className="block mb-2 text-sm font-medium text-white dark:text-white">Confirm password</label>
                        <input type="password" id="confirm_password" className="bg-transparent  border-gray-300 text-white text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required />
                    </div>
                    <label className="ml-auto col-span-2 text-sm text-center font-medium mix-blend-color-dodge mx-auto text-white flex items-center  w-full">
                         <h4> I have an account ?</h4>  <a href="#" className="text-blue-600 hover:underline dark:text-blue-500"> login now </a></label>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 rounded-full focus:ring-4 focus:outline-none col-span-2  focus:ring-blue-300 font-medium  text-base w-full  px-5 py-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                </div>
            </form>
        </>
    )
}

export default Signup