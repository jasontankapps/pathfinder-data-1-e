export type Color = "red" | "redorange" | "orange" | "lightorange" | "yellow" | "chartreuse" | "green" | "bluegreen" | "teal" | "cyan" | "blue" | "skyblue" | "purple" | "magenta" | "pink" | "brown" | "grey" | "bluegrey";

type ColorObject = {[key in Color]: string};

export const lightColors: ColorObject = {
	"red": "#ff1744",
	"redorange": "#ff3d00",
	"orange": "#ff9100",
	"lightorange": "#ffc400",
	"yellow": "#ffea00",
	"chartreuse": "#c6ff00",
	"green": "#76ff03",
	"bluegreen": "#00e676",
	"teal": "#1de9b6",
	"cyan": "#00e5ff",
	"blue": "#00b0ff",
	"skyblue": "#82b1ff",
	"purple": "#b388ff",
	"magenta": "#d500f9",
	"pink": "#ff4081",
	"brown": "#a1887f",
	"grey": "#bdbdbd",
	"bluegrey": "#b0bec5"
};

export const darkColors: ColorObject = {
	"red": "#ff1744",
	"redorange": "#ff3d00",
	"orange": "#ff9100",
	"lightorange": "#ffc400",
	"yellow": "#ffea00",
	"chartreuse": "#c6ff00",
	"green": "#76ff03",
	"bluegreen": "#00e676",
	"teal": "#1de9b6",
	"cyan": "#00e5ff",
	"blue": "#00b0ff",
	"skyblue": "#82b1ff",
	"purple": "#b388ff",
	"magenta": "#cc00f9",
	"pink": "#cc4081",
	"brown": "#a19988",
	"grey": "#bdbdbd",
	"bluegrey": "#b0becc"
};
