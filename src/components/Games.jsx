import React, { useState, Suspense } from "react";
const ProductList = React.lazy(() => import("./ProductsList"));
const Games = () => {
  const [showProduct, setShowProduct] = useState(false);
  const handleShowProduct = () => {
    setShowProduct(true);
  };
  return (
    <div className="home">
      <h1>Добро пожаловать!</h1>
      <button onClick={handleShowProduct} style={{ margin: "20px 0" }}>
        Показать весь ассортимент
      </button>
      {showProduct && (
        <Suspense fallback={<div>Загрузка магазина</div>}>
          <ProductList />
        </Suspense>
      )}
    </div>
  );
};
export default Games;
