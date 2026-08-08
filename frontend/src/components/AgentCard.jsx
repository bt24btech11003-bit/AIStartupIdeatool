import "../styles/AgentCard.css";

function AgentCard({ title, content }) {

    const formattedContent = content
        .replace(/VERDICT:/g, "<span class='label'>VERDICT:</span>")
        .replace(/MARKET:/g, "<span class='label'>MARKET:</span>")
        .replace(/FUNDABILITY:/g, "<span class='label'>FUNDABILITY:</span>")
        .replace(/KEY RISK:/g, "<span class='label'>KEY RISK:</span>")
        .replace(/WOULD PAY:/g, "<span class='label'>WOULD PAY:</span>")
        .replace(/MISSING:/g, "<span class='label'>MISSING:</span>")
        .replace(/ANNOYS ME:/g, "<span class='label'>ANNOYS ME:</span>")
        .replace(/RATING:/g, "<span class='label'>RATING:</span>")
        .replace(/HOW I CRUSH THEM:/g, "<span class='label'>HOW I CRUSH THEM:</span>")
        .replace(/THEIR WEAKNESS:/g, "<span class='label'>THEIR WEAKNESS:</span>")
        .replace(/CAN THEY SURVIVE:/g, "<span class='label'>CAN THEY SURVIVE:</span>")
        .replace(/FEAR LEVEL:/g, "<span class='label'>FEAR LEVEL:</span>");

    return (

        <div className="agent-card">

            <div className="agent-header">

                <h2>{title}</h2>

            </div>

            <div
                className="agent-content"
                dangerouslySetInnerHTML={{
                    __html: formattedContent.replace(/\n/g, "<br/>"),
                }}
            />

        </div>

    );

}

export default AgentCard;