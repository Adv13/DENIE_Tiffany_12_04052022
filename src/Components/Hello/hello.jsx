import PropTypes from "prop-types";

/**
* This function contains the Hello part that display the Welcome sentence with the first name of the profile concerned.
*/
function Hello({ username }) {
  return (
    <div className="user">
      <h1>
        Bonjour
        <span className="username"> {username} </span>
      </h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  );
}
export default Hello;

Hello.propTypes = {
  username: PropTypes.string.isRequired,
};
