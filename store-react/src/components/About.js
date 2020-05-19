import React, {useState, useEffect} from 'react';
// import SectionHeader from "./SectionHeader";

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
        {/* {SectionHeader} */}
        <div>
                <div><img className="sectionheader" src="media/geometric.png" alt='blue, gray, and white lines'/></div> 

                <h1 className="section-title">{page.title}</h1>
            </div>
        <div className="about">
            
            
            

            <div className="bio">
               <div><img className="moe" src="media/moe.png" alt="anime girl drawing"/></div>
            <div className="about-body">{page.body}</div> 
            
            </div>
            
        </div>
        </>        
        
    ) 
    

}

export default About;