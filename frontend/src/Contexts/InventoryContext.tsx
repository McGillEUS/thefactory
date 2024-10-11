import { createContext, useState, useEffect } from "react";
import axios from "axios";

interface InventoryItem {
  id: number;
  name: string;
  quantity: number;
  category: string;
  description: string;
  brand: string;
  modelNumber: string;
  serialNumber: string;
  location: string;
  state: string;
  type: string;
  class: string;
}

interface InventoryContextType {
  inventory: InventoryItem[];
  setInventory: (value: InventoryItem[]) => void;
}

// Create the context with default values
export const InventoryContext = createContext<InventoryContextType | null>(null);

export const InventoryProvider = ({ children }: { children: React.ReactNode }) => {
  const [inventory, setInventory] = useState<InventoryItem[]>([]);

  // Get the API key from the environment variable
  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    // Fetch inventory items from Strapi API
    axios
      .get("/api/inventory-items", {
        headers: {
          Authorization: `Bearer ${apiKey}`, // Set the Authorization header with the API key
        },
      })
      .then((response) => {
        setInventory(response.data.data); // Adjust based on Strapi response format
      })
      .catch((error) => {
        console.error("Failed to fetch inventory items:", error);
      });
  }, [apiKey]);

  return (
    <InventoryContext.Provider value={{ inventory, setInventory }}>
      {children}
    </InventoryContext.Provider>
  );
};
