---
order: 4
title: "Retirement Plan Monte Carlo Analysis"
subtitle: "Comparing retirement plans using simulation and historical API data"
year: 2023
stack: ["Python", "Monte Carlo simulation", "Financial APIs"]
tags: ["Python", "Finance", "Simulation"]
cursorLabel: "MONTE CARLO"
heroImage: "/assets/screenshots/montecarlo/main.webp"
---

A comparison of retirement savings plans — 401k, Traditional IRA, and Roth IRA — using Monte Carlo simulation and historical market data via APIs. Simulates thousands of market trajectories to model probability distributions of retirement outcomes.

## Approach

Rather than assuming a fixed rate of return, Monte Carlo samples from historical market distributions to model the full range of possible outcomes. Run it 10,000 times and you get a realistic picture of best case, worst case, and everything between.

## What it shows

Roth IRA tax treatment benefits younger investors most. 401k matching is free money that dominates all other variables. Sequence-of-returns risk matters far more than average annual return.
