import React, { isValidElement, useEffect, useState } from 'react'

const PostComponents = () => {

    const [isVisible, setVisible] = useState(1)
    const increaseCount = ()=>{
        setVisible((count=>count+1))
    }
    useEffect(()=>{
        setInterval(increaseCount,1000)
    },[])

    useEffect(()=>{
        // console.log('set coutn has been registerd')
    },[isVisible])


  return (
    <div>
     so the count state changes randomly {isVisible}

    </div>
  )
}

export default PostComponents
