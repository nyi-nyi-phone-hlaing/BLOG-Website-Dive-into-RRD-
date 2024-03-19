import { Link, Form, useActionData, redirect } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";

const PostForm = (props) => {
  const data = useActionData();
  const oldPostData = props.oldPostData;

  const postType = props.formType.type_of_post;
  let formText = {};
  switch (postType) {
    case "create":
      formText = {
        post_title: "Create",
        post_btn_text: "Create",
        post_method: "post",
      };
      break;
    case "edit":
      formText = {
        post_title: "Edit",
        post_btn_text: "Edit",
        post_method: "patch",
      };
      break;
    default:
      break;
  }

  return (
    <div className='post-form'>
      <header className='flex-justify-between'>
        <h1>{formText.post_title} Your Post Here</h1>
        <Link to={"/"}>
          <FaArrowLeft />
        </Link>
      </header>
      {data && data.errors && (
        <ul className='err-message'>
          {Object.values(data.errors).map((err) => (
            <li key={err}>{err}</li>
          ))}
        </ul>
      )}
      <div className='form-field'>
        <Form method={`${formText.post_method}`}>
          <div className='row'>
            <label htmlFor='title'>Title</label>
            <input
              type='text'
              name='title'
              id='title'
              defaultValue={oldPostData ? oldPostData.title : ""}
            />
          </div>
          <div className='row'>
            <label htmlFor='imgUrl'>Image URL</label>
            <input
              type='url'
              name='image'
              id='imgUrl'
              defaultValue={oldPostData ? oldPostData.image : ""}
            />
          </div>
          <div className='row'>
            <label htmlFor='date'>Date</label>
            <input
              type='date'
              name='date'
              id='date'
              defaultValue={oldPostData ? oldPostData.date : ""}
            />
          </div>
          <div className='row'>
            <label htmlFor='description'>Description</label>
            <textarea
              name='description'
              id='description'
              cols='30'
              rows='5'
              defaultValue={
                oldPostData ? oldPostData.description : ""
              }></textarea>
          </div>

          <button className='submit'>{formText.post_btn_text} Post</button>
        </Form>
      </div>
    </div>
  );
};

export default PostForm;

export const action = async ({ request, params }) => {
  const data = await request.formData();
  const postData = {
    id: uuidv4(),
    date: data.get("date"),
    title: data.get("title"),
    image: data.get("image"),
    description: data.get("description"),
  };

  let url = "http://localhost:8080/posts";

  if (request.method === "PATCH") {
    url = `http://localhost:8080/posts/${params.id}`;
  }

  const response = await fetch(url, {
    method: request.method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
  });

  if (response.status === 422) {
    return response;
  }

  if (!response.ok) {
    //code
  }
  return redirect("/");
};
