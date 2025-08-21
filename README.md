# React.js Developer Assessment Task

---

## Table of Contents

* [Setup Instructions](#setup-instructions)
* [Architecture / Approach](#architecture--approach)
* [Time Spent](#time-spent)
* [Known Limitations](#known-limitations)

---

## Setup Instructions

1. **Clone the repository**

```bash
git clone <repository-url>
cd novasoft
```

2. **Install dependencies**

```bash
npm install
```

3. **Run the application**

```bash
npm start
```

4. **Open in browser**
   The app will run at [http://localhost:3000](http://localhost:3000)

---

## Architecture / Approach

* **Frontend:** React.js with Bootstrap and React-Bootstrap components.
* **State Management:** React `useState` and `useEffect` hooks.
* **API Calls:** Axios for fetching transaction history and other data.
* **Modals & Alerts:** SweetAlert2 for loading and alert popups.
* **Component Structure:**

  * `Header` – Navbar-style header with logo and profile info.
  * `Dashboard` – Displays collections, settlements, and stats.
  * `Modal` – Multiple modals created for pages.
* **Styling:** Inline styles for small tweaks; CSS classes for layout and responsive design.

**Approach Highlights:**

* Used `useEffect` for API calls and loading states.
* SweetAlert2 for async loading indicators and error handling.
* Flexbox (`d-flex`, `justify-content-between`) for layout instead of excessive `Row/Col`.

---

## Time Spent

* Estimated total development time: **6 hours and 30 minutes**
* Includes frontend, API integration, and styling.

---

## Known Limitations

* Backend responses may be delayed; handled with loading popup.
* Mobile responsiveness may need further testing for smaller screens.
* Some UI components use inline styles, which could be refactored into CSS modules.
* Pagination handling is basic; advanced error handling for network failures not fully implemented.
