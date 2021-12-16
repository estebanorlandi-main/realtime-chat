import { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

import { actionCreators } from "../../Redux";

function Login() {
  const dispatch = useDispatch();
  const { login } = bindActionCreators(actionCreators, dispatch);

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = ({
    target: { name, value },
  }: ChangeEvent<HTMLInputElement>) => {
    setUser((old) => ({ ...old, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    login(user);
  };

  return (
    <main>
      <h3>Login</h3>
      <form onSubmit={handleSubmit}>
        <input
          name="username"
          value={user.username}
          onChange={handleChange}
          type="text"
          placeholder="Username"
        />

        <input
          name="password"
          value={user.password}
          onChange={handleChange}
          type="text"
          placeholder="Password"
        />
        <button type="submit">Login</button>
      </form>
    </main>
  );
}

export default Login;
