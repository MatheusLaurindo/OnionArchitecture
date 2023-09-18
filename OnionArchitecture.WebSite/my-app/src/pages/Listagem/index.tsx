import axios from "axios";
import { useEffect, useState } from "react";
import { BookResponseListDto } from "../../dtos/bookDTO";
import TitleGrid from "../../components/TitleGrid";
import Button from "../../components/Button";
import Table from "../../components/Table";

function Listagem() {
  const url = "https://localhost:7025/api/Book/";
  const [data, setData] = useState<BookResponseListDto[]>([
    {
      id: 0,
      name: "",
      description: "",
      writer: "",
      insertDate: "",
    },
  ]);

  const getAll = async () => {
    await axios
      .get(url + "GetAllBooks")
      .then((resp) => {
        setData(resp.data);
      })
      .catch((error) => {
        alert(error);
      });
  };

  useEffect(() => {
    getAll();
  }, []);

  return (
    <div className="container mx-auto p-10 h-screen text-white bg-zinc-800">
      <div className="grid grid-rows-1">
        <div className="grid grid-cols-1">
          <TitleGrid
            title="BOOKS"
            button={<Button text="Add new Book" color="zinc-700" />}
          />
          <Table
            columns={["Name", "Description", "Writer", "Insert Date"]}
            list={data}
          />
        </div>
      </div>
    </div>
  );
}

export default Listagem;
