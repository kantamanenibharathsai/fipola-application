import {
  bbQCornerImgUrl,
  chickenImgUrl,
  coldCutsImgUrl,
  combosImgUrl,
  dryFishImgUrl,
  eggsImgUrl,
  grillHouseImgUrl,
  importedImgUrl,
  lambAndGoatImgUrl,
  marinadesImgUrl,
  readyToFryImgUrl,
  relishesImgUrl,
  seaFoodImgUrl,
  veganImgUrl,
} from "../assets/category_page_images/CategoryImages";

export interface CategoryObjInterface {
  categoryId: number;
  categoryImg: string;
  categoryName: string;
}

export const categoryData: CategoryObjInterface[] = [
  {
    categoryId: 1,
    categoryImg: chickenImgUrl,
    categoryName: "Chicken",
  },
  {
    categoryId: 2,
    categoryImg: lambAndGoatImgUrl,
    categoryName: "Lamb & Goat",
  },
  {
    categoryId: 3,
    categoryImg: seaFoodImgUrl,
    categoryName: "Sea Food",
  },
  {
    categoryId: 4,
    categoryImg: marinadesImgUrl,
    categoryName: "Marinades",
  },
  {
    categoryId: 5,
    categoryImg: coldCutsImgUrl,
    categoryName: "Cold Cuts",
  },
  {
    categoryId: 6,
    categoryImg: readyToFryImgUrl,
    categoryName: "Ready To Fry",
  },
  {
    categoryId: 7,
    categoryImg: relishesImgUrl,
    categoryName: "Relishes",
  },
  {
    categoryId: 8,
    categoryImg: eggsImgUrl,
    categoryName: "Eggs",
  },
  {
    categoryId: 9,
    categoryImg: combosImgUrl,
    categoryName: "Combos",
  },
  {
    categoryId: 10,
    categoryImg: bbQCornerImgUrl,
    categoryName: "BBQ Corner",
  },
  {
    categoryId: 11,
    categoryImg: importedImgUrl,
    categoryName: "Imported",
  },
  {
    categoryId: 12,
    categoryImg: dryFishImgUrl,
    categoryName: "Dry Fish",
  },
  {
    categoryId: 13,
    categoryImg: grillHouseImgUrl,
    categoryName: "Grill House",
  },
  {
    categoryId: 14,
    categoryImg: veganImgUrl,
    categoryName: "Vegan",
  },
];


export interface ProductInterface {
  productId: number;
  productName: string;
  productImg: string;
  productOriginalPrice: number;
  productPrice: number;
  productQuantity: number;
}

export interface CartProductInterface {
  productId: number;
  productName: string;
  productImg: string;
  productOriginalPrice: number;
  productPrice: number;
  productQuantity: number;
}

// export interface CartProductInterface extends BestSellersCardInterface {}
