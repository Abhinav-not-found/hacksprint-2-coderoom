import { useState } from "react";

export const useClipboard = (resetDelay = 1000) => {
	const [copied, setCopied] = useState(false);

	const copy = async (text) => {
		await navigator.clipboard.writeText(text);
		setCopied(true);

		setTimeout(() => setCopied(false), resetDelay);
	};

	return { copied, copy };
};
