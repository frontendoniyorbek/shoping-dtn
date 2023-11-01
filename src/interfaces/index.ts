export interface ProductType {
	id: number;
	title: string;
	price: number;
	description: string;
	category: string;
	qunatity: number;
	image: string;
	rating: { rate: number; count: number };
}
