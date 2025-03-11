import React from "react";
import ProductCard from "./ProductCard";
import { memo } from "react";
const products = [
  {
    id: 1,
    name: "The Legend of Zelda: Breath of the Wild",
    price: "35 000 тг.",
    image:
      "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000000025/7137262b5a64d921e193653f8aa0b722925abc5680380ca0e18a5cfd91697f58",
    description:
      "Компьютерная игра в жанре action-adventure с открытым миром, разработанная и выпущенная японской компанией Nintendo",
  },
  {
    id: 2,
    name: "Crysis",
    price: "30 000 тг.",
    image: "https://upload.wikimedia.org/wikipedia/ru/a/aa/Crysis_boxart.jpg",
    description:
      "Компьютерная игра в жанре шутера от первого лица, разработанная немецкой компанией Crytek и изданная Electronic Arts",
  },
  {
    id: 3,
    name: "MarioParty",
    price: "45 000 тг.",
    image:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQnxh-SfTV7HdRjHemN9S2pqiMX8ohqfiowfiVk6EwDv4IbdNKboB-Yl18AomFbrbgQdxd5Qi_fywe05Fcfob8GpHwNuahWLiP6Bmbatjk",
    description:
      "это серия видеоигр для вечеринок, созданная Hudson Soft и принадлежащая Nintendo. В нем представлены персонажи из франшизы Марио, в которых до четырех местных игроков или персонажей, управляемых компьютером, соревнуются в настольной игре, перемежающейся мини-играми.",
  },
  {
    id: 4,
    name: "AnimalCrossing",
    price: "40 000 тг.",
    image:
      "https://assets.nintendo.com/image/upload/q_auto/f_auto/ncom/software/switch/70010000027619/9989957eae3a6b545194c42fec2071675c34aadacd65e6b33fdfe7b3b6a86c3a",
    description:
      "серия видеоигр в жанре симулятор жизни, разработанная и выпущенная японской компанией Nintendo и созданная японским геймдизайнером Кацуя Эгути.",
  },
  {
    id: 5,
    name: "Ori",
    price: "32 000 тг.",
    image:
      "https://upload.wikimedia.org/wikipedia/ru/thumb/b/b2/Ori_and_the_Blind_Forest_Logo.jpg/274px-Ori_and_the_Blind_Forest_Logo.jpg",
    description:
      "компьютерная игра в жанрах платформер и метроидвания, разработанная студией Moon Studios на базе движка Unity и изданная Xbox Game Studios. Выпуск игры для платформ Windows и Xbox One состоялся 11 марта 2015 года, а 27 сентября 2019 года игра была выпущена на платформе Nintendo Switch",
  },
  {
    id: 6,
    name: "Splatoon",
    price: "30 000 тг.",
    image: "https://splatoon.nintendo.com/images/share-tw.jpg",
    description:
      "серия игр в жанре шутера от третьего лица от Nintendo и созданная под руководством Хисаси Ногами",
  },
  {
    id: 7,
    name: "Super Smash Bros",
    price: "32 000 тг.",
    image:
      "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000012332/ac4d1fc9824876ce756406f0525d50c57ded4b2a666f6dfe40a6ac5c3563fad9",
    description:
      "игровая серия кроссоверов от издателя Nintendo. Создателем и по совместительству руководителем разработки каждой игры является Масахиро Сакураи.",
  },
];
const ProductList = memo(() => {
  return (
    <div className="list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
});
export default ProductList;
