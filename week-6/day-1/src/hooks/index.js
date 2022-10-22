import { useEffect } from "react";

/**
 * 
 * @param {() => void} effect 
 */
export function useEffectOnce(effect) {
	useEffect(effect, []);
}