const fetchProducts = async(userEmail) => {
    try {
  const response = await fetch(`http://localhost:3003/figures/${userEmail}`);
  const data = await response.json();

  if (response.ok) {
    return data;
  }

    } catch (error) {
      console.log(error);
    }
};

export default fetchProducts;
