import ProductList from "@/components/shared/product/product-list";
import sampleDate from "@/db/sample-data";

const Homepage = () => {
  return (
    <>
      <ProductList
        data={sampleDate.products}
        title="Newest Arrivals"
        limit={4}
      />
    </>
  );
};

export default Homepage;
