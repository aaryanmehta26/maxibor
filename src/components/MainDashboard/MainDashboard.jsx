"use client";
import React, { useState, useEffect } from "react";
import { Gauge, TrendingUp, MapPin, Loader2 } from "lucide-react";
import MethanePrediction from "../../../public/MethanePrediction.png";
import "./MainDashboard.css"; // Import our normal CSS

const App = () => {
  const dashboardData = {
    totalMines: 156,
    carbonCredits: 42000,
    methaneReduction: "12,500 tonnes/yr",
  };

  const powerBiEmbedUrl =
    "https://app.powerbi.com/reportEmbed?reportId=29902af0-8c2b-455e-8490-df132a72f75d&autoAuth=true&ctid=66e44254-c0ce-4745-9255-907eee03faf6";

  const gradioLink = process.env.NEXT_PUBLIC_GRADIO_URL;

  console.log("$$$$$", gradioLink);
  console.log("$$$$$ 33", powerBiEmbedUrl);

  const [isMapLoading, setIsMapLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsMapLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app-container">
      <div
        className="background"
        style={{
          backgroundImage: `url('https://media.licdn.com/dms/image/v2/C560BAQF3RwqTkj2BVQ/company-logo_200_200/company-logo_200_200/0/1630640400004/maxibor_australia_logo?e=2147483647&v=beta&t=wCQ12ylX46Q572QGNHTSfjD7kYLhZew3AGMMQ4quQVc')`,
        }}
      >
        <div className="background-overlay"></div>
      </div>

      <div className="content">
        <header>
          <h1>Methane Minter</h1>
          <p>
            Visualizing emissions data and mitigation progress from HDD coal
            mine operations.
          </p>
        </header>

        <div className="dashboard-grid">
          {/* Interactive Dashboard */}
          <a
            className="card block cursor-pointer"
            href={powerBiEmbedUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="card-header">
              <TrendingUp color="#4ade80" size={32} />
              <h2>Interactive Dashboard</h2>
            </div>
            <div className="card-content">
              <iframe
                title="Methane Dashboard"
                className="w-full h-full"
                src={powerBiEmbedUrl}
                allowFullScreen
                style={{ pointerEvents: "none" }}
              ></iframe>
            </div>
            <p style={{ color: "#d1d5db", fontSize: "0.875rem" }}>
              Interactive Power BI dashboard for historical methane emission
              data.
            </p>
          </a>

          {/* Methane Trends */}
          <a
            className="card block cursor-pointer"
            href={gradioLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="card-header">
              <TrendingUp color="#4ade80" size={32} />
              <h2>Methane Emission Trends</h2>
            </div>
            <div className="card-content">
              <img
                src={MethanePrediction.src}
                alt="Methane Emission Trends"
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </div>
            <p style={{ color: "#d1d5db", fontSize: "0.875rem" }}>
              Predictive analytics on historical methane emission data.
            </p>
          </a>

          {/* Carbon Credits */}
          <div className="card" style={{ textAlign: "center" }}>
            <div className="card-header" style={{ justifyContent: "center" }}>
              <Gauge color="#60a5fa" size={32} />
              <h2>Carbon Credits Earned</h2>
            </div>
            <div>
              <div className="card-number">{dashboardData.carbonCredits}</div>
              <div className="card-label">Credits</div>
            </div>
            <p style={{ color: "#d1d5db", fontSize: "0.875rem" }}>
              Real-time calculation of carbon credits based on mitigated
              emissions.
            </p>
          </div>

          {/* Map */}
          <div className="card">
            <div className="card-header">
              <MapPin color="#f87171" size={32} />
              <h2>Coal Mines Using HDD</h2>
            </div>
            <div className="card-content">
              {isMapLoading ? (
                <div style={{ textAlign: "center", color: "white" }}>
                  <Loader2 className="animate-spin" color="#f87171" size={40} />
                  <p>Loading Map...</p>
                </div>
              ) : (
                <img
                  src="https://placehold.co/600x400/1e293b/a5b4fc?text=Interactive+Map"
                  alt="Map"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              )}
            </div>
            <p style={{ color: "#d1d5db", fontSize: "0.875rem" }}>
              An interactive map highlighting all mines with active HDD
              projects.
            </p>
          </div>
        </div>
      </div>

      <footer>&copy; 2025 Maxibor Technologies. All rights reserved.</footer>
    </div>
  );
};

export default App;
