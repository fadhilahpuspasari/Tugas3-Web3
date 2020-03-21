import React from 'react';


const Contact = (props) => {

    console.log("Contact");

    return (
        <div className="row h-100 m-0 p-0 d-flex align-items-center ">
                <span>
                <h1 className="ml-5" style={{color:"#000533"}}>Find me on :</h1>
                <div className="ml-5" style={{width:"56px",height:"10px",backgroundColor:"#f6c7d0"}}></div>
                </span>
                <div style={{width:"56px",height:"10px",backgroundColor:""}}></div>
                <div className="text-white">
                    <a className="text-white" href="https://www.instagram.com/fadhilahpuspasari/">
                    <div className="rounded p-2 my-2" style={{backgroundColor:"#C13584"}}>
                        <h2>Instagram <i class="fab fa-instagram"></i></h2>
                    </div></a>
                    <a className="text-white" href="https://api.whatsapp.com/send?phone=6282242879555">
                    <div className="rounded p-2 my-2" style={{backgroundColor:"#25D366"}}>
                        <h2>Whatsapp <i class="fab fa-whatsapp"></i></h2>
                    </div></a>
                    <a className="text-white" href="https://github.com/fadhilahpuspasari">
                    <div className="rounded p-2 my-2 " style={{backgroundColor:"#211F1F"}}>
                        <h2>Github <i class="fab fa-github"></i></h2>
                    </div></a>
                    <a className="text-white" href="https://www.facebook.com/fadhilah.puspasari">
                    <div className="rounded p-2 my-2" style={{backgroundColor:"#4267B2"}}>
                        <h2>Facebook <i class="fab fa-facebook"></i></h2>
                    </div></a>
                    <a className="text-white" href="mailto:fadhilahpuspasari.48@gmail.com">
                    <div className="rounded p-2 my-2" style={{backgroundColor:"#B23121"}}>
                        <h2>Email <i class="fas fa-envelope"></i></h2>
                    </div></a>
                </div>
                
                    
        </div>
    )
}

export default Contact;