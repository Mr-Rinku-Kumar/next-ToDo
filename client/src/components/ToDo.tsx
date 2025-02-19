import { baseURL } from "@/utils/constant";
import axios from "axios";
import { MdDelete } from "react-icons/md";

interface PropsType {
  id: number;
  text: string;
  setUpdateUI: React.Dispatch<React.SetStateAction<boolean>>;
}

const ToDo = ({ id, text, setUpdateUI }: PropsType) => {
  const deleteToDos = () => {
    axios
      .delete(`${baseURL}/delete/${id}`)
      .then((res) => {
        console.log(res.data);
        setUpdateUI((prevState) => !prevState);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="bg-accentLight p-4 text-gray-400 relative group">
      {text}
      <div
        className="hidden absolute top-1/2 -translate-y-1/2 right-0 mx-4 group-hover:block cursor-pointer"
        onClick={deleteToDos}
      >
        <MdDelete />
      </div>
    </div>
  );
};

export default ToDo;
