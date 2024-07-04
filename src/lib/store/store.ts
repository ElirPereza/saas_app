import { create } from 'zustand'


type Sidebar = {
    sidebaropen: boolean
    toggleSidebar: () => void
}


export const useStore = create<Sidebar>((set) => ({
  sidebaropen: true,
  toggleSidebar: () => set((state) => ({ sidebaropen: !state.sidebaropen })),
}))

