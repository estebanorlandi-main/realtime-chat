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
import { Link } from "react-router-dom";

function Register() {
  const dispatch = useDispatch();
  const { signup } = bindActionCreators(actionCreators, dispatch);

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

    // errors
    const { eUser, ePassword }: { eUser: boolean; ePassword: boolean } = {
      eUser: validateUsername(user.username),
      ePassword: validatePassword(user.password),
    };

    if (eUser && ePassword) signup(user);
    else console.log("Error");
  };

  return session.username ? (
    <Navigate to="/home" />
  ) : (
    <main>
      <form className={styles.container} onSubmit={handleSubmit}>
        <h2>Register</h2>
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

        <button className={styles.submit} type="submit">
          Register
        </button>
        <Link className={styles.register} to="/login">
          Login
        </Link>
      </form>
    </main>
  );
}

export default Register;
