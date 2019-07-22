// I'm not setting up real database, I think it's out of scope

const brands = [
  { id: 'aston', name: 'Aston Martin' },
  { id: 'honda', name: 'Honda' },
  { id: 'merc', name: 'Mercedes' },
  { id: 'toyota', name: 'Toyota' }
];

const models = [
  { id: 'aston', models: ['Aston Rapid S', 'Vantage', 'DB9'] },
  { id: 'honda', models: ['Vezel', 'Brio', 'City'] },
  { id: 'merc', models: ['Coupe', 'Suv'] },
  { id: 'toyota', models: ['Prius', 'Yaris'] }
];

export function fetchModelsByBrand(brandId) {
  const brandWithModels = models.find(brand => brand.id === brandId);
  return brandWithModels ? brandWithModels.models : [];
}

export function fetchBrands() {
  return brands;
}
