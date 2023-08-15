import React from 'react'

const FormAddProduct = () => {
  return (
    <div>
        <h1 className='title'>Products</h1>
            <h1 className='subtitle'>Add new product  ...</h1>
            <div className='card is-shadowless'>
                <div className='card-content'>
                    <div className='content'>
                    <form>
                        <div className='field'>
                            <label className='label'>Product</label>
                            <div className='control'>
                                <input type='text' className='input' placeholder='Product'/>
                            </div>
                        </div>
                        <div className='field'>
                            <label className='label'>Price</label>
                            <div className='control'>
                                <input type='text' className='input' placeholder='Price'/>
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
  )
}

export default FormAddProduct