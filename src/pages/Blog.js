import React from "react";

import  leaf from '../images/img-1.jpg'
import  web from '../images/img-2.jpg'
import  rose from '../images/img-3.jpg'
import  ice from '../images/img-4.jpg'

function Blog() {
    return (
    <>

      <div className="container-blogAll">

        <div className="container-blogCurrent">
            <div className="blog-img-and-text">
                <div className="blog-divForImg">
                    <img
                                      
                                        className="blog-img"
                                        src= "https://cdn-icons-png.flaticon.com/512/861/861389.png"
                                        alt= 'KUKU'
                    />
                </div>
                <h3>Blog post</h3>
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Proin tortor purus platea sit eu id nisi litora libero. Neque vulputate consequat ac amet augue blandit maximus aliquet congue. Pharetra vestibulum posuere ornare faucibus fusce dictumst orci aenean eu facilisis ut volutpat commodo senectus purus himenaeos fames primis convallis nisi.
                  Phasellus fermentum malesuada phasellus netus dictum aenean placerat egestas amet. Ornare taciti semper dolor tristique morbi. Sem leo tincidunt aliquet semper eu lectus scelerisque quis. Sagittis vivamus mollis nisi mollis enim fermentum laoreet.
                  
                  </p>
            </div>   
        <div className="container-blogInfo">
             <img
                 className="img-nature"
                   src= {leaf}
                   alt= 'LEAF'
              />
        </div>
        </div>
        <hr></hr>


        <div className="container-blogCurrent">
            <div className="blog-img-and-text">
                <div className="blog-divForImg">
                    <img
                                      
                                        className="blog-img"
                                        src= "https://cdn-icons-png.flaticon.com/512/1198/1198523.png"
                                        alt= 'KUKU'
                    />
                </div>
                <h3>Blog post</h3>
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Proin tortor purus platea sit eu id nisi litora libero. Neque vulputate consequat ac amet augue blandit maximus aliquet congue. Pharetra vestibulum posuere ornare faucibus fusce dictumst orci aenean eu facilisis ut volutpat commodo senectus purus himenaeos fames primis convallis nisi.
                  Phasellus fermentum malesuada phasellus netus dictum aenean placerat egestas amet. Ornare taciti semper dolor tristique morbi. Sem leo tincidunt aliquet semper eu lectus scelerisque quis. Sagittis vivamus mollis nisi mollis enim fermentum laoreet.
                  </p>
            </div>   
        <div className="container-blogInfo">
        <img
                 className="img-nature"
                 src= {web}
                 alt= 'WEB'
            />
        </div>
        </div>
        <hr></hr>

        <div className="container-blogCurrent">
            <div className="blog-img-and-text">
                <div className="blog-divForImg">
                    <img
                                      
                                        className="blog-img"
                                        src= "https://cdn-icons-png.flaticon.com/512/833/833308.png"
                                        alt= 'KUKU'
                    />
                </div>
                <h3>Blog post</h3>
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Proin tortor purus platea sit eu id nisi litora libero. Neque vulputate consequat ac amet augue blandit maximus aliquet congue. Pharetra vestibulum posuere ornare faucibus fusce dictumst orci aenean eu facilisis ut volutpat commodo senectus purus himenaeos fames primis convallis nisi.
                  Phasellus fermentum malesuada phasellus netus dictum aenean placerat egestas amet. Ornare taciti semper dolor tristique morbi. Sem leo tincidunt aliquet semper eu lectus scelerisque quis. Sagittis vivamus mollis nisi mollis enim fermentum laoreet.
                  </p>
            </div>   
        <div className="container-blogInfo">
        <img
                 className="img-nature"
                 src= {rose}
                 alt= 'ROSE'
            />
        </div>
        </div>
        <hr></hr>


        <div className="container-blogCurrent">
            <div className="blog-img-and-text">
                <div className="blog-divForImg">
                    <img
                                      
                                        className="blog-img"
                                        src= "https://cdn-icons-png.flaticon.com/512/112/112263.png"
                                        alt= 'KUKU'
                    />
                </div>
                <h3>Blog post</h3>
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Proin tortor purus platea sit eu id nisi litora libero. Neque vulputate consequat ac amet augue blandit maximus aliquet congue. Pharetra vestibulum posuere ornare faucibus fusce dictumst orci aenean eu facilisis ut volutpat commodo senectus purus himenaeos fames primis convallis nisi.
                  Phasellus fermentum malesuada phasellus netus dictum aenean placerat egestas amet. Ornare taciti semper dolor tristique morbi. Sem leo tincidunt aliquet semper eu lectus scelerisque quis. Sagittis vivamus mollis nisi mollis enim fermentum laoreet.
                  </p>
            </div>   
        <div className="container-blogInfo">
        <img 
                 className="img-nature"
                 src= {ice}
                 alt= 'ICE'
            />
        </div>
        </div>


        </div>  

      </>
    );
}
  
export default Blog;

