import {ConfigProvider} from "antd";
import "./App.css";
import {color} from "./utils/common/common";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/_root/home/Home";
import AuthLayout from "./pages/_auth/AuthLayout";
import RootLayout from "./pages/_root/RootLayout";
import Signin from "./pages/_auth/form/Signin";
import Signup from "./pages/_auth/form/Signup";
import Blog from "./pages/_root/blog/Blog";
import About from "./pages/_root/about/About";
import Coffee from "./pages/_root/coffee/Coffee";
import Contact from "./pages/_root/contact/Contact";
import BlogDetail from "./pages/_root/detail/Detail";

function App() {
  return (
    <ConfigProvider theme={{token: {colorPrimary: color.white}}}>
      <Router>
        <Routes>
          <Route element={<AuthLayout />}>
            <Route path="/sign-in" element={<Signin />} />
            <Route path="/sign-up" element={<Signup />} />
          </Route>
          <Route element={<RootLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Coffee />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blogs/detail/:id" element={<BlogDetail />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </Router>
    </ConfigProvider>
  );
}

export default App;
