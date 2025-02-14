import React, {useEffect, useState }from 'react'

const CurrentTime = () => {
        const [time, setTime]=useState(new Date());
        
          useEffect(()=>{
            const interval=setInterval(()=>{
              setTime(new Date());
            }, 1000);
            return()=>clearInterval(interval);
          }, []);
        
            const now=time.toDateString();
            const hour=time.getHours().toString().padStart(2, 0);
            const min=time.getMinutes().toString().padStart(2, 0);
            const sec=time.getSeconds().toString().padStart(2, 0);
        
        
          return (
            <center>
              <div>
                <h2>Today Date : {now} </h2>
                <h2>
                  This is the Current Time : {hour} : {min} : {sec}
                </h2>
              </div>
            </center>
          );
}

export default CurrentTime