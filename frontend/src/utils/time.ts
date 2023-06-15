export const calculateEstimatedTimeToRead = (text: string) => {
    const wpm = 100
    const words = text.trim().split(/\s+/).length
    const time = Math.ceil(words / wpm)
    return time
}