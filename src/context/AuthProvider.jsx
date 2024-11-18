import { createContext, useState } from "react";

export const AuthContext = createContext({})

function AuthProvider({ children }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [component, setComponent ] = useState("")

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <AuthContext.Provider value={{ isModalOpen, setIsModalOpen, openModal, closeModal, component, setComponent }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider