import { createContext, useState } from "react";

export const AuthContext = createContext({})

function AuthProvider({ children }) {
    const [activeNavItem, setActiveNavItem] = useState("#top")
    const [openToggle, setOpenToggle] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [openLogin, setOpenLogin] = useState(false)
    const [component, setComponent] = useState("")

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const openModalHours = () => {
        setOpenToggle(true);
    };

    const closeModalHours = () => {
        setOpenToggle(false);
    };

    const scrollToSection = (sectionId) => {
        setActiveNavItem(sectionId)
        const section = document.getElementById(sectionId)
        if (section) {
            section.scrollIntoView({
                behavior: "smooth",
                block: "start"
            })
        }
    }

    return (
        <AuthContext.Provider value={{
            isModalOpen, setIsModalOpen, openModal, closeModal,
            component, setComponent, openToggle, setOpenToggle,
            openModalHours, closeModalHours, openLogin, setOpenLogin,
            activeNavItem, setActiveNavItem, scrollToSection
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider