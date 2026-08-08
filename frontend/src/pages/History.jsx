import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/History.css";
import Navbar from "../components/Navbar";
import { AuthContext } from "../context/AuthContext";

import {
  getHistory,
  deleteValidation,
  downloadReport,
} from "../services/validationService";

function History() {
  const [history, setHistory] = useState([]);

  const { token } = useContext(AuthContext);

  const navigate = useNavigate();

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    try {
      const response = await getHistory(token);

      setHistory(response.data);
    } catch (error) {
      alert(error.response?.data?.message || "Failed to fetch history");
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this validation?"
    );

    if (!confirmDelete) return;

    try {
      await deleteValidation(id, token);

      alert("Validation Deleted Successfully");

      fetchHistory();
    } catch (error) {
      alert(error.response?.data?.message || "Delete Failed");
    }
  };

  const handleDownload = async (id) => {
    try {
      const response = await downloadReport(id, token);

      const url = window.URL.createObjectURL(
        new Blob([response.data])
      );

      const link = document.createElement("a");

      link.href = url;

      link.download = "startup-report.pdf";

      document.body.appendChild(link);

      link.click();

      link.remove();

      window.URL.revokeObjectURL(url);

    } catch (error) {
      alert("PDF Download Failed");
    }
  };

  return (
    <>
        <Navbar />

        <div className="history-container">

            <h1 className="history-title">
                📜 Startup Validation History
            </h1>

            {history.length === 0 ? (

                <div className="empty-history">

                    <h2>No Validation History Found.</h2>

                    <button
                        className="back-btn"
                        onClick={() => navigate("/")}
                    >
                        ⬅ Back To Dashboard
                    </button>

                </div>

            ) : (

                <>
                    <div className="history-list">

                        {history.map((item) => (

                            <div
                                className="history-card"
                                key={item._id}
                            >

                                <h2 className="history-idea">
                                    💡 {item.idea}
                                </h2>

                                <p className="history-date">
                                    📅 {new Date(item.createdAt).toLocaleString()}
                                </p>

                                <div className="history-buttons">

                                    <button
                                        className="history-btn view-btn"
                                        onClick={() =>
                                            navigate("/result", {
                                                state: {
                                                    investor: item.agents.investor,
                                                    customer: item.agents.customer,
                                                    competitor: item.agents.competitor,
                                                    verdict: item.verdict,
                                                    roadmap: item.roadmap,
                                                    validationId: item._id,
                                                },
                                            })
                                        }
                                    >
                                        👁 View Result
                                    </button>

                                    <button
                                        className="history-btn download-btn"
                                        onClick={() =>
                                            handleDownload(item._id)
                                        }
                                    >
                                        📄 Download PDF
                                    </button>

                                    <button
                                        className="history-btn delete-btn"
                                        onClick={() =>
                                            handleDelete(item._id)
                                        }
                                    >
                                        🗑 Delete
                                    </button>

                                </div>

                            </div>

                        ))}

                    </div>

                    <button
                        className="back-btn"
                        onClick={() => navigate("/")}
                    >
                        ⬅ Back To Dashboard
                    </button>
                </>

            )}

        </div>
    </>
);
}

export default History;