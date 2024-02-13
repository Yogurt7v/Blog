import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components/header/header.jsx";
import { Footer } from "./components/footer/footer.jsx";
import { Authorization } from "./pages/authorization/authorization";
import { H2 } from "./components/h2/h2";

const Content = styled.div`
  text-align: center;
  padding: 120px 0;
`;


const AppColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 1000px;
  min-height: 100%;
  margin: 0 auto;
  background-color: white;
`;



function Blog() {
  return (
    <AppColumn>
      <Header />

      <Content>
        <Routes>
          <Route path="/" element={<H2>Main</H2>} />
          <Route path="/login" element={<Authorization />} />
          <Route path="/register" element={<div>Register</div>} />
          <Route path="/users" element={<div>Users</div>} />
          <Route path="/post/post:id" element={<div>Single Post</div>} />
          <Route path="*" element={<div>Error Page</div>} />
          <Route path="/post/" element={<div>New Post</div>} />
        </Routes>
      </Content>

      <Footer />
    </AppColumn>
  );
}

export default Blog;
