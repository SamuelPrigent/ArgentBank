import { useState } from "react";
// import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import auth_service from "../services/authService.jsx";
import PropTypes from "prop-types";
// TEST
import { useNavigate } from "react-router-dom";

/**
 * Creates header component
 * @returns { HTMLElement }
 */
function UserHeader() {
  // token
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Pouvait être déplacé en tant que propos dans user mais ct pas le Pb ???
  const firstName = useSelector((state) => state.user.firstName);
  const lastName = useSelector((state) => state.user.lastName);
  const [edit, showEdit] = useState(false);
  const [newFirstName, setFirstName] = useState("");
  const [newLastName, setLastName] = useState("");
  // const token = useSelector((state) => state.login.token); // if i want to use token of redux

  // update profile action
  const submit = (e) => {
    const token = sessionStorage.getItem("token")
      ? null
      : localStorage.getItem("token")
      ? null
      : null;

    e.preventDefault();
    dispatch(
      auth_service.updateProfile(newFirstName, newLastName, token, navigate)
    );
    showEdit(false);
  };

  return (
    <div className="header">
      <h1>
        Welcome back
        <br />
        {edit === false ? firstName + " " + lastName : ""}
      </h1>
      {/* Button for userUpdate */}
      {edit === false ? (
        <button
          className="edit-button"
          onClick={() => {
            showEdit(true);
          }}
        >
          Edit Name
        </button>
      ) : (
        <form className="edit-inputs-buttons" onSubmit={submit}>
          <div className="edit-inputs">
            <input
              type="text"
              className="edit-input"
              onChange={(e) => {
                setFirstName(e.target.value);
                // console.log(firstName);
              }}
              placeholder={firstName}
              required
            />
            <input
              type="text"
              className="edit-input"
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              placeholder={lastName}
              required
            />
          </div>
          <div className="edit-buttons">
            <button className="edit-button-option" type="submit">
              Save
            </button>
            <button
              className="edit-button-option"
              onClick={(e) => {
                e.preventDefault();
                showEdit(false);
              }}
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default UserHeader;

UserHeader.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
};
