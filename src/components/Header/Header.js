import React from 'react'
import './Header.css'
import Typewriter from 'typewriter-effect';

const Header = () => {

  return (
    <div className=" main "  id='home'>
    <div className="h-[100vh] flex justify-center items-center flex-col  w-full" id="main-content">
        
            <div className="text-center" >
                <h5 className=" text-7xl heading_font">Mahtab Khan Noor</h5>
                <h1 className="text-center items-center justify-center m-h1 text-[28px] w-[80vw] font text-[#cccccc] flex gap-1">
                    <Typewriter options={{
                        
                        autoStart:true,
                        loop:true,
                        pauseFor:15000,
                        strings: [" I Am A Frontend Web Developer. Waiting To get Hired For Gaining More Knowladge "],
                    }}  />
                </h1>
                
                <div className=''>                    
                    <a href="https://drive.google.com/file/d/1NcMcLOlHxzGKwotRqoxDYwDx1hJ3THhd/view?usp=sharing"  target="_blank"> <button className=" btn mt-3 uppercase">Download Resume</button></a>            
            </div>
        
    </div>
        <div class="scrolldown  ">
    <div class="chevrons">
        <div class="chevrondown"></div>
        <div class="chevrondown"></div>
    </div>
</div>
        </div>
    
</div>
  )
}
export default Header