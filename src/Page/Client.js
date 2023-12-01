import React from 'react'

export default function Client(props) {
  return (
    <>
      <div id='CLIENTS' className='col-md-12 cbanner p-0'>
      <div className='aqct'>
        <div className='col-md-12 ' style={{height:"150px"}} ></div>
        <div className='col-md-12'>
            <div className='row'>
                <div className='col-md-4'></div>
                <div className='col-md-4 text-light'>
                    <center>
                        <p><b>.03</b></p><br/>

                        <span className='font2 text-light bgreen'><b>My Clients</b></span><br/>

                        <hr className='border-light   ' style={{width:"10%"}}  />

                        <p>Bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus.</p>

                    </center>
                </div>
                <div className='col-md-4'></div>
            </div>
        </div>
        <div className='col-md-12 ' style={{height:"100px"}} ></div>

        <div className='container'>
            <div className='row'>
                <div className='col-md-3'>
                    <img src='img/clients1.jpg'/>

                    <h5 className='ml-2 mt-1 text-light'><b>Crystal May</b></h5>

                    <hr className='border-light ml-2 float-left ' style={{width:"20%"}}  /><br/>
                    <p className='text-light mt-3 ml-2'>Actress</p>
                </div>
                <div className='col-md-3'>
                <img src='img/clients2.jpg'/>

                <h5 className='ml-2 mt-1 text-light'><b>Terry Oliver</b></h5>

                    <hr className='border-light ml-2 float-left ' style={{width:"20%"}}  /><br/>
                    <p className='text-light mt-3 ml-2'>Athlete</p>
                </div>
                <div className='col-md-3'>
                <img src='img/clients3.jpg'/>

                <h5 className='ml-2 mt-1 text-light'><b>Janice Clark</b></h5>

                    <hr className='border-light ml-2 float-left ' style={{width:"20%"}}  /><br/>
                    <p className='text-light mt-3 ml-2'>Model</p>
                </div>
                <div className='col-md-3'>
                <img src='img/clients4.jpg'/>

                <h5 className='ml-2 mt-1 text-light'><b>Roy Freeman</b></h5>

                    <hr className='border-light ml-2 float-left ' style={{width:"20%"}}  /><br/>
                    <p className='text-light mt-3 ml-2'>Developer</p>
                </div>
            </div>
        </div>


        </div>
        </div>
        
    </>
  )
}
