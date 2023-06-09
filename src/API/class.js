// add Class
export const addClass = async (classData) => {
    const response = await fetch(`${import.meta.env.VITE_BASE_URL}/classes`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(classData)
    })
    const data = await response.json()
    return data;
}