import React from 'react'
import ForYou from './ForYou'
import Following from './Following'

const TabsContainer = ({
    slug = ''
}) => {
    const tabsArr = [
        {

            slug: "/for-you",
            element: <ForYou />

        },
        {   
            slug:"/following",
            element:<Following/>

        }
    ]
    return (
        <>
        {
            tabsArr.map((element,index)=>(
                <div className=' ' key={index}>
                   {
                    element.slug==slug && element.element
                   }

                </div>
            )


            )
        }


        </>
    )
}

export default TabsContainer
