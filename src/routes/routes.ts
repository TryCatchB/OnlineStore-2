import Electronics from "../pages/electronics/Electronics";
import Home from "../pages/home/Home";
import Jewelry from "../pages/jewelry/Jewelry";
import MensClothing from "../pages/mensClothing/MensClothing";
import WomensClothing from "../pages/womensClothing/WomensClothing";

export const routes = [
  { path: "/", component: Home },
  { path: "/electronics", component: Electronics },
  { path: "/jewelry", component: Jewelry },
  { path: "/mens-clothing", component: MensClothing },
  { path: "/womens-clothing", component: WomensClothing },
];
