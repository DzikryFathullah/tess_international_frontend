import React from 'react'

const FormAddUser = () => {
    return (
        <div>
            <h1 className='title'>Users</h1>
            <h1 className='subtitle'>Add new user  ...</h1>
            <div className='card is-shadowless'>
                <div className='card-content'>
                    <div className='content'>
                    <form>
                        <div className='field'>
                            <label className='label'>Name</label>
                            <div className='control'>
                                <input type='text' className='input' placeholder='Name'/>
                            </div>
                        </div>
                        <div className='field'>
                            <label className='label'>Email</label>
                            <div className='control'>
                                <input type='text' className='input' placeholder='Email'/>
                            </div>
                        </div>
                        <div className='field mt-5'>
                            <label className='label'>Password</label>
                            <div className='control'>
                                <input type='password' className='input' placeholder='*******'/>
                            </div>
                        </div>
                        <div className='field mt-5'>
                            <label className='label'>Confirm Password</label>
                            <div className='control'>
                                <input type='password' className='input' placeholder='*******'/>
                            </div>
                        </div>
                        <div className='field mt-5'>
                            <label className='label'>Role</label>
                            <div className='control'>
                                <div className='select is-fullwidth'>
                                    <select>
                                        <option value="admin">Admin</option>
                                        <option value="user">User</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className='field'>
                            <div className='control'>
                                <button className='button is-success'>Save</button>
                            </div>
                        </div>
                    </form>
                    </div>
                </div>
            </div>  
        </div>
      );
}

export default FormAddUser