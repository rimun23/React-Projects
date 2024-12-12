import React from "react";
import CardList from "./components/Card_List";

const characters = [
  {
    id: 1,
    img1: "./img/chengwei-pan-1.jpg",
    img2: "./img/640px-Ekko_Render.webp",
    description:
      "Экко - мальчик, который разрушил время. Герой лиги легенд и сериала Аркейн",
  },
  {
    id: 2,
    img1: "./img/voskresene-honkay-star-reyl-reliz-optimized.webp",
    img2: "./img/C4yn6fVpVW3zmeG5nQxqSsRQWt66ZIM9WXOqSrvlTpmkJD0Hby-gPif-86ZmF3s1qC4bwBRXwEQOZ6TQpFySFqNk.jpg",
    description:
      "Воскресенье — играбельный 5-звёздочный персонаж в игре Honkai: Star Rail.",
  },
  {
    id: 3,
    img1: "./img/20230419230133e408827c33.jpg",
    img2: "./img/spw20_introd.png",
    description:
      "Супермен - персонаж DC, беженец с планеты Криптон, который приземляется на Землю, развивает сверхчеловеческие способности и становится одним из величайших защитников Земли.",
  },
  {
    id: 4,
    img1: "./img/1596548540_doktor-dum-doctor-doom-viktor-fon-dum.jpg",
    img2: "./img/Doctor_Doom-removebg-preview.png",
    description:
      "Доктор Дум заклятый враг команды супергероев Фантастической четвёрки. Диктатор вымышленной нации Латверии. Он одновременно учёный и волшебник, был как злодеем, так и героем.",
  },
];
function App() {
  return (
    <div>
      <CardList characters={characters} />
    </div>
  );
}
export default App;
