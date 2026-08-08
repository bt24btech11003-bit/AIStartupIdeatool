import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ValidationForm from "../components/ValidationForm";

import { AuthContext } from "../context/AuthContext";
import { validateIdea, enhanceIdea, getRemaining } from "../services/validationService";

import "../styles/Dashboard.css";

function Dashboard() {

    const [idea, setIdea] = useState("");
    const [enhancedIdea, setEnhancedIdea] = useState("");
    const [enhancing, setEnhancing] = useState(false);
    const [remaining, setRemaining] = useState(5);
    const [loading, setLoading] = useState(false);

    const { token } = useContext(AuthContext);

    const navigate = useNavigate();

    useEffect(() => {

    fetchRemaining();

}, []);

    const fetchRemaining = async () => {

    try {

        const response = await getRemaining(token);

        setRemaining(response.data.remaining);

    } catch (error) {

        console.log(error);

    }

};

    const handleValidate = async () => {

        if (!idea.trim()) {
            alert("Please enter your startup idea.");
            return;
        }

        setLoading(true);

        try {

            const ideaToValidate = enhancedIdea.trim() || idea;
            
            const response = await validateIdea(
                ideaToValidate,
                 token
                );

                console.log("Backend Response:", response.data);

            setRemaining(response.data.remaining);

            fetchRemaining();

            navigate("/result", {
                state: response.data,
            });

        } catch (error) {

            alert(
                error.response?.data?.error ||
                error.response?.data?.message ||
                "Validation Failed"
            );

        } finally {

            setLoading(false);

        }

    };

    const handleEnhance = async () => {

    if (!idea.trim()) {

        alert("Please enter your startup idea.");

        return;

    }

    setEnhancing(true);

    try {

        const response = await enhanceIdea(idea, token);

        setEnhancedIdea(response.data.enhancedIdea);

    } catch (error) {

        alert(

            error.response?.data?.message ||

            "Failed to enhance startup idea."

        );

    } finally {

        setEnhancing(false);

    }

};

    return (
        <>
            <Navbar />

            <div className="dashboard">

                <Hero />

                <ValidationForm
                    idea={idea}
                    setIdea={setIdea}
                    enhancedIdea={enhancedIdea}
                    setEnhancedIdea={setEnhancedIdea}
                    handleEnhance={handleEnhance}
                    handleValidate={handleValidate}
                    loading={loading}
                    enhancing={enhancing}
                    remaining={remaining}
                />

            </div>
        </>
    );

}



export default Dashboard;