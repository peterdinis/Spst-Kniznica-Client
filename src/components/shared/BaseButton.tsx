import { useFn } from "../../hooks/useFn";
import "./Shared.css";

interface IProps {
  type?: any;
  name: string;
  loading?: any;
}

function BaseButton(props: IProps) {
  const fn = useFn();
  return (
    <>
      <button className="baseBtn" onClick={fn}>{props.name}</button>
    </>
  );
}

export default BaseButton;