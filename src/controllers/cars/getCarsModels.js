import { fetchModelsByBrand } from '../../services/storageService';

/**
 * GET /cars/models?brand=${brandId}
 */
export default async function getCarsModels(req, res) {
  const { brand } = req.query;
  const models = await fetchModelsByBrand(brand);
  res.status(200).json(models);
}
