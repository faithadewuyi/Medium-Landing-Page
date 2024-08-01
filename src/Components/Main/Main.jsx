import "../Main/Main.css";

const Main = () => {
  return (
    <div className="main-container">
      <div className="main-content">
         <h1 className="headline">
          <span className="headline-part">Human</span>
          <span className="headline-part-group">
          <span className="headline-part">Stories</span>{" "}
          <span className="headline-part"> &amp; ideas</span>
  </span>
        </h1>
        <p className="tag-line">
          A place to read, write and deepen your understanding
        </p>
        <button className="start-reading">Start reading</button>
      </div>
      <div className="image">
        <img src="https://miro.medium.com/v2/format:webp/4*SdjkdS98aKH76I8eD0_qjw.png" alt="Decorative-flower" />
      </div>
      
    </div>
  );
};

export default Main;
