import classNames from "classnames"

export default function moduleBody ({ ...props }){
return(
    <main className='flex justify-center min-h-screen bg-white md:bg-gradient-to-r md:from-red-500 md:to-blue-900  md:items-center '>
      <div className='container flex justify-center '>

        <div className=' flex justify-center max-w-6x1 w-full  md:rounded md:items-center md:mb-20 h-[700px] max-w-[800px] md:drop-shadow-3xl md:mt-4'>
          {/* img phase -> */} 
         
          {/* <div className=' box-decoration-clone hover:box-decoration-slice relative h-full md:rounded-s-lg  bg-backgroudnDark  md:flex  md:flex-1 ' /> */}

          <div className='flex  bg-white  flex-1 mt-10   h-full justify-center  md:rounded-lg md:px-10 md:py-20 md:mt-0 flex flex-1 flex-col '>
                  {...props}
          </div>
        </div>

      </div>
    </main>
  
)}
