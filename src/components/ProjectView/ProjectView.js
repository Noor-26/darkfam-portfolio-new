import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const ProjectView = () => {
  
  const selectedProject = useSelector( state => state?.projectView?.projectView )
  const [datas, setdatas] = useState([])
  const [selectImg, setselectImg] = useState(selectedProject?.img)

  console.log(selectedProject)
  useEffect(() => {
    const details = selectedProject?.details_list?.filter(text => text !=='')
    setdatas(details)
  }, [selectedProject.details_list])
  
  return (
    <section className=" overflow-hidden quickView_wrapper pt-5">
        <div className=" grid grid-cols-2" bis_skin_checked="1">
          <div className=" grid grid-cols-2">
            <div className="col-span-2">

            <img
              alt="Project image"
              className="object-cover object-center rounded "
              src={selectImg }
            />
            </div>
             <div class="col-span-2 md:col-span-1 bg-white mx-1 my-1" onClick={() => setselectImg(selectedProject?.img_2)} >
      <img src={selectedProject?.img_2 || ""}  class="img-fluid"/>

    </div>
    <div class="col-span-2  md:col-span-1 bg-white mx-1 my-1"  onClick={() => setselectImg(selectedProject?.img_3)}>
      <img src={selectedProject?.img_3 || ""} class="img-fluid"/>

    </div>
    <div class="col-span-2  md:col-span-1 bg-white mx-1 my-1" onClick={() => setselectImg(selectedProject?.img_4)} >
      <img src={selectedProject?.img_4 || ""}  class="img-fluid"/>

    </div>
    <div class="col-span-2  md:col-span-1 bg-white mx-1 my-1" onClick={() => setselectImg(selectedProject?.img_5)}>
      <img src={selectedProject?.img_5 || ""}  class="img-fluid"/>

    </div>
    <div class="col-span-2  md:col-span-1 bg-white mx-1 my-1" onClick={() => setselectImg(selectedProject?.img_6)}>
      <img src={selectedProject?.img_6 || ""}  class="img-fluid"/>

    </div>
    <div class="col-span-2  md:col-span-1 bg-white mx-1 my-1" onClick={() => setselectImg(selectedProject?.img_7)}>
      <img src={selectedProject?.img_7 || ""}  class="img-fluid"/>

    </div>
    <div class="col-span-2  md:col-span-1 bg-white mx-1 my-1" onClick={() => setselectImg(selectedProject?.img_8)}>
      <img src={selectedProject?.img_8 || ""}  class="img-fluid"/>

    </div>
          </div>
          <div className="pl-8" bis_skin_checked="1">
            <p className="text-3xl mb-2 text-[#cccccc] ">
              {selectedProject?.name}
            </p>
            
        
            <p className="leading-relaxed mt-4 mb-5">
              {selectedProject?.description}
            </p>
            <p>Details:{selectedProject?.details}</p>
      <ul className='my-3'>
        {datas?.map((data,i) => <li className='list-decimal pl-1'> {data}</li>)}
    
      </ul>
            <div
              className="flex items-center gap-2 flex-wrap justify-start"
              bis_skin_checked="1"
            >
              <button
                className="flex  text-white bg-green-500 border-0 p-2 px-3 focus:outline-none hover:bg-green-600 rounded"
              
              >
                visit github
              </button>
              <button
                className="flex  text-white bg-green-500 border-0 p-2 px-3 focus:outline-none hover:bg-green-600 rounded"

              >
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>
      </section>
  )
}

export default ProjectView