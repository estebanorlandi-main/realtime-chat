import { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router";
import { bindActionCreators } from "redux";

import { actionCreators } from "../../Redux";
import { State } from "../../Redux/reducers";
import { IUser } from "../../Utils/interfaces";

import { Input } from "../../Components/Input/Input";
import { validatePassword, validateUsername } from "../../Utils/validate";

import styles from "./Login.module.css";

function Login() {
  const dispatch = useDispatch();
  const { login } = bindActionCreators(actionCreators, dispatch);

  const session: IUser = useSelector((state: State) => state.session);

  const [user, setUser] = useState({
    username: "",
    password: "",
    avatar: "",
  });

  const handleChange = ({
    target: { name, value },
  }: ChangeEvent<HTMLInputElement>) => {
    setUser((old) => ({ ...old, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validatePassword(user.password) && validateUsername(user.username))
      login(user);
  };

  return session.username ? (
    <Navigate to="/home" />
  ) : (
    <main>
      <form className={styles.container} onSubmit={handleSubmit}>
        <h2>Login</h2>
        <Input
          name="username"
          value={user.username}
          onChange={handleChange}
          type="text"
          placeholder="Username"
        />

        <Input
          name="avatar"
          value={user.avatar}
          onChange={handleChange}
          type="text"
          placeholder="Avatar"
        />

        <Input
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
