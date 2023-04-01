import React from "react";
import Wrapper from "@/components/Wrapper";
import MainTitle from "@/components/MainTitle";

const Products = () => {
  // console.log(products)
  return (
    <Wrapper>
      <MainTitle title={'Produtos da Semana'} subtitle={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut'}/>
      Produts
    </Wrapper>
  );
};


// export async function getStaticProps() {
//   const products = await fetchDataFromApi("/");
//   console.log(products)

//   return {
//       props: { products },
//   };
// }

export default Products;
