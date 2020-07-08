import { menuToggle, showMenu, menuAction } from "./menu";
import selectCourts from "./select-courts";
import pageScroll from "./page-scroll";

$(document).ready(function($) {
	menuToggle();
	showMenu();
	menuAction();
	selectCourts();
	pageScroll();
});
