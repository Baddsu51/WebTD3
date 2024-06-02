import { useState, useEffect } from "react";
import { Hello } from "./Hello";

export const Demo = () => {
  const [name, setName] = useState("John Doe");
  const languages = ["Français", "Anglais", "Espagnol"];

  useEffect(() => {
    console.log("Ce texte est affiché au chargement du composant !");
  }, []);

  useEffect(() => {
    console.log(`La variable name contient ${name.length} caractères !`);
  }, [name]); // a chaque fois que name change

  return (
    <>
      <div>
        {name ? (
          <Hello name={name} />
        ) : (
          "Veuillez renseigner un nom d'utilisateur"
        )}
      </div>
      <div>
        <input
          type="text"
          defaultValue={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></input>
      </div>
      <div>
        <ol>
          {languages.map((language) => (
            <li key={language}>
              {language}{" "}
              <button
                onClick={() => {
                  console.log(`Vous avez sélectionné ${language}`);
                }}
              >
                select
              </button>{" "}
            </li>
          ))}
        </ol>
      </div>
    </>
  );
};
