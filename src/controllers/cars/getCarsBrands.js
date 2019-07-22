import { fetchBrands } from '../../services/storageService';

/**
 * GET /cars/brands
 */
export default async function getCarsBrands(req, res) {
  const brands = await fetchBrands();
  res.status(200).json(brands);
}
