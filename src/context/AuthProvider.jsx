import { createContext, useState } from "react";

export const AuthContext = createContext({})

function AuthProvider({ children }) {
    const [openToggle, setOpenToggle] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false);
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

    return (
        <AuthContext.Provider value={{
            isModalOpen, setIsModalOpen, openModal, closeModal,
            component, setComponent, openToggle, setOpenToggle,
            openModalHours, closeModalHours
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider