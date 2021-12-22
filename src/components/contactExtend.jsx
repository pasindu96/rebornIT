import React from 'react';
import emailjs from "emailjs-com";

export const ContactExtend = (props) =>{

    function sendEmail(e){
        e.preventDefault();
        emailjs.sendForm('service_4ehinam','template_sn1sukz',e.target,'user_vFSuRYBMYL78BIN6engQN').then(res=>{

            console.log(res);
                }).catch(err=>console.log(err));
    }

    return(

        <div className="">
            <div id="contactExtend" className="">

        <header class="comapnyLogo raw">
            <img src="img/LOGO.png" alt="logo"></img>
        </header>

    <div class="container">   
    <div class="raw">
        <div class="col-lg-6 Contactright">
            <div class="FormDiv">
                <div class="Hello">
                    <h1>Hi.Say Hello</h1>
                    <p>Fill up our Form bellow or <span class="formDivSpan">send us an email </span></p>
                </div>
            <div>
            <form action="" method="" class="form shadow-sm" id="formId">
                <div><input type="text" name="cname" placeholder="Company Name"/> </div>
                <div> <input type="text" name="name" placeholder="Your Name"/></div>
                <div> <input type="tel" name="tele" placeholder="Phone Number"/></div>
                <div><input type="email" name="email" placeholder="Email Address"/></div>
                <div class="btnDiv"><input type='submit' className='btn btn-primary btn-lg' id="contactbtn" onClick=""/>
                   
</div>
            </form>
            </div>
            </div>
        </div> 
       
        <div class="col-lg-6 Conatctleft">
            <img src="img/contactImage.png" alt="image" width="450" height="550"></img> 
        </div>
    </div>
</div>

    <footer class="row footer-text-black">
        <div class="col-sm-4">077 4 141 768</div>
        <div class="col-sm-4"><a href="www.rebornit.lk@gmail.com">rebornit.lk@gmail.com</a></div>
        <div class="col-sm-4">
            <div className="">
                <a target="_blank" href="https://www.facebook.com/rebornIT-111464454651943"><img src="img/fb.png"></img></a>
                <a target="_blank" href="https://www.instagram.com/rebornit/"><img src="img/insta.png"></img></a>
                <a target="" href=""><img src="img/linkedin.png"></img></a>
              </div>
        </div>
     </footer>
            </div>
        </div>
    );
}
