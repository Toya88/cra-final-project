import React, {useEffect, useState} from 'react';



const About = () => {
    const [page, setPage] = useState({});

    useEffect(() => {
        fetch('http://localhost:3020/api/pages/about')
        .then(response => response.json())
        .then(page => {
            setPage(page);
            console.log(page)
        
        });
    }, []);

    return (
        <>
        <div>
           <div className="bio">
               <div><img className="moe" src="media/moe.png" alt="anime girl drawing"/></div>
            <div className="about-body"></div> 
        </div>
        </>
    )

};

export default About;


    return (
        <>
        {/* {SectionHeader} */}
        
                
            </div>
        <div className="about">
            
            
            

            
            
            </div>
            
        </div>
        </>        
        
    ) 
    

}