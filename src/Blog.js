import styled from "styled-components";
import { Route, Routes } from "react-router-dom";

const Content = styled.div`
  text-align: center;
  padding: 120px 0;
`;

const H2 = styled.h2`
  font-size: 1.5em;
  text-align: center;`;

const Header = () => {
  return <div>Header</div>;
};

const Footer = () => {
  return <div>Footer</div>;
};

function Blog() {
  return (
    <>
      <Header />

      <Content>
        Test
        <i className="fa-thin fa-w"></i>
        <Routes>
          <Route path="/" element = {<H2>Main</H2>}/>
          <Route path="/login" element = {<div>Login</div>}/>
          <Route path="/register" element = {<div>Register</div>}/>
          <Route path="/users" element = {<div>Users</div>}/>
          <Route path="/post/post:id" element = {<div>Single Post</div>}/>
          <Route path="*" element = {<div>Error Page</div>}/>
          <Route path="/post/" element = {<div>New Post</div>}/>
        </Routes>
      </Content>

      <Footer />
    </>
  );
}

export default Blog;
