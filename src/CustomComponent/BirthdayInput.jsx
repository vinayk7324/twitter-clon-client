import React from 'react'


const BirthdayInput = ({
    DOB = {month,date,year},
    onchangeHandler = ()=>{}
    
    
}) => {
   

   
    const monthArr = [
        {
            name: "",

        },
        {
            name: "January",

        },
        {
            name: "February",

        },
        {
            name: "March",

        },
        {
            name: "April",

        },
        {
            name: "May",

        },
        {
            name: "June",

        },
        {
            name: "July",

        },
        {
            name: "August",

        },
        {
            name: "September",

        },
        {
            name: "October",

        },
        {
            name: "November",

        },
        {
            name: "December",

        },

    ]
    const dateArr = [
        {
            date: ""
        }

    ]
    const yearArr = [
        {
            year: ``
        }

    ]
    for (let index = 0; index < 31; index++) {
        dateArr.push({ date: `${index + 1}` })

    }

    for (let index = 0; index < 200; index++) {
        yearArr.push({ year: `${(new Date()).getFullYear() - index}` })

    }
  return (
    <div className=' flex justify-between '>
                            <div className="   relative w-fit  ">
                                <label htmlFor="  " className=' absolute twitter-text  ps-1 top-1 lg:text-[18px] text-[16px] left-3 text-white' >Month</label>

                                <select value={DOB.month}   onChange={onchangeHandler} aria-invalid="false" className=' selctedArea border-[4px]  
                                border-[2px] text-[16px] rounded-md focus-within:border-[#5fe6e8] cursor-pointer  bg-black text-white  lg:h-20  lg:w-52  h-16 w-32    twitter-text font-semibold  ' aria-placeholder='hello' name="month" id="">
                                    {
                                        monthArr.map((element, index) => (

                                            <option key={index} className=' bg-black border-b text-white hover:bg-blue-300 rounded-none twitter-text' value={index} disabled={index==0} >{element.name} </option>
                                        )
                                        )
                                    }
                                </select>
                            </div>
                            <div className="   relative w-fit rounded-md  ">
                                <label htmlFor="  " className=' absolute  top-1 lg:text-[18px] left-3 text-[16px] text-white twitter-text' >Date</label>

                                <select value={DOB.date} onChange={onchangeHandler} aria-invalid="false" className=' selctedArea border-[4px]  border-[2px] text-[16px]   rounded-md focus-within:border-[#5fe6e8] cursor-pointer  bg-black text-white   lg:h-20  lg:w-28 h-16 w-16     twitter-text font-semibold  ' aria-placeholder='hello' name="date" id="">
                                    {
                                        dateArr.map((element, index) => (

                                            <option key={index} className=' bg-black  text-white hover:bg-blue-300 rounded-none twitter-text' value={element.date} >{element.date} </option>
                                        )
                                        )
                                    }
                                </select>
                            </div>
                            <div className="   relative w-fit ">
                                <label htmlFor="  " className=' absolute  top-1 lg:text-[18px] left-3 text-white twitter-text text-[16px] px-1' >Year</label>

                                <select value={DOB.year} onChange={onchangeHandler} aria-invalid="false" className=' selctedArea border-[4px]  border-[2px] text-[14px] rounded-md focus-within:border-[#5fe6e8] cursor-pointer  bg-black text-white  lg:h-20  lg:w-28 h-16 w-24     twitter-text font-semibold  ' aria-placeholder='hello' name="year" id="" >
                                    {
                                        yearArr.map((element, index) => (

                                            <option key={index} className=' bg-black border-b text-white hover:bg-blue-300 rounded-none twitter-text' value={element.year} >{element.year} </option>
                                        )
                                )
                                    }
                                </select>
                            </div>



                        </div>
  )
}

export default BirthdayInput
