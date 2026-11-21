/* Events shown in the calendar (sample data taken from the Figma designs).
   Add or edit entries here; the calendar, filters and upcoming lists update automatically.
   date: YYYY-MM-DD, org: key from KV_ORGS, category: free text used by the Category filter. */
window.KV_ORGS = {
  vbl:   { name: "VrouwenBuurtLab Laak", badge: "assets/img/home/event-dot-pink.svg", color: "#dd5c90", route: "org-vbl" },
  eva:   { name: "Coöperatie Eva",       badge: "assets/img/home/event-dot-2.svg",    color: "#ccce37", route: "organizations" },
  reva:  { name: "ReVa Moeders",         badge: "assets/img/home/event-dot-3.svg",    color: "#c8a2f0", route: "org-reva" },
  amal:  { name: "Amal Coaching",        color: "#4bb8c8", route: "organizations" },
  polka: { name: "Stichting POLKA",      color: "#f5a93a", route: "organizations" },
  klup:  { name: "Stichting de Talenten ”klup”", color: "#8f6bd8", route: "organizations" },
  wijkz: { name: "Wijkz",                color: "#5d9c59", route: "organizations" }
};

window.KV_EVENTS = [
  { date: "2026-01-01", title: "New Years Celebration", org: "vbl",  category: "Celebration" },
  { date: "2026-01-02", title: "Cooking Lessons",       org: "vbl",  category: "Food" },
  { date: "2026-01-02", title: "New Years Get Together", org: "eva", category: "Celebration" },
  { date: "2026-01-02", title: "Potluck",               org: "reva", category: "Food" },
  { date: "2026-01-05", title: "Painting Activity",     org: "vbl",  category: "Creative" },
  { date: "2026-01-06", title: "Zumba",                 org: "vbl",  category: "Sport" }
];

/* Month the calendar opens on (the designs show January 2026). Set to null to open on the current month. */
window.KV_CALENDAR_START = "2026-01";
