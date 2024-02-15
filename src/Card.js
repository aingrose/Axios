import React from 'react'

function card({user, deleteuser,edit}) {
  return (  
    <div className='col ' >
      
    
    <div class="card" style={{width: "26rem",marginBottom:"20px",height:"14rem",textAlign:"center",backgroundColor:"#9F70FD"}} >
    <div class="card-body">
      <h5 class="card-title " style={{margin:"0px 50px",fontSize:"22px"}}>{user.name}</h5>
      <div className='details mt-3 'style={{textAlign:"start",marginLeft:"20px"}}>
      <h6 class="card-subtitle mb-2 " >Email :{user.email}</h6>
      <h6 class="card-subtitle mb-2" >phone :{user.phone}</h6>
      <h6 class="card-subtitle mb-2" >City :{user.address.city}</h6>
      <h6 class="card-subtitle mb-2" >Wepsite :{user.website}</h6>
      <div className='row' >
      <div className='col mt-2' >

        <button className='btn btn-success 'style={{marginRight:"10px"}} onClick={()=>edit(user)} >Edit</button>
        <button className='btn btn-danger 'onClick={()=>deleteuser(user.id)}>Delete</button>
      </div>
      </div>
     </div>
    </div>
  </div>
  </div>
  )
}

export default card