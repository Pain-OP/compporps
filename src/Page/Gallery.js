import React from 'react'


export default function Gallery(props) {
  return (
    <>
      <div id='GALLERY' className='col-md-12 p-0 tbanner'>
        <div className='aqct2'>
      <div className='col-md-12 ' style={{height:"150px"}} ></div>
        
        <div className='container '>
            <div className='col-md-12 text-light'>
            <p><b>.06</b></p><br/>
            <span className='font2 text-light bgreen'><b>Photo Gallery</b></span><br/>
            <p>Bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.<br/> Duis sed odio sit amet nibh vulputate cursus.</p>

            <br/>
            <br/>
            </div>

            </div>

            <div className="table-responsive">
  <table className="table ">
    <tbody>
      <tr>
        <td className='p-0 m-0'><img src="img/testi1.jpg" alt="Los Angeles" style={{height:"500px" , width:"320px"}} /></td>

        <td className='p-0 m-0'><img src="img/testi2.jpg" alt="Los Angeles" style={{height:"500px" , width:"320px"}} /></td>

        <td className='p-0 m-0'><img src="img/testi3.jpg" alt="Los Angeles" style={{height:"500px" , width:"320px"}} /></td>

        <td className='p-0 m-0'><img src="img/testi4.jpg" alt="Los Angeles" style={{height:"500px" , width:"320px"}} /></td>

        <td className='p-0 m-0'><img src="img/testi5.jpg" alt="Los Angeles" style={{height:"500px" , width:"320px"}} /></td>

        <td className='p-0 m-0'><img src="img/testi6.jpg" alt="Los Angeles" style={{height:"500px" , width:"320px"}} /></td>

        <td className='p-0 m-0'><img src="img/testi1.jpg" alt="Los Angeles" style={{height:"500px" , width:"320px"}} /></td>
        
      </tr>
    </tbody>
  </table>
</div>




            </div>
            </div>
    </>
  )
}
