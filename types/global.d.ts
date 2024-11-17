declare global {
	interface Window {
		time_is_widget?: {
			init: (config: Record<string, any>) => void;
		};
	}
}

export {};