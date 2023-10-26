import data from '../data.json'

export const GET = async () => {
  const featuredProducts = data.products.filter((p) => p.featured)
  return Response.json(featuredProducts)
}
