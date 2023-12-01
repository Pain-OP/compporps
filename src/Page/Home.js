import React from 'react'


export default function Home(props) {
  return (
    <>
<div className='col-md-12 hbanner p-0 '>
    <div className='aqct'>
<nav className="navbar navbar-expand-md navbar-light  ">
<a class="navbar-brand ml-5   " href="#">
    <img src='img/logo1.png' ></img>
</a>
<div style={{width:"10%"}}></div>


  <button
    className="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#collapsibleNavbar"
  >
    <span className='text-light' ><i class="fa fa-bars" aria-hidden="true"></i></span>
  </button>
  <div className="collapse navbar-collapse" id="collapsibleNavbar">
    <ul className="navbar-nav mx-auto ">
      <li className="nav-item ">
        <a className="nav-link text-light" href="#">
          HOME
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-light" href="#About">
          ABOUT ME
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-light" href="#TRAINING">
          TRAINING
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-light" href="#RATES">
          RATES
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-light" href="#CLIENTS">
          CLIENTS
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-light" href="#TESTIMONIALS">
          TESTIMONIALS
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-light" href="#GALLERY">
          GALLERY
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-light" href="#CONTACT">
          CONTACT
        </a>
      </li>
    </ul>
  </div>
</nav>

<div className='col-md-12' style={{height:"100px"}} ></div>

<div className='container'>
    <hr className='border-success float-left mr-3' style={{width:"5%"}}  />
    <h4 className='text-light'><b> 
Maverick</b> <b className='aqua'>Kaan</b></h4>


<p className='font1 text-light'><b>Fitness</b></p>


<span className='font1 text-light bgreen'>Trainer</span><br/>

<hr className='border-light  float-left mr-3' style={{width:"5%"}}  />
<br/>
<br/>
<h1 className='text-light'><b>Let's Set & Reach Your Fitness Goals</b></h1>
<br/>
<button className=' border-0 pt-3 pb-3 pl-5 pr-5 bugreen text-light'>CONTACT ME</button>
</div>
<div className='col-md-12 ' style={{height:"150px"}} ></div>

</div>
</div>


      
    </>
  )
}
