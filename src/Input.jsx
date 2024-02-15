import React from 'react';

function Input({ setname, setemail, setcity, setphone, setwebsite, name, email, city, phone, website, submit ,editmode, handleUpdateUser,editingUserId}) {

  const handleSubmit = (e) => {
   
    e.preventDefault();
    if(! editmode){
      submit(); 
    }else{
      handleUpdateUser();
    }
   
    setname(""); setemail("") ; setcity("")  ;setwebsite("");setphone("")

  };

  return (
    <form style={{ textAlign: 'center', marginBottom: '20px', padding: '10px 20px' }} onSubmit={handleSubmit}>
      <input
        className='form'
        style={{ padding: '5px 20px', marginRight: '20px', borderRadius: '3px' }}
        onChange={(e) => setname(e.target.value)}
        value={name}
        placeholder='Enter Name'
        required
      />
      <input
        className='form'
        style={{ padding: '5px 20px', marginRight: '20px', borderRadius: '3px' }}
        onChange={(e) => setphone(e.target.value)}
        value={phone}
        placeholder='Enter Phone' required
      />
      <input
        className='form'
        style={{ padding: '5px 20px', marginRight: '20px', borderRadius: '3px' }}
        onChange={(e) => setemail(e.target.value)}
        value={email}
        placeholder='Enter Email' required
      />
      <input
        className='form'
        style={{ padding: '5px 20px', marginRight: '20px', borderRadius: '3px' }}
        onChange={(e) => setcity(e.target.value)}
        value={city}
        placeholder='Enter City' required
      />
      <input
        className='form'
        style={{ padding: '5px 20px', marginRight: '20px', borderRadius: '3px' }}
        onChange={(e) => setwebsite(e.target.value)}
        value={website}
        placeholder='Enter Website' required
      />
     {!editmode ? <button type="submit" style={{ padding: '5px 20px', marginRight: '20px', borderRadius: '3px', marginTop: '10px' }} className='btn btn-success'>
        Submit
      </button>:<button  onClick={()=>handleUpdateUser(editingUserId)}   type="submit" style={{ padding: '5px 20px', marginRight: '20px', borderRadius: '3px', marginTop: '10px' }} className='btn btn-success'>
        Update
      </button>} 
    </form>
  );
}

export default Input;
