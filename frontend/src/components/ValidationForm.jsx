import "../styles/ValidationForm.css";
function ValidationForm({
    idea,
    setIdea,
    enhancedIdea,
    setEnhancedIdea,
    handleEnhance,
    handleValidate,
    loading,
    enhancing,
    remaining,
}) {

    return (

        <div className="validation-form">

            {/* Remaining Validations */}

            <div className="remaining">

                ⚡ {remaining} validations remaining today

            </div>

            {/* Step 1 */}

            <h3 className="step-title">

                STEP 1 — TYPE YOUR RAW IDEA (ANY LANGUAGE)

            </h3>

            <textarea
                className="idea-box"
                placeholder="Describe your startup idea..."
                value={idea}
                onChange={(e) => setIdea(e.target.value)}
            />

            {/* Enhance Button */}

            <button
                className="validate-btn"
                onClick={handleEnhance}
                disabled={enhancing}
            >

                {
                    enhancing
                        ? "Enhancing..."
                        : "✨ Enhance My Idea"
                }

            </button>

            {/* Step 2 */}

            <h3 className="step-title">

                STEP 2 — AI ENHANCED STARTUP IDEA

            </h3>

            <textarea
                className="idea-box"
                placeholder="Your AI enhanced startup idea will appear here..."
                value={enhancedIdea}
                onChange={(e) => setEnhancedIdea(e.target.value)}
            />

            {/* Validate Button */}

            <button
                className="validate-btn"
                onClick={handleValidate}
                disabled={loading}
            >

                {
                    loading
                        ? "Analyzing..."
                        : "🚀 Validate My Idea"
                }

            </button>

        </div>

    );

}

export default ValidationForm;