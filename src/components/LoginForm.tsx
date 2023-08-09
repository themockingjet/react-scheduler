function Login() {
  return (
    <div>
      <h1>Login</h1>
      <label>
        Username:
        <input name="username" />
      </label>
      <label>
        Password:
        <input name="password" type="password" />
      </label>
      <button>Login</button>
    </div>
  );
}

export default Login;
