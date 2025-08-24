# 📊 Sales Dashboard – Frontend Assessment

This project is built as part of the **Frontend Assessment**.  
It is a **Sales Dashboard** application developed using **Next.js 15, React 18, TailwindCSS, and Recharts**.  

The app provides:
- An interactive **Dashboard** page to visualize sales data.
- A **Reports** page to export/download sales reports as PDF.
- A clean, responsive UI that works across devices.

---

## ✅ Requirements & How They Are Met

### 1. Framework
- **Requirement:** Use a modern frontend framework like React or Next.js.  
- **Implemented:** Built with **Next.js 15 (App Router)** + React 18.

### 2. Pages
- **Requirement:** At least 2–3 functional pages (e.g., dashboard, reports).  
- **Implemented:**  
  - `/` → Home page (intro + navigation)  
  - `/dashboard` → Interactive charts (sales trends)  
  - `/reports` → Report generation + PDF download  

### 3. Data Handling
- **Requirement:** Fetch & display data (mock/static API allowed).  
- **Implemented:**  
  - Sales data is served from **`/api/sales`** (mock API).  
  - Dashboard consumes this API and visualizes it using **Recharts**.

### 4. Visualizations
- **Requirement:** Use charts/graphs to display sales data.  
- **Implemented:**  
  - **BarChart** (Recharts) shows yearly sales.  
  - Responsive design with tooltips and grid.

### 5. Styling
- **Requirement:** Modern UI design with styling framework.  
- **Implemented:**  
  - **TailwindCSS** for responsive styling.  
  - Shared `layout.tsx` with navbar for navigation.

### 6. Reports
- **Requirement:** Provide a way to export/download reports.  
- **Implemented:**  
  - `/reports` page allows **PDF download** (using `jspdf` + `jspdf-autotable`).  

### 7. Deployment
- **Requirement:** Deploy on a hosting platform (e.g., Vercel/Render).  
- **Implemented:**  
  - Deployed on **Vercel** → [Live Demo](https://sales-dashboard-git-main-vuppu-thanu-srees-projects.vercel.app)

---

## 🚀 Installation & Setup

1. Clone the repository
   ```bash
   git clone https://github.com/Thanu-sys/Sales_Dashboard-.git
   cd Sales_Dashboard-
