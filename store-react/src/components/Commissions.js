import React, { useState, useEffect } from 'react';

const Commissions = () => {
    const [page, setPage] = useState({});
    const [inputs, setInputs] = useState({
        fname: "",
        lname: "",
        email: "",
        message: ""
    });


    const handleSubmit = (event) => {
        event.preventDefault();
        fetch("http://localhost:3020/api/contact/create", {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify(inputs),
        })
        // .then(response =>  response.text())
        // .then(text => {
        //     console.log((text));
        .then((response) => response.json())
        .then((data) => {
            console.log('Success', data);
            
        })
        .catch((error) => {
            console.error('Error:', error);
            
        });
        setInputs({
            fname: "",
            lname: "",
            email: "",
            message: ""
        });
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setInputs((prevState) => {
            return {...prevState, [name]: value};
        });
    };

    useEffect(() => {
        fetch("http://localhost:3020/api/contact")
        .then(response => response.json())
        .then(page => {
            setPage(page);
        });
    }, []);

    return (
        // console.log(inputs)
        <div className="contact-form">
            <div>
                <div><img className="sectionheader" src="media/geometric.png" alt='blue, gray, and white lines'/></div> 

                <h1 className="section-title">What would you like?</h1>
            </div>
            
            

            <div className ="commissions" >
                <p>
                    <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id aperiam eligendi saepe consequatur maxime laboriosam ea nemo voluptas incidunt? Rerum et, similique reprehenderit fugiat dolores perferendis tempora ex ducimus? Minus.</span>
                    <br></br>
                     <span>Officia aut autem perspiciatis provident dolorum est officiis aliquam, animi nobis placeat exercitationem eum adipisci doloribus! Facilis veniam neque consectetur nihil illum cum? Aliquam similique commodi suscipit illo eaque exercitationem.</span>
                </p>
                <form onSubmit={handleSubmit}>
                    
                    <div className="inputs">

                        <label className="label">First Name:</label>
                            
                            <input className="input-fields" name="fname" value={inputs.fname} type="text"  placeholder="First Name"   onChange={handleChange} required/>
                        
                        <label className="label">Last Name:</label>
                            
                            <input className="input-fields" name="lname" value={inputs.lname} type="text"  placeholder="Last Name"   onChange={handleChange} required/>

                        <label className="label">Email:</label>
                            
                            <input className="input-fields" type="email" name="email" id="email" placeholder="Email" value={inputs.email} onChange={handleChange} required/>
                    </div>
                    
                    <div className="message">

                        <textarea name="message" id="message" cols="30" rows="10" placeholder="Hit me up!" value={inputs.message} onChange={handleChange} required></textarea>
                    </div>

                    <input className="input-butn"  id="butn" type="submit" value="submit" />
                </form>
            </div>
       </div> 
    )
}

export default Commissions;