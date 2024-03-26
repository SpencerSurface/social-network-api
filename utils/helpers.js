module.exports = {
    formatDate: (date) => {
        // Get the hour from the date
        let hours = date.getHours();
        // Reduce to 12-hour time: get period, subtract larger hours by 12, adjust midnight and noon
        let period = hours < 12 ? "AM" : "PM";
        hours = hours >= 12 ? hours - 12 : hours;
        hours = hours === 0 ? 12 : hours;
        // Return the formatted date string
        return `${date.getMonth().slice(0, 3)} ${date.getDate()}, ${date.getFullYear()} at ${hours}:${date.getMinutes()} ${period}`
    }
}