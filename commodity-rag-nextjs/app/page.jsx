"use client";
import React, { useState } from "react";

export default function Page() {
  const [description, setDescription] = useState("");
  const [country, setCountry] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    setTimeout(() => {
      setResults([
        {
          country: "Vietnam",
          price: "$2.10",
          pros: ["Lower cost", "Shorter shipping distance"],
          cons: ["Longer production time"]
        },
        {
          country: "India",
          price: "$2.30",
          pros: ["Reliable supply", "Familiar production standards"],
          cons: ["Slightly higher cost"]
        }
      ]);
      setLoading(false);
    }, 1000);
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>国际商品平替搜索引擎</h1>

      <textarea
        placeholder="请输入商品描述（如：PVC塑料管，3米，耐腐蚀）"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        rows={4}
        style={{ width: "100%", marginTop: "1rem", padding: "0.5rem" }}
      />

      <input
        placeholder="可选：只查某个国家的平替（如 China、Vietnam）"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        style={{ width: "100%", marginTop: "1rem", padding: "0.5rem" }}
      />

      <button
        onClick={handleSearch}
        disabled={loading}
        style={{
          marginTop: "1rem",
          padding: "0.75rem 1.5rem",
          backgroundColor: "#0070f3",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer"
        }}
      >
        {loading ? "搜索中..." : "开始搜索平替"}
      </button>

      {results.length > 0 && (
        <div style={{ marginTop: "2rem" }}>
          {results.map((item, index) => (
            <div key={index} style={{ border: "1px solid #ccc", padding: "1rem", borderRadius: "8px", marginBottom: "1rem" }}>
              <h2 style={{ fontSize: "18px", fontWeight: "bold" }}>{item.country}</h2>
              <p>价格：{item.price}</p>
              <p>优点：{item.pros.join("，")}</p>
              <p>缺点：{item.cons.join("，")}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
