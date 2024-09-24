
const apiService = {
  // Fetch all items (GET)
  getAll: async <T>(baseUrl: string): Promise<T[]> => {
    const response = await fetch(baseUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch data from ${baseUrl}`);
    }
    return response.json();
  },

  getById: async <T>(baseUrl: string, id: string): Promise<T> => {
    const response = await fetch(`${baseUrl}/${id}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch item with id ${id} from ${baseUrl}`);
    }
    return response.json();
  },

  // Create a new item (POST)
  create: async <T>(baseUrl: string, newItem: Omit<T, 'id'>): Promise<T> => {
    const response = await fetch(baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newItem),
    });
    if (!response.ok) {
      throw new Error(`Failed to create new item at ${baseUrl}`);
    }
    return response.json();
  },

  // Update an existing item (PUT)
  update: async <T>(baseUrl: string, id: number, updatedItem: Partial<T>): Promise<T> => {
    const response = await fetch(`${baseUrl}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedItem),
    });
    if (!response.ok) {
      throw new Error(`Failed to update item with id ${id} at ${baseUrl}`);
    }
    return response.json();
  },

  // Delete an item (DELETE)
  delete: async (baseUrl: string, id: number): Promise<void> => {
    const response = await fetch(`${baseUrl}/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error(`Failed to delete item with id ${id} at ${baseUrl}`);
    }
  },
};

export default apiService;
