export async function getProduct(id:string) {
  const response = await fetch(`https://mock.shop/api?query={product(id:%20"${id}"){id%20title%20description%20featuredImage%20{id%20url}}}`)
  if (!response.ok) {
    throw new Error('Network response was not ok')
  }
  return response.json();
}
