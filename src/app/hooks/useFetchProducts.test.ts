import { renderHook, act } from '@testing-library/react';
import useFetchProducts from './useFetchProducts'; // Adjust the path


describe('useFetchProducts Hook', () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });
  
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should fetch products successfully', async () => {
    const mockProducts = [
      {
        id: 1,
        name: 'Robot Vacuum',
        brand: 'CleanBot',
        category: 'Home Appliances',
        image: 'https://source.unsplash.com/random/600x600?robot-vacuum',
        specifications: {
          batteryLife: '150 minutes',
          suctionPower: '2000Pa',
          connectivity: 'Wi-Fi',
        },
      },
    ];

    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => mockProducts,
    });

    const { result } = renderHook(() => useFetchProducts());

    // initial state
    expect(result.current.loading).toBe(true);
    expect(result.current.products).toEqual([]);
    expect(result.current.error).toBeNull();

    await act(async () => {
      result.current.fetchProducts();
    });

    expect(result.current.loading).toBe(false);
    expect(result.current.products).toEqual(mockProducts);
    expect(result.current.error).toBeNull();
  });
});
