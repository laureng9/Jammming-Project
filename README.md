# JAMMMING

This project is a React Web Application

## Table of Contents

1. [The Purpose](#the-purpose)
2. [Technologies Used](#technologies-used)
3. [Features](#features)
4. [Display](#display)
5. [Future Work](#future-work)
6. [Testing](#testing)

## The Purpose

The purpose of this project was to demonstrate knowledge of React components, passing state and requests with the Spotify API to build a website which will allow users to search the Spotify library, create a custom playlist and save it to their personal Spotify account.

## Technologies Used

- HTML
- CSS
- JavaScript
- React
- HTTP Request and Response
- Authentication
- Spotify API
- Git
- Netlify

## Features

- Users can search for songs
- Users can see information about each song, like title, artist and album
- Users can export their custom playlist to their personal Spotify account

## Display

**Jammming Website Preview**

![Jammming Website Snapshot](images\App_Display.png)

- [Source of background image used for Jammming Website](https://hdqwalls.com/wallpaper/1440x900/mask-boy-listening-music-neon-4k)

## Future Work

- Add album cover to songs
- Display year of song/ album
- Filter search by year / genre
- Play preview button for each track will allow users to hear selected song of choice

## Testing

Manual testing used for the below test cases.

**Icons used to state outcome of test cases**

- ✅ - Passed Test

### Test Case 1: Verify search bar input accepts text and button fetches data from Spotify

**Expected Results**

- Typed text displays in search bar. ✅
- Search icon fetches data typed in search bar from Spotify when clicked. ✅

### Test Case 2: Verify tracks display in search results

**Expected Results**

- When search button is clicked in search bar, the data fetched displays in search results relating to text typed in the search bar. ✅
- Information displayed for each track shows title of song, artist and album. ✅

### Test Case 3: Verify adding track to custom playlist

**Expected Results**

- Clicking the + button in search results adds a new track to custom playlist. ✅
- Able to add numerous tracks to custom playlist. ✅

### Test Case 4: Verify removing track from custom playlist

**Expected Results**

- Clicking the - button on custom playlist removes track. ✅
- Able to remove numerous tracks until there are no more tracks in custom playlist.✅

### Test Case 5: Verify scroll bar on App-playlists is enabled to display more tracks to users

**Expected Results**

- When numerous tracks display in Search Results or Custom Playlist, a hidden scrollbar on the right side of Search Results & Custom Playlist is used to view more tracks. ✅

### Test Case 6: Verify custom playlist name is editable

**Expected Results**

- When playlist name is clicked, it is edited by typing text to create new name for custom playlist. ✅
- New name of custom playlist saves, and it uploaded to Spotify when 'Save to Spotify' button is clicked.✅

### Test Case 7: Verify 'Save to Spotify' button saves custom playlist

**Expected Results**

- Clicking the 'Save to Spotify' button saves custom playlist to personal Spotify Account. ✅
- Alert pops up on screen to say custom playlist was successfully saved. ✅

**Condition**

- Custom Playlist will not save to Spotify if playlist has not been given a name. An alert will pop up informing user that playlist was not saved.
