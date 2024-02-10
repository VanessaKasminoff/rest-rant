const React = require("react");
const Default = require("../layouts/default.jsx");

const edit = ({places, id}) => {
  return (
    <Default>
      <main>
        <h1>Edit a Place</h1>
        <form action={`/places/${id}?_method=PUT`} method="POST">
          <div className="form-group">
            <label htmlFor="name">
              Place Name<span style={{ color: "red" }}>*</span>
            </label>
            <input
              className="form-control"
              type="text"
              id="name"
              name="name"
              required
              defaultValue={places.name}
            />
          </div>
          <div className="form-group">
            <label htmlFor="pic">Place Picture</label>
            <input
              className="form-control"
              type="text"
              id="pic"
              name="pic"
              defaultValue={places.pic}
            />
          </div>
          <div className="form-group">
            <label htmlFor="city">City</label>
            <input
              className="form-control"
              type="text"
              id="city"
              name="city"
              defaultValue={places.city}
            />
          </div>
          <div className="form-group">
            <label htmlFor="country">Country</label>
            <input
              className="form-control"
              type="text"
              id="country"
              name="country"
              defaultValue={places.country}
            />
          </div>
          <div className="form-group">
            <label htmlFor="cuisines">
              Cuisines<span style={{ color: "red" }}>*</span>
            </label>
            <input
              className="form-control"
              type="text"
              id="cuisines"
              name="cuisines"
              required
              defaultValue={places.cuisines}
            />
          </div>
          <p className="p-form">
            <i>*Required</i>
          </p>
          <input className="btn" type="submit" value="Save" />
        </form>
      </main>
    </Default>
  );
};

module.exports = edit;
