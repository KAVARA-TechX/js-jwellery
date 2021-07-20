import React from "react";

const ProductCreateForm = ({
  handleSubmit,
  handleChange,
  values,
}) => {
  // destructure
  const {
    title,
    description,
    price,
    category,
    subs,
    quantity,
  } = values;

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Title</label>
        <input
          type="text"
          name="title"
          className="form-control"
          value={title}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Description</label>
        <input
          type="text"
          name="description"
          className="form-control"
          value={description}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Price</label>
        <input
          type="Number"
          name="price"
          className="form-control"
          value={price}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Quantity</label>
        <input
          type="Number"
          name="quantity"
          className="form-control"
          value={quantity}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Category</label>
        <input
          type="text"
          name="category"
          className="form-control"
          value={category}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Sub Category</label>
        <input
          type="text"
          name="subs"
          className="form-control"
          value={subs}
          onChange={handleChange}
        />
      </div>

      
      <br/>
      <button className="btn btn-outline-info mb-5">Save</button>
    </form>
  );
};

export default ProductCreateForm;
