
import { useState } from "react";

export default function Header() {
    const [editButtonContent, setEditButtonContent] = useState("Modifier le titre");
    const [disabled, setDisabled] = useState(true);
    //const [docTitle, setDocTitle] = useState(".txt")

    const handleClick = () => {
        if (disabled) {
            setEditButtonContent("Confirmer");
          } else {
            setEditButtonContent("Modifier le titre");

          }
        setDisabled(!disabled);
    };

    return (
    <header>
        <div className="titre-header">
            <div className="logo">
                    <a href="/"><img src="src/assets/logo.png" alt="Logo"/></a>
              </div>
            <strong>TODO LELOU</strong>
        </div>
          <div className="doc">
                <input style={{ backgroundColor: disabled ? "#00000000" : "#e0e0e0" , outline: disabled ? "none" : "2px auto -webkit-focus-ring-color"}} disabled={disabled} type="text" placeholder="Entrez un titre" defaultValue="Titre du document de TODOs.txt" id="doc-title"/>
                <button style={{ backgroundColor: disabled ? "var(--color-rose-taupe)" : "var(--color-dark-moss)"}} onClick={handleClick}>{ disabled ? "Modifier le titre" : "Confirmer"}</button>
          </div>
          <button className="export">Exporter le document</button>
    </header>
    )
  }