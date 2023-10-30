import data from '../data.json'

export const GET = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  const featuredProducts = data.products.filter((p) => p.featured)
  return Response.json(featuredProducts)
}
