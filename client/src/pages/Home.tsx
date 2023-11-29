import { useAuth } from "../auth/AuthUserProvider";
const HomePage = () => {
  const { user } = useAuth();
  console.log(user)
  return (
    <div>
      <h1>Welcome!</h1>
      <p>{user ? user.email : <p>You are not logged in</p>}</p>
    </div>
  );
};

export default HomePage;
