/* Events shown in the calendar (sample content taken from the Figma designs).
   Add or edit entries here; the calendar, filters and upcoming lists update automatically.
   date: YYYY-MM-DD for a one-off event, or weekly: 0 (Monday) … 6 (Sunday) for a weekly activity.
   org: key from KV_ORGS. category: used by the calendar's Category filter. */
window.KV_ORGS = {
  vbl:   { name: "VrouwenBuurtLab Laak", badge: "assets/img/home/event-dot-pink.svg", color: "#dd5c90", route: "org-vbl" },
  eva:   { name: "Coöperatie Eva",       badge: "assets/img/home/event-dot-2.svg",    color: "#ccce37", route: "organizations" },
  reva:  { name: "ReVa Moeders",         badge: "assets/img/home/event-dot-3.svg",    color: "#c8a2f0", route: "org-reva" }
};

var VAN_MEURS = "Van Meursstraat 1, Den Haag";

window.KV_EVENTS = [
  // Weekly activities (Events page)
  { weekly: 0, title: "Painting Club", org: "vbl", category: "Culture", time: "12:00 - 14:00", location: VAN_MEURS, description: "Painting together with Sadaf. No experience needed." },
  { weekly: 1, title: "Crochet & Knitting", org: "vbl", category: "Courses", time: "12:00 - 14:00", location: VAN_MEURS },
  { weekly: 2, title: "Sewing", org: "vbl", category: "Courses", time: "9:30 - 11:30", location: VAN_MEURS },
  { weekly: 3, title: "Zumba", org: "vbl", category: "Activities", time: "12:00 - 14:00", location: VAN_MEURS },

  // One-off events (Home page calendar and Events page)
  { date: "2026-01-01", title: "New Years Celebration", org: "vbl",  category: "Activities" },
  { date: "2026-01-02", title: "Cooking Lessons",       org: "vbl",  category: "Courses" },
  { date: "2026-01-02", title: "New Years Get Together", org: "eva", category: "Activities" },
  { date: "2026-01-02", title: "Potluck",               org: "reva", category: "Culture" },
  { date: "2026-01-05", title: "Painting Activity",     org: "vbl",  category: "Culture" },
  { date: "2026-01-06", title: "Zumba",                 org: "vbl",  category: "Activities" },
  { date: "2026-11-30", title: "Communal Meal",         org: "vbl",  category: "Activities", time: "17:00 - 19:00", location: VAN_MEURS },
  { date: "2026-12-14", title: "Turns Pink",            org: "vbl",  category: "Advice", time: "16:00 - 18:00", location: VAN_MEURS, description: "We come together for breast cancer month to share our knowledge and experiences on the topic." }
];

/* Month the calendar opens on, e.g. "2026-01" (the month shown in the designs). null = the current month. */
window.KV_CALENDAR_START = null;
