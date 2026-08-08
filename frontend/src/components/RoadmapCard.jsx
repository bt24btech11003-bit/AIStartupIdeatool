import "../styles/RoadmapCard.css";

function RoadmapCard({ roadmap }) {

    return (

        <div className="roadmap-card">

            <h2>🗺️ Survival Plan</h2>

            <pre className="roadmap-text">

                {roadmap}

            </pre>

        </div>

    );

}

export default RoadmapCard;