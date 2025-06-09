export function trimText(input: string, maxLength: number = 100): string {
  if (input.length <= maxLength) return input;
  return input.substring(0, maxLength - 3) + "...";
}

export function getCurrentTimeInItaly(): Date {
  // Create a date object with the current UTC time
  const now = new Date();

  // Convert the UTC time to Central Mexico's time
  const offsetMexico = -6; // Mexico is in Central Time (UTC-6), but you might need to adjust this based on Daylight Saving Time
  now.setHours(now.getUTCHours() + offsetMexico);

  return now;
}

export function formatTimeForItaly(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true, // This will format the time in 12-hour format with AM/PM
    timeZone: "America/Mexico_City",
  };

  let formattedTime = new Intl.DateTimeFormat("en-US", options).format(date);

  // Append the time zone abbreviation. For simplicity, here I'm just appending "CST", but remember that Mexico switches between CST and CDT for Daylight Saving Time.
  formattedTime += " CST"; // Change to CDT if Daylight Saving Time is in effect

  return formattedTime;
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
