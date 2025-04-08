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
    <div style={{ padding: "2rem", maxWidth: "900px", margin: "0 auto", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ fontSize: "28px", fontWeight: "bold", marginBottom: "1rem", color: "#2c3e50" }}>
        🌍 国际商品平替搜索引擎
      </h1>

      <p style={{ marginBottom: "1rem", color: "#555" }}>
        输入你想查询的商品描述，我们将为你搜索来自不同国家的替代品。
      </p>

      <textarea
        placeholder="请输入商品描述（如：PVC塑料管，3米，耐腐蚀）"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        rows={4}
        style={{ width: "100%", marginBottom: "1rem", padding: "0.75rem", fontSize: "16px", border: "1px solid #ccc", borderRadius: "6px" }}
      />

      <input
        placeholder="可选：只查某个国家的平替（如 China、Vietnam）"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        style={{ width: "100%", marginBottom: "1rem", padding: "0.75rem", fontSize: "16px", border: "1px solid #ccc", borderRadius: "6px" }}
      />

      <button
        onClick={handleSearch}
        disabled={loading}
        style={{
          padding: "0.75rem 1.5rem",
          backgroundColor: loading ? "#ccc" : "#0070f3",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: loading ? "not-allowed" : "pointer",
          fontSize: "16px"
        }}
      >
        {loading ? "搜索中..." : "🔍 开始搜索平替"}
      </button>

      <hr style={{ margin: "2rem 0", borderTop: "1px solid #eee" }} />

      {results.length > 0 && (
        <div style={{ marginTop: "1rem" }}>
          <h2 style={{ fontSize: "22px", color: "#2c3e50", marginBottom: "1rem" }}>📦 替代商品推荐：</h2>
          {results.map((item, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#f9f9f9",
                border: "1px solid #ddd",
                padding: "1rem",
                borderRadius: "8px",
                marginBottom: "1rem",
                boxShadow: "0 2px 4px rgba(0,0,0,0.05)"
              }}
            >
              <h3 style={{ marginBottom: "0.5rem", color: "#0070f3" }}>🌐 国家：{item.country}</h3>
              <p><strong>💰 价格：</strong>{item.price}</p>
              <p><strong>✅ 优点：</strong>{item.pros.join("，")}</p>
              <p><strong>⚠️ 缺点：</strong>{item.cons.join("，")}</p>
            </div>
          ))}
        </div>
      )}

      <footer style={{ marginTop: "3rem", fontSize: "14px", color: "#999" }}>
        © 2025 国际商品平替项目. 由你赋能开发。
      </footer>
    </div>
  );
}