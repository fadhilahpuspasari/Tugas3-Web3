import React from 'react';
import About from './About';


const Profile = (props) => {

    // console.log(props);
    const image1 = require(`../../assets/images/picture.png`);

    return (
    

                <div className="row h-100 m-0 p-0 d-flex align-items-center w-75">
                    <div className="col d-flex align-items-center d-block h-50 " style={{backgroundColor:"#f6c7d0"}}>
                            <h1 className="text-white" style={{fontSize:"70px"}}>
                            Fad<span style={{color:"rgb(86, 44, 55)",fontSize:"128px"}}>.</span> <br/> 
                            Pus<br/>
                            </h1>
                            

                    </div>
                    <img src={image1} className="img-fluid h-100 position-absolute ml-auto" alt="" style={{right:-100}}/>

                    

                </div>
            
    )
}

export default Profile;