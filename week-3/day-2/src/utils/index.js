/**
 * 
 * @param {number} price 
 * @returns 
 */
export function formatPrice(price) {
  return `${price.toFixed(2)} ₺`
}

export const appToast = {
  showToast (value = false) {
    document.dispatchEvent(new CustomEvent("FETCHING", { detail: value } ));
  }
}