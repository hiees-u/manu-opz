import { Category } from '../../types/category/category.model'
import { CategoryRequest } from '../../types/category/category.request'

const CATEGORY: Category[] = [
  {
    id: 1,
    obj_id: "APP_M_KN_TSH_001",
    obj_name: "Standard Cotton T-shirt",
    category: "Apparel",
    sub_category: "T-shirt",
    fabric_type: "Knit",
    gender: "Men",
    season: "SS2026",
  },
  {
    id: 2,
    obj_id: "APP_W_WO_SHI_002",
    obj_name: "Silk Office Blouse",
    category: "Apparel",
    sub_category: "Shirt",
    fabric_type: "Woven",
    gender: "Women",
    season: "SS2026",
  },
  {
    id: 3,
    obj_id: "APP_U_KN_HOD_003",
    obj_name: "Unisex Oversize Hoodie",
    category: "Apparel",
    sub_category: "Hoodie",
    fabric_type: "Knit",
    gender: "Unisex",
    season: "FW2026",
  },
  {
    id: 4,
    obj_id: "APP_M_DE_PAN_004",
    obj_name: "Slim Fit Raw Denim",
    category: "Apparel",
    sub_category: "Pants",
    fabric_type: "Denim",
    gender: "Men",
    season: "FW2026",
  },
  {
    id: 5,
    obj_id: "APP_W_WO_JKT_005",
    obj_name: "Classic Trench Coat",
    category: "Apparel",
    sub_category: "Jacket",
    fabric_type: "Woven",
    gender: "Women",
    season: "FW2026",
  },
  {
    id: 6,
    obj_id: "APP_M_KN_POL_006",
    obj_name: "Polo Shirt",
    category: "Apparel",
    sub_category: "Shirt",
    fabric_type: "Knit",
    gender: "Men",
    season: "SS2026",
  },
  {
    id: 7,
    obj_id: "APP_W_KN_DRE_007",
    obj_name: "Casual Knit Dress",
    category: "Apparel",
    sub_category: "Dress",
    fabric_type: "Knit",
    gender: "Women",
    season: "SS2026",
  },
  {
    id: 8,
    obj_id: "APP_U_WO_SWE_008",
    obj_name: "Lightweight Sweater",
    category: "Apparel",
    sub_category: "Sweater",
    fabric_type: "Woven",
    gender: "Unisex",
    season: "FW2026",
  },
  {
    id: 9,
    obj_id: "APP_M_WO_BLA_009",
    obj_name: "Formal Blazer",
    category: "Apparel",
    sub_category: "Jacket",
    fabric_type: "Woven",
    gender: "Men",
    season: "FW2026",
  },
  {
    id: 10,
    obj_id: "APP_W_DE_SKI_010",
    obj_name: "Denim Skirt",
    category: "Apparel",
    sub_category: "Skirt",
    fabric_type: "Denim",
    gender: "Women",
    season: "SS2026",
  },
  {
    id: 11,
    obj_id: "APP_M_KN_SHO_011",
    obj_name: "Casual Shorts",
    category: "Apparel",
    sub_category: "Shorts",
    fabric_type: "Knit",
    gender: "Men",
    season: "SS2026",
  },
  {
    id: 12,
    obj_id: "APP_W_WO_TOP_012",
    obj_name: "Elegant Sleeveless Top",
    category: "Apparel",
    sub_category: "Top",
    fabric_type: "Woven",
    gender: "Women",
    season: "SS2026",
  },
  {
    id: 13,
    obj_id: "APP_U_KN_SWE_013",
    obj_name: "Oversized Sweatshirt",
    category: "Apparel",
    sub_category: "Sweatshirt",
    fabric_type: "Knit",
    gender: "Unisex",
    season: "FW2026",
  },
  {
    id: 14,
    obj_id: "APP_M_DE_JEA_014",
    obj_name: "Regular Fit Jeans",
    category: "Apparel",
    sub_category: "Pants",
    fabric_type: "Denim",
    gender: "Men",
    season: "FW2026",
  },
  {
    id: 15,
    obj_id: "APP_W_WO_CAR_015",
    obj_name: "Cardigan Coat",
    category: "Apparel",
    sub_category: "Jacket",
    fabric_type: "Woven",
    gender: "Women",
    season: "FW2026",
  },
  {
    id: 16,
    obj_id: "APP_U_KN_TSH_016",
    obj_name: "Graphic Print T-shirt",
    category: "Apparel",
    sub_category: "T-shirt",
    fabric_type: "Knit",
    gender: "Unisex",
    season: "SS2026",
  },
  {
    id: 17,
    obj_id: "APP_M_WO_VES_017",
    obj_name: "Formal Vest",
    category: "Apparel",
    sub_category: "Vest",
    fabric_type: "Woven",
    gender: "Men",
    season: "FW2026",
  },
  {
    id: 18,
    obj_id: "APP_W_KN_LEG_018",
    obj_name: "High Waist Leggings",
    category: "Apparel",
    sub_category: "Pants",
    fabric_type: "Knit",
    gender: "Women",
    season: "SS2026",
  },
  {
    id: 19,
    obj_id: "APP_U_WO_WIN_019",
    obj_name: "Windbreaker Jacket",
    category: "Apparel",
    sub_category: "Jacket",
    fabric_type: "Woven",
    gender: "Unisex",
    season: "FW2026",
  },
  {
    id: 20,
    obj_id: "APP_M_KN_TAN_020",
    obj_name: "Tank Top",
    category: "Apparel",
    sub_category: "Top",
    fabric_type: "Knit",
    gender: "Men",
    season: "SS2026",
  },
];

const getCategoriesService = (payload: CategoryRequest): Category[] => {
  const { filters = {}, page,  cursor, pageSize = 0 } = payload;
  const hasFilters = Object.keys(filters).length > 0;
  // const filtered: Category[] = ;

  if (filters?.obj_id) {
    return CATEGORY.filter(c => c.obj_id === filters.obj_id);
  }

  const filtered = CATEGORY.filter(c => {
    return (Object.keys(filters) as (keyof Category)[]).every(key => {
      const value = filters[key];
      const itemValue = c[key];

      if (value === undefined) return true;

      // 🔥 string → includes
      if (typeof value === "string" && typeof itemValue === "string") {
        return itemValue.toLowerCase().includes(value.toLowerCase());
      }

      // 🔥 number / boolean / others → exact match
      return itemValue === value;
    });
  });

  const results = hasFilters ? filtered : CATEGORY;

  //get all
  if(pageSize === 0) return results;

  const start = filtered.findIndex(item => item.obj_id === cursor) + 1;
  const end = start + pageSize;

  //get has page size and cursor
  return results.slice(start, end);
};

export { getCategoriesService };
