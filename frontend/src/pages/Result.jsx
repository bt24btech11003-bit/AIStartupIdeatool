import { useLocation, useNavigate } from "react-router-dom";
import SummaryCard from "../components/SummaryCard";
import RoadmapCard from "../components/RoadmapCard";
import "../styles/Result.css";
import AgentCard from "../components/AgentCard";
import Navbar from "../components/Navbar";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { downloadReport } from "../services/validationService";


function Result() {

    const location = useLocation();
    const navigate = useNavigate();
    const { token } = useContext(AuthContext);

    // If user refreshes or directly opens /result
    if (!location.state) {
        return (
            <div>
                <h2>No Validation Found</h2>

                <button onClick={() => navigate("/")}>
                    Go Back
                </button>
            </div>
        );
    }

    const {
    investor,
    customer,
    competitor,
    verdict,
    roadmap,
    validationId,
} = location.state;

const handleDownload = async () => {

    try {

        const response = await downloadReport(
            validationId,
            token
        );

        const url = window.URL.createObjectURL(
            new Blob([response.data])
        );

        const link = document.createElement("a");

        link.href = url;

        link.download = "Startup_Report.pdf";

        document.body.appendChild(link);

        link.click();

        link.remove();

    } catch (error) {

        alert("Failed to download report.");

    }

};
    return (
    <>
        <Navbar />

        <div className="result-container">

            <div className="agent-grid">

    <AgentCard
        title="🧠 Investor Agent"
        content={investor}
    />

    <AgentCard
        title="👤 Customer Agent"
        content={customer}
    />

    <AgentCard
        title="⚔️ Competitor Agent"
        content={competitor}
    />

</div>

            <SummaryCard
                verdict={verdict}
            />

            <RoadmapCard
                roadmap={roadmap}
            />

            <div className="download-section">

    <button
        className="download-btn"
        onClick={handleDownload}
    >
        📄 Download PDF Report
    </button>

</div>

        </div>
    </>
);
}



export default Result;