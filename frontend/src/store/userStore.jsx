// src/store/useUserStore.js
import { create } from 'zustand';

export const useUserStore = create((set) => ({
  user: null,             // holds logged-in user info

  // Signup method
  signup: async (formData) => {
    try {
      const res = await fetch('http://localhost:3001/api/User/UserRegister', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || 'Signup failed');
      }

      // Save user in state (you can also save token if your API returns it)
      set({ user: data.user });
    } catch (err) {
      throw err;
    }
  },

  logout: () => set({ user: null }),
}));
