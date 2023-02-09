import { useQuery, gql } from "@apollo/client";
import "./App.css";
import Messages from "./Messages";
function App({limit}) {
  console.log("limit is ",limit);
  const khorosMessages = gql`
    query listmessage($limit: Int!) {
      messages(limit: $limit) {
        items {
          type
          id
          subject
          body
        }
      }
    }
  `;
  const { loading, error, data } = useQuery(khorosMessages, {
    variables: { "limit": parseInt(limit) },
  });

  if (loading) {
    console.log(loading)
    return <div>Loading....</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }
  // console.log("data", data);
  return (
    <div className="App">
      {data?.messages?.items.map((eachmsg, index) => {
        // console.log(eachmsg)
        return <Messages item={eachmsg} key={index} />;
      })}
    </div>
  );
}
export default App;
