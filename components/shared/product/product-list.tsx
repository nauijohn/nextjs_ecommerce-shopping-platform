const ProductList = ({
  data,
  title,
  limit,
}: {
  data: any[];
  title?: string;
  limit?: number;
}) => {
  const limitedData = limit ? data.slice(0, limit) : data;
  return (
    <div className="my-10">
      <h2 className="mb-4 h2-bold">{title}</h2>
      {data.length > 0 ? (
        <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {limitedData.map((product: any) => {
            return <div key={product.slug}>{product.name}</div>;
          })}
        </div>
      ) : (
        <div>
          <p>No products found</p>
        </div>
      )}
    </div>
  );
};

export default ProductList;
