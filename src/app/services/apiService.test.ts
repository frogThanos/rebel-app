import apiService from '../services/apiService';

global.fetch = jest.fn();

describe('apiService', () => {
  const baseUrl = 'http://localhost:3001/items';

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should fetch all items', async () => {
    const mockItems = [{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }];
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: jest.fn().mockResolvedValueOnce(mockItems),
    });

    const result = await apiService.getAll(baseUrl);

    expect(fetch).toHaveBeenCalledWith(baseUrl);
    expect(result).toEqual(mockItems);
  });

  it('should throw an error when fetch fails', async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({ ok: false });

    await expect(apiService.getAll(baseUrl)).rejects.toThrow(
      `Failed to fetch data from ${baseUrl}`
    );
  });

  it('should fetch a single item by ID', async () => {
    const mockItem = { id: 1, name: 'Item 1', brand: 'Brand A', specifications: {} };
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: jest.fn().mockResolvedValueOnce(mockItem),
    });

    const result = await apiService.getById<typeof mockItem>(baseUrl, '1');

    expect(fetch).toHaveBeenCalledWith(`${baseUrl}/1`);
    expect(result).toEqual(mockItem);
  });

  it('should throw an error when fetching a single item fails', async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({ ok: false });

    await expect(apiService.getById(baseUrl, '1')).rejects.toThrow(
      `Failed to fetch item with id 1 from ${baseUrl}`
    );
  });

  it('should create a new item', async () => {
    const newItem = { name: 'New Item' };
    const createdItem = { id: 3, ...newItem };
    
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: jest.fn().mockResolvedValueOnce(createdItem),
    });

    const result = await apiService.create(baseUrl, newItem);

    expect(fetch).toHaveBeenCalledWith(baseUrl, expect.any(Object));
    expect(result).toEqual(createdItem);
  });

  it('should throw an error when create fails', async () => {
    const newItem = { name: 'New Item' };
    (fetch as jest.Mock).mockResolvedValueOnce({ ok: false });

    await expect(apiService.create(baseUrl, newItem)).rejects.toThrow(
      `Failed to create new item at ${baseUrl}`
    );
  });

  it('should update an existing item', async () => {
    const updatedItem = { name: 'Updated Item' };
    const itemId = 1;
    const responseItem = { id: itemId, ...updatedItem };

    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: jest.fn().mockResolvedValueOnce(responseItem),
    });

    const result = await apiService.update(baseUrl, itemId, updatedItem);

    expect(fetch).toHaveBeenCalledWith(`${baseUrl}/${itemId}`, expect.any(Object));
    expect(result).toEqual(responseItem);
  });

  it('should throw an error when update fails', async () => {
    const updatedItem = { name: 'Updated Item' };
    const itemId = 1;
    (fetch as jest.Mock).mockResolvedValueOnce({ ok: false });

    await expect(apiService.update(baseUrl, itemId, updatedItem)).rejects.toThrow(
      `Failed to update item with id ${itemId} at ${baseUrl}`
    );
  });

  it('should delete an item', async () => {
    const itemId = 1;
    (fetch as jest.Mock).mockResolvedValueOnce({ ok: true });

    await apiService.delete(baseUrl, itemId);

    expect(fetch).toHaveBeenCalledWith(`${baseUrl}/${itemId}`, expect.any(Object));
  });

  it('should throw an error when delete fails', async () => {
    const itemId = 1;
    (fetch as jest.Mock).mockResolvedValueOnce({ ok: false });

    await expect(apiService.delete(baseUrl, itemId)).rejects.toThrow(
      `Failed to delete item with id ${itemId} at ${baseUrl}`
    );
  });
});
