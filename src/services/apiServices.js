const PUBLISHER_URL = 'https://localhost:7040/api/Publisher'
const ARTICLE_URL = 'https://localhost:7040/api/Article'

export const postPublisher = async (data) => {
    try {
        const response = await fetch(PUBLISHER_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        return await response.json();
    } catch (error) {
        throw error;
    }
};

export const putPublisher = async (id, data) => {
    try {
        const response = await fetch(`${PUBLISHER_URL}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        return await response.json();
    } catch (error) {
        throw error;
    }
};

export const deletePublisher = async (id) => {
    try {
        const response = await fetch(`${PUBLISHER_URL}/${id}`, {
            method: 'DELETE',
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        return await response.json();
    } catch (error) {
        throw error;
    }
};

export const postArticle = async (data) => {
    try {
        const response = await fetch(ARTICLE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        return await response.json();
    } catch (error) {
        throw error;
    }
};


