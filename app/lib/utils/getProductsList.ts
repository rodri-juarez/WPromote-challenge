export async function getProductsList() {
  const response = await fetch('https://mock.shop/api?query={products(first:%2020){edges%20{node%20{id%20title%20description%20featuredImage%20{id%20url}%20variants(first:%203){edges%20{node%20{price%20{amount%20currencyCode}}}}}}}}')
  if (!response.ok) {
    throw new Error('Network response was not ok')
  }
  return response.json();
}
