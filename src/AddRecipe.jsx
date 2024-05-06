import React from 'react'

const AddRecipe = () => {
  return (
    <div>
      
<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

<div className="row g-3">


<div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        
                        <label htmlFor="" className="form-label"> <b>Recipe Title </b></label>
                        <input type="text" className="form-control" placeholder='Enter recipe title' />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label"> <b>The creator </b></label>
                    
                        <input type="text" className="form-control" placeholder='Enter the creator'/>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    
                    <label htmlFor="" className="form-label"> <b>Description </b></label>
                    <textarea name="" id="" cols="30" rows="10" className="form-control" placeholder='Enter a description'></textarea>
                     </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    
                    <label htmlFor="" className="form-label"><b> Upload Image </b></label>
                    <input type="file" name="" id="" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    
                    <label htmlFor="" className="form-label"> <b>Recipe Type </b></label>
                       <select name="" id="" className="form-select">
                       <option value="select recipe type">select recipe type</option>
                        <option value="1">vegetarian</option>
                        <option value="2">non-vegetarian</option>
                       </select>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    
                    <label htmlFor="" className="form-label" > <b>Ingredients </b></label>
                        <input type="text" className="form-control" placeholder='Enter ingredients' />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button className="btn btn-primary">Submit</button>
                    </div>




</div>




        </div>
    </div>
</div>







    </div>
  )
}

export default AddRecipe
