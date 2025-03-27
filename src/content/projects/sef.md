---
title: Allsvenskan Live
description: An effort to coalesce match stats for the Swedish football league into a single source of truth.
featured: 4
image: images/sef.png
tech:
  - React Native
  - Expo
  - GraphQL
  - Firebase Functions
  - Firebase Firestore
  - Express
---

Have you ever wondered, where match statistics like assists, shots on goal and offide count come from?

Well, there are people sitting in the audience, watching the game and repoting these stats to a central system. The problem is that there are several different systems and humans make mistakes, so the stats reported by different people can differ quite a lot.

Q: _But, why does this matter?_  
A: **Betting** 💰

The Swedish football league aimd to solve that problem by providing a single source of truth for match statistics.

This was accomplished by subscribing to the different data sources, weighting and comparing each data point and storing the most likely value in a database. The data was then exposed through GraphQL, and webhooks.

Regular fans could also access the data through a mobile app with features like live updates, match and player stats, instant replays and more.

The project was built by a small team in Malmö, with close coorination with the Swedish football league based in Stockholm. My role was to do a bit of everything, from development to data analysis and product management.
