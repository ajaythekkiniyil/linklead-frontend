import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { getUser } from '../utils/auth';

const useAuthStore = create(
    persist(
        (set) => ({
            user: null,
            setUser: (token) => {
                let user = getUser(token)
                set({ user });
            },
            logout: () => {
                set({ user: null });
            },
        }),
        { name: 'auth-store' }
    )
);

export default useAuthStore;
