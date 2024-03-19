import { Link, useSubmit } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const Detail = ({ post }) => {
  const { title, date, image, description } = post;
  const submit = useSubmit();

  const postDeleteHandler = () => {
    const confirm = window.confirm("Are you sure want to delete this post!");
    if (confirm) {
      submit(null, { method: "DELETE" });
    }
  };

  return (
    <div className='detail-card'>
      <header>
        <div className='left'>
          <h1>{title}</h1>
          <span>Post at . {date}</span>
        </div>
        <Link to={"/"}>
          <FaArrowLeft />
        </Link>
      </header>
      <div className='image'>
        <img src={image} alt={title} />
      </div>
      <p>{description}</p>
      <div className='btns'>
        <button onClick={postDeleteHandler}>Delete</button>
        <Link to={`post-edit`}>
          <button>Edit</button>
        </Link>
      </div>
    </div>
  );
};

export default Detail;
