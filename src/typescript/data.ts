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

export const relatedCategoryCardData: ProductInterface[] = [
  {
    productId: 1,
    productName: "Chicken Breast Boneless Skinless",
    productImg:
      "https://s3-alpha-sig.figma.com/img/665f/e93d/de4463e54d4d3c4cb537c2a97fb6e3ae?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=APPF-cXwq2QEMLiBWhjbBJcos0MRBKsMNi~T5fmT9xjKsOSN4kHKH~kzVX8Ha8VDkI-9g5ohe5Z6TWxvrfhCAKq1VnCDP8rrBUTM1RHZkR31YRYC046dtu1NzDhPX0jsQXsMLLxEV0uBM0zboOee7hN7XldZbdWG5VJBBLeHQC2iNg3S0TNXg83R9i6SmdEkRGxj81oKtBXXr-WGMm~v1qiNAqDNRtXL2Ri-BlvF9bCUcVfjAgBEL5vKHoemJwx8dJeeOmGRq1SuFp9wqPDBYNubC8CD2dB43uQ5Baa5HOp9BOctwz0oiXG8KTTcaktry1OWU4Sj0LS9J3LJ7JZfbQ__",
    productOriginalPrice: 200,
    productPrice: 173,
    productQuantity: 0,
  },
  {
    productId: 2,
    productName: "Chicken Curry Cut - Skinless",
    productImg:
      "https://s3-alpha-sig.figma.com/img/6bb9/2e18/661387c7ce80870eb9da9d94fe66ae47?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EUc36cF13PDXB-WmZ7PK11ye1w7Ca010A-IVPWy6whlScKdpLQl8PFAa0NWw5dyUH2MOoFj4Z33~S90NNPBhp2zcpjbDMw5uT2rGWcHh~xpGNA2XI75Bi59mI7EtQ6qUh0X2UQykyyS-iQ1pSSu7oCaRLf-4Vcs3qkjstaczBgkd6hZc05Y02~M8DhW~tfiOo67fp8~fD-rdMoargPvVxtQ5UMUltby2NR3I~VJqzCCCyNcvL-LJ53UERAiiEaoSN1vOBLVkkYJwMcypQij4reyq5rfnnKY0XLi0ZdQHnVZUyjRtfy1AQztveTu~EfoLNtUbH8UKIUL2QklohdG8kA__",
    productOriginalPrice: 200,
    productPrice: 173,
    productQuantity: 0,
  },
  {
    productId: 3,
    productName: "Chicken Boneless - Cube Cut",
    productImg:
      "https://s3-alpha-sig.figma.com/img/6be3/035b/a7e251d57ad39259f458cbdbaacc8880?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SGk6FHWw0sFXkT4c510t8ch9RPUxKHaPaPmpv-JObD0SXdowPKCxoeUdL-4VNfN40t5X3DI6U~EaFqxGa-mAmF-CMUzT6at4Xm8LJCNdcQcfRPcttX3kONQm5DTJiZPq3Pyke3h4gBLwMeBmBk1PhQGGKRR9jGNpKNtq6csy-Y4VNParRUMWOSzWYxjfwt6YKXq3Jq~pU7n19ECVk7-O1Wf1pYwE-QV0pWwEf7GvzBq7Mwga2NG94hbSKJNihIaYqugfLPkmCYitJabGJ8w1Eo7Hx7wCzZ9rHE2KbwSWIyyWSQxQ0DTo1tR1IW59ql7Tkjca0w8ocTz2hRxO4~vD-Q__",
    productOriginalPrice: 200,
    productPrice: 173,
    productQuantity: 0,
  },
  {
    productId: 4,
    productName: "Chicken Curry Cut - Skin On",
    productImg:
      "https://s3-alpha-sig.figma.com/img/408e/3b1b/1b4b24aa5af24d205df5f1e2e566f1f9?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qwHXOwExLK459PVbaHECN7ikUjh4DLZx5TtxsRWuNjjXt6M0S4lYTKIPXV~Wxg5twfP2wxhu811geLJTjfPbtLlfHg-oposwoKfKSkT61NPvW7IRsMHTdGwRzVXxOovaIFDfvm~quQ-uK-2cq4cUDOb4Mm57NZ1z85xR7M8u6jvIphptnUcTeQXU0IJ-erM7Ze7UuahBwYzoechL0yRbC1-gfLs29mThN0Kwa4NmyQSgIxJXz3h62jJtKzOyvFeAeIuSkBhPcB9XGw8URnXOcICxheGmb1Hmy58JrcEOsV5K9Dt-ce3NabY0tw-2bwHEgy8Xx~MSKAcnDUmE43t8Kg__",
    productOriginalPrice: 200,
    productPrice: 173,
    productQuantity: 0,
  },
  {
    productId: 5,
    productName: "Chicken Biryani Cut - Skinless",
    productImg:
      "https://s3-alpha-sig.figma.com/img/c6fd/81a1/018cadca0cdbb97e704f8123eda351b8?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YxOJJ6yY3OT39Jq9ZBvOW1L-XY6D6ZI0U5Nb57Nv737H7izWxAIfp74Ca18-ymftretGsS~T-DVvv609Ap9RyVxsjKpjWI9lMdrpWJEyo8VJgInOJ5W42j06Kqp0Z-f01ZWxADlAKaBXtLC9DfOC2AaaRsy-UmSJSlsaz3beJpu5cgxRJ4hhnr3A0E-bzcgdOCUah1E116CF6qzc9982ASScOHOqc4HwNEaO4Aza9I8v0kzoVyilXI-7bNxFjNS2xMnUDjfIQVlyB-mcA-adzExlniAc0s9VzH5Qq5HZhEFIS0kGpGZvaynW2~iWwmWhjwGZgC5e8InxUZwcHPYBxA__",
    productOriginalPrice: 200,
    productPrice: 173,
    productQuantity: 0,
  },
  {
    productId: 6,
    productName: "Chicken Drumstick Skinless",
    productImg:
      "https://s3-alpha-sig.figma.com/img/5730/3072/90c2a640aad6baa875224f706adaf67a?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kWQ7PECgkLsDTIMztYttJ1SUllAf478f97f~Ku92u8K~8EkqFBW7IGM1jXZrXytQp~FFISLNdCkzrnQ1gNWOXgjal3inKPMonIyZ-RVnsytJs50Sd5v4wdCXKH206TMy6yrRC1a9Vbg0dy-eb3nMlF8kKNcaj0h9NoUjd1zfQvGgweVZceyNHKpRs2yG6fNUGH3L3dOvZZssLzXc9kK5RoL7dcsnDJ5mNYJkoRle72Q4hWnaeyFYSbh-a8ARceGnl1HCWvdsHo5X6EnjnPe3PBmHZIS8BvFU3G9QNWo1You1gVFCQRlhhT2Cjir8a9~Awqid1Z50R90OjQv5LnaEfQ__",
    productOriginalPrice: 200,
    productPrice: 173,
    productQuantity: 0,
  },
  {
    productId: 7,
    productName: "Chicken Lollipop",
    productImg:
      "https://s3-alpha-sig.figma.com/img/5730/3072/90c2a640aad6baa875224f706adaf67a?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kWQ7PECgkLsDTIMztYttJ1SUllAf478f97f~Ku92u8K~8EkqFBW7IGM1jXZrXytQp~FFISLNdCkzrnQ1gNWOXgjal3inKPMonIyZ-RVnsytJs50Sd5v4wdCXKH206TMy6yrRC1a9Vbg0dy-eb3nMlF8kKNcaj0h9NoUjd1zfQvGgweVZceyNHKpRs2yG6fNUGH3L3dOvZZssLzXc9kK5RoL7dcsnDJ5mNYJkoRle72Q4hWnaeyFYSbh-a8ARceGnl1HCWvdsHo5X6EnjnPe3PBmHZIS8BvFU3G9QNWo1You1gVFCQRlhhT2Cjir8a9~Awqid1Z50R90OjQv5LnaEfQ__",
    productOriginalPrice: 200,
    productPrice: 173,
    productQuantity: 0,
  },
  {
    productId: 8,
    productName: "Whole Chicken - Skin On",
    productImg:
      "https://s3-alpha-sig.figma.com/img/f531/140a/51cc5a6d70631a68be52a6cb3c44e3e1?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K0H0HtFX0zsc4S4msrNyj4B3FcuJC2ZASjV0ZlhQVXVTegxvmbkmHvDnb1wCIFZsYgz3q4OxLaxIMZYDyVeT-f5nfNQij~fj~Nbb8gd9dKuygVFTmrPSeneO0vcei-qkKI9Gv6bsAei3wJPyCTxeE57KQ0cL6gXVpcckD5~rmSfw4q7RnnrNsLs3KcfyAR7jfNzHNrH20iBx1WKP42F3~8HqP0S3xNC8SAz4hI4cNJQoscKwEUyh19Gf9DSnSFx1GxnihO9s4csdvUCV~YCwAXXgjCsvCT8gmRGuH2-6HEOzRHVpIJ5r8OpPkoXYFwn~7qAsB~K0RBeCy4MmVkUDvA__",
    productOriginalPrice: 200,
    productPrice: 173,
    productQuantity: 0,
  },
  {
    productId: 9,
    productName: "Chicken Mince",
    productImg:
      "https://s3-alpha-sig.figma.com/img/9298/3225/c56096f3efbaea6d77ac386201791231?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=StryUkXy0iQ3807EtlbCmg~yrKZe~U~~WnngUVLE8gGHMyfj5z630Qq6xVaG7VPOSpRrf6B1hFNZ2IY4uyG7KIqCT--zu5aAL6xrFq2fwwVX6CtONF1sKLRWU~2tUeQKdZNtU2lahMYaOW4-gh~XmmAumZmk1TuDbTIAkwUA4C1sSAKpZRjWKHp3c0VCXnCxYZW-J~TBu08V5At7LSy2D7l32wZEVqMoOAddZfk2ICdUdqEAMRX0hlhsFZjyL-SF7z3~iiLl1pjXSkdH1-Ie~ghSRINlRG0MEEY1DOa8kRnIM5mXB1ZwF1ADMLT6zkRU6tcILOQWAm6LzNo9se-lsA__",
    productOriginalPrice: 200,
    productPrice: 173,
    productQuantity: 0,
  },
  {
    productId: 10,
    productName: "Chicken Tenders",
    productImg:
      "https://s3-alpha-sig.figma.com/img/3c6c/9890/3c4cb922088f341773efaadfcff6c1ba?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JIjYomwNkPdwmmUv9Nroj1qb4IwCXcbZAKDRweN4G-o7sBvDoocOQJOru121QmOgXpNHbRgTXzpudp61OIJTNDijoTluFwYrjd--6jO6TvmjJ4imJsphBFUUw~akiDjrIieIN5fnXv02k6cmEe0z6qgHbMewxPI9I8F0XJEcF5duL4kZfOWrx6Vtft7CyMzL5JOh2Lc1TVvQ8x9fHHAnT9ODJ2AY~B3XcTV-gHT9Fd57h1uRpdR3ie94JaSwxtaJBPEHWEbQWouFYf0b9hqz1Qzmyjj1TIhut12NCEk52VaiXBlkGUbe5G5p77Z4phhgrKU8r~~vTeiODa~Haoaw6g__",
    productOriginalPrice: 200,
    productPrice: 173,
    productQuantity: 0,
  },
  {
    productId: 11,
    productName: "Chicken Whole Leg - Skinless",
    productImg:
      "https://s3-alpha-sig.figma.com/img/ccc8/3b9f/cd8c5f0c219ee016a61d67459d46ed0b?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=i1s72j7Zum1CZyeolxa~Jov7F0VEpjil7XkrJS0E4uv3segKT1Gz3w3VrINf2dN3F10DPcnPyoNfYLlY91G-2cpwfOsl6NMBdMfptG70gg22UUtDZkBNxQibAMh~ZEvV8-TAKxJ~BC4YhrdTnwY~X69OHB-aL7vhjw7mJTWoQlF2qusuQ7UpwIYeUPPUtxlr3J7f4d8RvTR5ROooVS~C23rruSvoEFEfKU50pT3patOyE-Oybiw6z4lar9jByo7R1-GuhfDCHkdJ9t5B~aMWOBNo~lHmb2qm8gAByAizfqK8dEIFb-DzkuNPZlfXsokVd3EDBiQzdFULl8ANjl4RTQ__",
    productOriginalPrice: 200,
    productPrice: 173,
    productQuantity: 0,
  },
  {
    productId: 12,
    productName: "Chicken Tikka Cut",
    productImg:
      "https://s3-alpha-sig.figma.com/img/3c64/2f8c/e386884c96a4a1ba8375b35237d30ddf?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZdT4gbsSz0oMA3qQZJUZwH2at5z9Wj9hjLNe-oiSESym8-pls8BKtsM-Km6MHH-Sgg-a4q1YxqHiEV0B9UreFS1zz66-8tq4Z18Y76QDTsYqPpFBBRIRlRk6TWeL7KiOhqlVuV6rmqc68V-Rta6ImdTPyAMowWFZ4~DACg58zOU7QQhH~FqN66kyeaW0tIBru6lzHgA2mqFEwibQy0Hk~HqBxb7pkv-2WHJ~Xr145j~yaxodzryeGxdOhPzlPbdcod~BstsWzsBd3B7Brt1uY5yFyUzZ9pXiVhNE~8YLv-bwavKznbQ7QmQBtPBJh-g~J35RTZhedJi8eVoYtcVNlA__",
    productOriginalPrice: 200,
    productPrice: 173,
    productQuantity: 0,
  },
];
