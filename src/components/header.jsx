export const Header = (props) => {
  return (
    <header id='header'>
      <div className='intro'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
             
              <div className='col-md-8 col-md-offset-2 intro-text'>

              <div class="container">
                    <div class="row">
                        <div class="col-sm">
                           <div className="div1">
                              <h1>
                                {props.data ? props.data.title : 'Loading'}
                                <span></span>
                              </h1>
                                <p>{props.data ? props.data.paragraph1 : 'Loading'}</p>
                                <p>{props.data ? props.data.paragraph2 : 'Loading'}</p>
                                <a
                                  href='#features'
                                  className='btn btn-custom btn-lg page-scroll'
                                >
                                Start a Project
                                </a>{' '}
            
                        </div>
                              <div class="col-sm">         
                                <div className="div2">
                                  <div id="pheonixLogo">
                                    <img id="pheonixImage" src="img/pheonix.png"></img>
                                  </div>
                               </div>
                              </div>

                              <div class="col-sm">
                                
                              </div>

                        </div>
                      </div>
              </div>

             

              </div>
            </div>
          </div>
          <div className="contactDetailsDiv">
              <div className="contactNumberDiv">
                <p id="contactNumberLanding">077 4 141 768</p>
              </div>

              <div className="socialMediaDiv">
                <a target="_blank" href="https://www.facebook.com/rebornIT-111464454651943"><img src="img/fb.png"></img></a>
                <a target="_blank" href="https://www.instagram.com/rebornit/"><img src="img/insta.png"></img></a>
                <img src="img/linkedin.png"></img>
              </div>
          </div>
        </div>
      </div>
    </header>
  )
}
