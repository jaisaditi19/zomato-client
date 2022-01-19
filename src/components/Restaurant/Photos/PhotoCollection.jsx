import React from 'react'

function PhotoCollection(props) {

    const openImage=()=>{
        props.setCurrentImage(props.index);
        props.openViewer();
    }

    return (
        <>
           <div className=' h-32 flex flex-col md:h-48' onClick={()=> openImage()} >
               <div className='w-full h-full overflow-hidden rounded-lg'>
                   <img src={props.image} alt='menu' className='w-full h-full transform transition object-center object-cover duration-400 rounded-lg hover:scale-110'/>
                
               </div>
           </div>
        </>
    )
}

export default PhotoCollection
