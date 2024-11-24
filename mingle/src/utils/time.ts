export const GetFormattedTime = (dateInput: string | Date): string => {
	const date =
		typeof dateInput === "string" ? new Date(dateInput) : dateInput;

	if (isNaN(date.getTime())) {
		throw new Error("Invalid date provided");
	}

	const now = new Date();
	const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
	const targetDate = new Date(
		date.getFullYear(),
		date.getMonth(),
		date.getDate()
	);

	const dayDifference =
		(targetDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24);

	if (dayDifference === 0) {
		return "Сегодня";
	} else if (dayDifference === -1) {
		return "Вчера";
	} else if (dayDifference === 1) {
		return "Завтра";
	}

	const options: Intl.DateTimeFormatOptions = {
		day: "numeric",
		month: "long",
		year: "numeric",
	};
	return date.toLocaleDateString("ru-RU", options);
};
