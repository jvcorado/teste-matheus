import { useParams } from "react-router-dom";
import { api } from "../../service/api";
import { useEffect, useState } from "react";
import ModalPerson from "../../compenents/Modal";
import Error from "../error";
import { Search } from "../../compenents/Search";

interface PersonProps {
  _id: number;
  name: string;
  imageUrl: string;
  onClose: () => void;
  films: string[];
  videoGames: string[];
  tvShows: string[];
}

export default function Person() {
  const { name } = useParams();
  const [person, setPerson] = useState<PersonProps[]>([]);
  const [selectedPerson, setSelectedPerson] = useState<PersonProps | null>(
    null
  );

  useEffect(() => {
    async function loadPerson() {
      try {
        const response = await api.get(`/character?name=${name}`);
        setPerson(response.data.data);
      } catch (error) {
        console.log(error);
      }
    }

    loadPerson();
  }, [name]);

  const handlePersonClick = (person: PersonProps) => {
    setSelectedPerson(person);
  };

  return (
    <>
      {person.length === 0 && (
        <div>
          <Error />
        </div>
      )}

      {person.length >= 1 && (
        <div className="container m-auto flex items-center justify-center flex-col h-screen">
          <Search />
          <div className="flex gap-3 items-center ">
            {person.map((item) => (
              <div
                key={item._id}
                onClick={() => handlePersonClick(item)}
                className="bg-white rounded-lg shadow-2xl p-3 flex gap-3 items-center justify-center flex-col w-[200px]"
              >
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="rounded-full h-[100px] w-[100px] "
                />
                <p>{item.name}</p>
              </div>
            ))}
          </div>

          {selectedPerson && (
            <ModalPerson
              key={selectedPerson._id}
              imageUrl={selectedPerson.imageUrl}
              name={selectedPerson.name}
              film={selectedPerson.films[0]}
              videoGames={selectedPerson.videoGames[0]}
              tvShows={selectedPerson.tvShows[0]}
              onClose={() => setSelectedPerson(null)}
              _id={selectedPerson._id}
            />
          )}
        </div>
      )}
    </>
  );
}
