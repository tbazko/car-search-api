// I'm not setting up real database, I think it's out of scope

const brands = [
  { id: 'aston', name: 'Aston Martin' },
  { id: 'honda', name: 'Honda' },
  { id: 'merc', name: 'Mercedes' },
  { id: 'toyota', name: 'Toyota' }
];

const models = [
  {
    id: 'aston', models: [
      { id: '1', name: 'Aston Rapid S' },
      { id: '2', name: 'Vantage' },
      { id: '3', name: 'DB9' }
    ]
  },
  {
    id: 'honda', models: [
      { id: '4', name: 'Vezel' },
      { id: '5', name: 'Brio' },
      { id: '6', name: 'City' }
    ]
  },
  {
    id: 'merc', models: [
      { id: '7', name: 'Coupe' },
      { id: '8', name: 'Suv' },
    ]
  },
  {
    id: 'toyota', models: [
      { id: '9', name: 'Prius' },
      { id: '10', name: 'Yaris' },
    ]
  }
];

export function fetchModelsByBrand(brandId) {
  const brandWithModels = models.find(brand => brand.id === brandId);
  return brandWithModels ? brandWithModels.models : [];
}

export function fetchBrands() {
  return brands;
}
