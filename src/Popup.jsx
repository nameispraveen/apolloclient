import React from "react";
import { useQuery, gql } from "@apollo/client";
import css from "./MsgItem.module.css";
import { useState } from "react";
export default function Popup({ id }) {
  const [close, setclose] = useState("true");
  const SingleMessage = gql`
    query listmessage($id: String!) {
      message(id: $id) {
        subject
        post_time
        author {
          login
        }
        body
      }
    }
  `;
  const { loading, error, data } = useQuery(SingleMessage, {
    variables: { id: id },
  });

  if (loading) {
    console.log(loading);
    return <div>Loading....</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }
  console.log(data);
  return (
    close && (
    <div className={css.main_popup}>
          <div className={css.popup}>
        <button onClick={() => setclose(null)} className={css.close}>
          X
        </button>
        <div>Id :{id}</div>
        <div>Subject :{data.message.subject}</div>
        <div className={css.msg_body}>
          Body :<div dangerouslySetInnerHTML={{ __html: data.message.body }} />
        </div>
        <div>Post_time :{data.message.post_time}</div>
        <div>Author :{data.message.author.login}</div>
      </div>
    </div>
    )
  );
}
