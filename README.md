# 🚗 CarLoader Component (React + TypeScript)

A sleek, animated car-based loading indicator component for modern web apps. Built with **React** and **TypeScript**, and styled using custom responsive **CSS**. Includes smooth animation, centered overlay, and fallback image handling.

---

## 🎯 Features

- 🚙 Animated loader with spinning dash effect
- ⏱️ Optional delay before showing (default: 5s)
- 🌐 Responsive and centered using `custom.css`
- 🎨 Fully customizable via image and CSS variables
- ⚙️ Toggle demo included in App.tsx

---

## 🚀 How to Run

```bash
git clone <your-repo-url>
cd car-loader-app
npm install
npm start
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🧪 Usage Example

```tsx
import CarLoader from './CarLoader';

<CarLoader show={true} />
```

---

## 📁 Project Structure

```
car-loader-app/
├── public/
│   ├── index.html
│   ├── custom.css
│   └── images/
│       └── i.png             # animated dash icon
├── src/
│   ├── CarLoader.tsx         # main component
│   ├── App.tsx               # demo usage
│   └── index.tsx
├── tsconfig.json
├── package.json
└── README.md
```

---

## 🖼️ Customization

- Replace `public/images/i.png` with your own loader icon
- Adjust animation delay inside `CarLoader.tsx`
- Update styles in `custom.css` under `.carLoading`, `.dash`, and `.waitMessage`

---

## ❤️ Credits

Built with care for responsive UIs.  
Feel free to fork, improve, or integrate in your own projects!

---

> Designed with simplicity, animated with love 🚗✨
