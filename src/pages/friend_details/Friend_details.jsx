import { useLoaderData, useParams } from "react-router";
import DetailsInfo from "../../components/detailsInfo/DetailsInfo";

const Friend_details = () => {
  const { id } = useParams();
  const data = useLoaderData();

  const expectedFriend = data.find((friend) => friend.id == id);
  console.log(expectedFriend);

  return (
    <div>
      <DetailsInfo expectedFriend={expectedFriend}></DetailsInfo>
    </div>
  );
};

export default Friend_details;
