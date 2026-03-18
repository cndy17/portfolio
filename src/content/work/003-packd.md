---
order: 3
title: "Packd"
subtitle: "Real-time gym capacity tracker with live data visualization"
year: 2023
stack: ["SQL", "Database Design", "UML"]
tags: ["Database", "Real-time", "Data viz"]
cursorLabel: "PACKD"
heroImage: "/assets/screenshots/packd/main.png"
---

A database-backed website to input, store, and analyze gym capacity data with real-time visualization. Fully normalized relational database schema with complete UML documentation.

## The problem

Campus gym capacity was invisible. Students showed up, the gym was packed, they left. No data, no planning.

## What I built

Gym staff input headcount data throughout the day. The database stores and normalizes it; the frontend visualizes current and historical trends. See that Tuesday at 5pm is always packed, 7am is always empty.

## Database design

Full entity-relationship diagram, normalized to 3NF. SQL for reliability and query flexibility. Raw count data is separated from derived analytics so historical records are never overwritten.
