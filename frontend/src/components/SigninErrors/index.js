const SigninErrors = ({ errors }) => {
  return (
    <>
      <ul className="signin-signup-errors">
        <i
          className="fa-solid fa-triangle-exclamation fa-2xl"
          id="signin-error-icon"
        />
        <h4 className="signin-signup-errors-title">There was a problem</h4>
        {errors.map((error, idx) => (
          <li className="signin-signup-error-li" key={idx}>
            {error}
          </li>
        ))}
      </ul>
    </>
  );
};

export default SigninErrors;
