import { useRef, useContext, useState } from "react";
import "./create.css";
import TopHeader from "../../components/topHeader/TopHeader";
import Footer from "../../components/footer/Footer";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

export default function Create() {
  const { user } = useContext(AuthContext);
  const title = useRef();
  const price = useRef();
  const city = useRef();
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      owner: user._id,
      title: title.current.value,
      price: price.current.value,
      city: city.current.value,
    };
    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file);
      newPost.img = fileName;
      try {
        await axios.post("/upload", data);
        window.location.reload();
      } catch (err) {}
    }
    try {
      await axios.post("/products", newPost);
    } catch (err) {}
    Loading()
  };

  const Loading = () => {
    setTimeout(()=> {
      window.location.replace("http://localhost:3000/");
    },1000)
  }

  return (
    <div className="create">
      <div className="backgroundCus">
        <TopHeader />
      </div>
      <h1>New Post</h1>
      <div className="main-block">
        <div className="left-part">
          {file && (
            <div className="shareImgContainer">
              <img
                className="imgCreate"
                src={URL.createObjectURL(file)}
                alt=""
              />
              <i
                className="fa-solid fa-xmark shareCancelImg"
                onClick={() => setFile(null)}
              ></i>
            </div>
          )}
        </div>
        <form action="/" onSubmit={handleSubmit}>
          <div className="info">
            <label htmlFor="file" className="shareOption">
              <img
                className="imgCreateInput"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Picture_icon_BLACK.svg/1200px-Picture_icon_BLACK.svg.png"
                alt=""
              />
              <input
                style={{ display: "none" }}
                type="file"
                id="file"
                accept=".png,.jpeg,.jpg"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>
            <input className="fname" placeholder="Title" ref={title} />
            <input placeholder="Price" ref={price} />
            <input placeholder="City" ref={city} />
          </div>
          <button className="btnCreate" type="submit">
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}
