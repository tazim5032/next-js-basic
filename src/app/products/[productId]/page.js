import React from "react";

const DynamicProductPage = async ({ params, searchParams }) => {
  const productId = await params;
  console.log(await searchParams)
  return (
    <div>
      <h1 className="text-4xl text-center">This is Dynamic Product page</h1>
    </div>
  );
};

export default DynamicProductPage;
