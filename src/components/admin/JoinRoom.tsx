import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function JoinRoom() {
  const navigate = useNavigate();

  const joinNewRoom = () => {
    navigate("/admin/talk")
  };
  return (
    <div>
        <Button onClick={joinNewRoom}>Vstúpiť do chatu</Button>
    </div>
  );
}

export default JoinRoom;
