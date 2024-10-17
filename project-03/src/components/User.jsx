import { useLocation, useParams } from "react-router-dom";

export default function User() {
  const { userId } = useParams();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  console.log(location);
  console.log(queryParams);

  return (
    <>
      <p>`유저 아이디 : {userId}`</p>
    </>
  );
}
