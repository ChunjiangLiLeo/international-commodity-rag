export const metadata = {
  title: "国际商品平替搜索引擎",
  description: "智能推荐更便宜、更近的国际商品平替来源",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh">
      <body style={{ margin: 0, fontFamily: "sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
