/**
 *
 * @param {number} price
 * @returns
 */
export function formatPrice(price) {
	return `${price.toFixed(2)} ₺`;
}

export const appToast = {
	/**
	 *
	 * @param {boolean | { show: boolean, position: "top-right" | "top-center" | "top-left" | "bottom-right" | "bottom-center" | "bottom-left", message?: string}} value
	 */
	showToast(value = false) {
		document.dispatchEvent(new CustomEvent("FETCHING", { detail: value }));
	},
};
