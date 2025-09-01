import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const OtherUsersTest = () => {
  const { userId } = useParams(); 
  const users = useSelector((state) => state.otherUsers.users);
  const user = users.find((u) => u._id === userId);

  return (
    <>
    <img src={user.image} alt={`${user.name} ${user.surname}`} width="150" />
      <p>{user.name} {user.surname}</p>
      <p>{user.username}</p>
      <p>{user.area}</p>
      <p>{user.email}</p>
      <p>{user.title}</p> 
    </>
  );
};

export default OtherUsersTest;
