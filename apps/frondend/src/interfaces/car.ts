export default interface Car {
  id: string;
  attributes: {
    brand: string;
    model: string;
    description: string;
    productionStart: string;
    productionEnd?: string;
    imageUrl: string;
  };
}
