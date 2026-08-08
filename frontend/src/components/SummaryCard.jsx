import "../styles/SummaryCard.css";

function SummaryCard({ verdict }) {

    return (

        <div className="summary-card">

            <h2>📋 Idea Summary</h2>

            <pre className="summary-text">

                {verdict}

            </pre>

        </div>

    );

}

export default SummaryCard;