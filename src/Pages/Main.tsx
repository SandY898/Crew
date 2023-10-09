import classes from "../Style/Pages/Main.module.scss";
import { useNavigate } from "react-router-dom";
import UIButton from "../Componets/UIButton";
import { useAppSelector } from "../Hooks/Redux";
const Main = () => {
  const navigate = useNavigate();
  const click = () => {};

  const { login, password } = useAppSelector((state) => state.userReducer);

  return (
    <div className={classes[""]}>
      Home - {login} {password}
      <UIButton onClick={() => navigate("/reg")} type="string">
        Authorization
      </UIButton>
    </div>
  );
};
export default Main;
