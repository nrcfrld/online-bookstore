const DetailProduct = ({ params }: { params: { id: string | number } }) => {
  return <div>{params.id}</div>;
};

export default DetailProduct;
