import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import TitleGrid from "../../components/TitleGrid";
import { ChangeEvent, useState } from "react";
import { BookRequestDto } from "../../dtos/bookDTO";
import axios from "axios";

function Criar() {
  const url = "https://localhost:7025/api/Book/";
  const navigate = useNavigate();

  const [book, setBook] = useState<BookRequestDto>({
    bookName: "",
    bookDescription: "",
    bookWriter: "",
  });

  const handleOnChange = (event: ChangeEvent<any>) => {
    setBook({ ...book, [event.target.name]: event.target.value });
  };

  const postBook = async (e:any) => {
    e.preventDefault();
    if (
      book.bookName !== "" &&
      book.bookDescription !== "" &&
      book.bookWriter !== ""
    ) {
      await axios
        .post(url + "Create", book)
        .then((resp) => {
          if (resp.status === 200) {
            alert("Book added with success!");
            navigate("/");
          }
        })
        .catch((error) => {
          alert(error);
        });
    } else {
      alert("All fields must be filled");
    }
  };

  return (
    <div className="bg-zinc-900 p-10 rounded shadow-2xl">
      <TitleGrid title="ADD A NEW BOOK TO THE LIST" />
      <form className="mt-8" onSubmit={postBook}>
        <div className="grid grid-cols-2 gap-4">
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Name
            </label>
            <input
              name="bookName"
              onChange={handleOnChange}
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              autoComplete="off"
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Writer
            </label>
            <input
              name="bookDescription"
              onChange={handleOnChange}
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              autoComplete="off"
            />
          </div>
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Description
          </label>
          <textarea
            name="bookWriter"
            onChange={handleOnChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            autoComplete="off"
          />
        </div>
        <Button type="submit" text="Submit" color={"zinc-700"} />
      </form>
    </div>
  );
}

export default Criar;
