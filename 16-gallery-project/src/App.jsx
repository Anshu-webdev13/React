import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {
  const [userData, setUserData] = useState([]);
  const [index, setIdex] = useState(1);
  const getData = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=10`,
    );
    setUserData(response.data);
  };
  useEffect(
    function () {
      getData();
    },
    [index],
  );

  let printUserData = (
    <h2 className="font-bold text-gray-200 text-xs absolute top-1/2 left-1/2 -translate-x-1/2 ">
      Loading...
    </h2>
  );
  if (userData.length > 0) {
    printUserData = userData.map(function (elem, idx) {
      return (
        <div key={idx}>
          <a href={elem.url} target={"_blank"}>
            <div className="h-40 w-44 rounded-xl overflow-hidden">
              <img
                className="h-full w-full  object-cover"
                src={elem.download_url}
              />
            </div>
            <h2 className="font-bold text-lg">{elem.author}</h2>
          </a>
        </div>
      );
    });
  }

  return (
    <div className="bg-black h-screen overflow-auto text-white">
      <div className="flex flex-wrap gap-8 px-10 py-5">{printUserData}</div>

      <div className="flex justify-center gap-4">
        <button
          onClick={() => {
            if (index > 1) {
              setIdex(index - 1);
              setUserData([]);
            }
          }}
          className="bg-amber-400 text-black px-5 py-2 rounded cursor-pointer active:scale-95"
        >
          Prev
        </button>
        <h2 className="font-bold text-center">{index}</h2>

        <button
          onClick={() => {
            setIdex(index + 1);
            setUserData([]);
          }}
          className="bg-amber-400 text-black px-5 py-2 rounded cursor-pointer active:scale-95"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
