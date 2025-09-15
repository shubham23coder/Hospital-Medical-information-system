// import express from "express";
// import cors from "cors";
// import "dotenv/config";
// import connectDB from "./config/mongodb.js";
// import connectCloudinary from "./config/cloudinary.js";
// import adminRouter from "./routes/adminRoute.js";
// import doctorRouter from "./routes/doctorRoute.js";
// import userRouter from "./routes/userRoute.js";
// import path from "path"

// //app config
// const app = express();
// const port = process.env.PORT || 4000;
// connectDB();
// connectCloudinary();

// const __dirname = path.resolve();

// // middlewares
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cors());

// // api endpoint

// app.use("/api/admin", adminRouter);
// app.use("/api/doctor", doctorRouter);
// app.use("/api/user", userRouter);

// app.get("/", (req, res) => {
//   res.send("api working");
// });


// app.use(express.static([
//   path.join(__dirname, "frontend/dist"),
//   path.join(__dirname, "admin/dist")
// ]));

// // For frontend
// app.get("*", (req, res, next) => {
//   if (req.path.startsWith("/admin")) {
//     return next(); // skip, so admin handler handle kare
//   }
//   res.sendFile(path.join(__dirname, "frontend/dist", "index.html"));
// });

// // For admin
// app.get("/admin/*", (req, res) => {
//   res.sendFile(path.join(__dirname, "admin/dist", "index.html"));
// });


// app.listen(port, () => {
//   console.log("Server started", port);
// });























// import express from "express";
// import cors from "cors";
// import "dotenv/config";
// import connectDB from "./config/mongodb.js";
// import connectCloudinary from "./config/cloudinary.js";
// import adminRouter from "./routes/adminRoute.js";
// import doctorRouter from "./routes/doctorRoute.js";
// import userRouter from "./routes/userRoute.js";
// import path from "path";

// const app = express();
// const port = process.env.PORT || 4000;
// connectDB();
// connectCloudinary();

// const __dirname = path.resolve();

// // middlewares
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cors());

// // api endpoints
// app.use("/api/admin", adminRouter);
// app.use("/api/doctor", doctorRouter);
// app.use("/api/user", userRouter);

// // ✅ Testing route (shifted)
// app.get("/api", (req, res) => {
//   res.send("api working");
// });

// // ✅ Serve frontend
// app.use(express.static(path.join(__dirname, "frontend/dist")));

// // ✅ Serve admin (mounted on /admin)
// app.use("/admin", express.static(path.join(__dirname, "admin/dist")));

// // For frontend (SPA routing support)
// app.get("*", (req, res, next) => {
//   if (req.path.startsWith("/admin")) {
//     return next(); // admin ke liye skip kar do
//   }
//   res.sendFile(path.join(__dirname, "frontend/dist", "index.html"));
// });

// // For admin (SPA routing support)
// app.get("/admin/*", (req, res) => {
//   res.sendFile(path.join(__dirname, "admin/dist", "index.html"));
// });

// app.listen(port, () => {
//   console.log("Server started on port", port);
// });



























import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import adminRouter from "./routes/adminRoute.js";
import doctorRouter from "./routes/doctorRoute.js";
import userRouter from "./routes/userRoute.js";
import path from "path";

const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();

const __dirname = path.resolve();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ CORS setup
const corsOption = {
  origin:"https://doctorallotment.onrender.com",
  // origin: "http://localhost:5173",
  credentials: true,
  method: "GET POST DELETE PUT",
};

// Middleware
app.use(cors(corsOption));

// ✅ API Routes
app.use("/api/admin", adminRouter);
app.use("/api/doctor", doctorRouter);
app.use("/api/user", userRouter);

// ✅ Test route
app.get("/api", (req, res) => {
  res.send("API is working");
});

// ✅ Serve frontend
app.use(express.static(path.join(__dirname, "frontend/dist")));

// ✅ Serve admin
app.use("/admin", express.static(path.join(__dirname, "admin/dist")));

// ✅ Frontend SPA routing
app.get("*", (req, res, next) => {
  if (req.path.startsWith("/admin")) return next();
  res.sendFile(path.join(__dirname, "frontend/dist", "index.html"));
});

// ✅ Admin SPA routing
app.get("/admin/*", (req, res) => {
  res.sendFile(path.join(__dirname, "admin/dist", "index.html"));
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
