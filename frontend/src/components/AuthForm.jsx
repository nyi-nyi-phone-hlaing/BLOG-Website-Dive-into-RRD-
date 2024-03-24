import {
  Form,
  Link,
  useSearchParams,
  useNavigation,
  useActionData,
} from "react-router-dom";

const AuthForm = () => {
  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get("mode") === "login";
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const data = useActionData();

  return (
    <div className='post-form'>
      <h1>{isLogin ? "Login to your account." : "Create a new account."}</h1>
      {data && data.errors && (
        <ul className='err-message'>
          {Object.values(data.errors).map((err) => (
            <li key={err}>{err}</li>
          ))}
          {data.message && <li>{data.message}</li>}
        </ul>
      )}

      <div className='form-field'>
        <Form method='post'>
          <div className='row'>
            <label htmlFor='email'>Email</label>
            <input type='email' name='email' id='email' />
          </div>
          <div className='row'>
            <label htmlFor='password'>Password</label>
            <input type='password' name='password' id='password' />
          </div>
          <button disabled={isSubmitting}>
            {isSubmitting ? "Pending..." : isLogin ? "Login" : "Sign Up"}
          </button>

          {isLogin ? (
            <p>
              Don't have an account?{" "}
              <Link to={"/auth?mode=signup"}>Create account</Link>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <Link to={"/auth?mode=login"}>Login now</Link>
            </p>
          )}
        </Form>
      </div>
    </div>
  );
};

export default AuthForm;
