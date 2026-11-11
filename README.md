![Boolean Tech Academy](https://img.shields.io/badge/Boolean_Tech_Academy-001632?style=for-the-badge)

# 🎓 Exercise 41/50 - BoolFlix

A Netflix-inspired movie and TV series search application built with React and The Movie Database (TMDB) API. Users can search for titles, explore results and view detailed information through interactive cards.

## 📌 Project Overview

| Property | Details |
|:--|:--|
| Repository | `react-boolflix` |
| Category | Boolean Tech Academy |
| Type | Exercise |
| Exercise | 41/50 |

## 🎯 Assignment

Build a movie and TV series search application using **[The Movie Database (TMDB)](https://www.themoviedb.org/)** API.

### API Setup

1. Create a free account on [TMDB](https://www.themoviedb.org/).
2. Request an API key from **Settings → API → Request a new API key**.
3. Use your API key to authenticate all API requests.

Refer to the [TMDB API documentation](https://developers.themoviedb.org/3) for available endpoints.

The main endpoint for this exercise is **Search Movies**:

`https://api.themoviedb.org/3/search/movie`

Pass the `query` and `api_key` parameters to retrieve matching movies. You can also use `language=it-IT` to request results in Italian.

### Milestone 1 - Movie Search

Create a basic layout with a search bar containing an input field and a button.

- Allow users to enter a complete or partial movie title.
- When the button is clicked, search the TMDB API for matching movies.
- Display the following information for each result:
  - Title
  - Original title
  - Language
  - Rating

### Milestone 2 - Flags and TV Series

Improve the search results and extend the search functionality.

- Replace the language code with the corresponding national flag.
- Handle cases where a flag is unavailable.
- Extend the search to include TV series alongside movies.
- Use the same search action to retrieve both movies and TV series.
- Normalize the API responses into a consistent data structure, accounting for differences between movie and TV series properties.

TV series endpoint:

`https://api.themoviedb.org/3/search/tv`

### Milestone 3 - Posters and Star Ratings

Enhance the results by displaying posters and converting numerical ratings into visual star ratings.

**Posters:**

- Retrieve the image path provided by the API.
- Build the complete image URL using TMDB's base image URL: `https://image.tmdb.org/t/p/`
- Append the desired image size and the image path returned by the API.
- Use `w342` as the recommended poster size.

Example:

`https://image.tmdb.org/t/p/w342/wwemzKWzjKYJFfCeiB57q3r4Bcm.png`

**Star ratings:**

- Convert the original rating (decimal value from 1 to 10) into an integer rating from 1 to 5.
- Always round up to the next integer.
- Display full and empty stars using Font Awesome icons.
- Do not implement half-filled stars.

### Milestone 4 - Netflix-Inspired Web App

Transform the application into a complete web experience inspired by Netflix.

**Header:**
- Create a header containing the application logo and search bar.

**Search Results:**
- Display search results as cards.
- Use the movie or TV series poster as the card background.
- Prefer the `poster_path` image with the `w342` size.

**Hover Interaction:**
- When the user hovers over a card, display additional information:
  - Title
  - Original title
  - Language and flag
  - Rating and star icons
  - Overview

### Optional Milestone 5 - Cast and Genres

Retrieve additional information about each movie or TV series.

- Fetch the cast associated with each title.
- Display only the first five cast members returned by the API, including their first and last names.
- Retrieve and display the genres associated with each title, using the following format:

`Genre 1, Genre 2, ...`

### Optional Milestone 6 - Genre Filters

Add genre-based filtering functionality.

- Retrieve the available movie and TV series genres from the API.
- Create separate filters for movie and TV genres.
- Allow users to show or hide search results based on the selected genres.

## 💡 Development Guidelines

Follow the milestones in order and focus on functionality before styling.

- Start with the simplest working solution. Avoid handling edge cases before completing the basic functionality.
- Do not focus on the visual design until Milestone 4. A simple, unstyled `<ul>` is enough for the first steps.
- Avoid duplicating code: create reusable functions instead of copying and pasting.
- Keep the code clean, concise and easy to maintain before moving on to the next milestone.
- It is better to complete fewer milestones with well-written code than to rush through all of them.

**Useful reference:** [List of ISO 639-1 language codes](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes).

**Note:** Milestones 5 and 6 are optional extensions and can be tackled after completing the first four milestones.

## 🛠️ Technologies
![CSS](https://img.shields.io/badge/CSS-1572B6?style=flat-square&logo=css&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black) ![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black) ![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)

## 💡 What I Learned

- Integrating external APIs into a React application.
- Managing API keys and request parameters.
- Implementing movie and TV series searches.
- Handling and normalizing different API response structures.
- Managing asynchronous requests and API data.
- Working with image URLs and dynamic image sizes.
- Converting numerical ratings into visual representations.
- Rendering dynamic content through reusable components.
- Implementing interactive card layouts and hover effects.
- Filtering results using categories and genres.

## ©️ Credits

Exercise assigned by **Boolean Tech Academy** as part of the Web Development course - Class 152 - Year 2025-2026
