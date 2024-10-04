import React from 'react'
import {littlegirl} from '../image';
export  function Urldata() {
  const styles={
    backgroundColor:"#f2f2f2",
    width:"100vw",
  }
  return (
    <div>
      <div className='text-center' style={{styles}}>
      <img className="img-fluid " src={littlegirl} alt="littlegirl" />

      </div>
      <table class="table table-striped">
      <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Original url</th>
      <th scope="col">Shortened url</th>
      <th scope="col">Date of Creation</th>
      <th scope="col">Number of Clicks</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
    </div>
  )
}
