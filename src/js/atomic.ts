import Alpine from "alpinejs";

import carousel from "./components/carousel";
import collapsible from "./components/collapsible";
import lineClamp from "./components/line-clamp";

import "../css/atomic.css";

window.Alpine = Alpine;

Alpine.data("carousel", carousel);
Alpine.data("collapsible", collapsible);
Alpine.data("lineClamp", lineClamp);

Alpine.start();
