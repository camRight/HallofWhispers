import React, { useEffect, useRef } from "react";
import Container from "../Container/Container";
import Row from "../Row/Row";
import "./PostList.css"
import moment from "moment"


export function PostList({ children }) {
  return <ul className="list-group">{children}</ul>;
}


export function PostListItem({ message, date, myAccount, accountName, accountId}) {

  const messagesEndRef = useRef(null);

  const scrollToTop = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth", block: "center"});
  };

  useEffect(() => {
    scrollToTop();
  });


  return (
    <li className={`list-group-item ${(myAccount === "true") ? "my-account" : "not-my-account"}`}>
      <Container>
        <Row>
          <p>{message}</p>
          <div ref={messagesEndRef}>
            <div style={{float: "right"}}>
              <p className="timestamp">{accountName} Posted: {moment.utc(date).local().format("LLL")}</p>

            </div>
          </div>
        </Row>
      </Container>
    </li>
  );
}
