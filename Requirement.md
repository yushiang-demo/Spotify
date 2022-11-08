## Requirement

-  Setup
    - [X] nextjs + react
    - [X] redux
    - [X] redux-saga
    - [X] eslint
    - [X] styled-components
    - [X] next-i18next
    - [X] documents

- CSS Layouts
    - [X] Header
    - [X] Banner
    - [X] Musics
    - [X] Categories
    - [X] Why us
    - [X] Plan
    - [X] User experience
    - [X] Footer
    - [X] Error/Loading

- Functions
    - [X] Spotify API
    - [X] Show categories
    - [X] Show musics
    - [X] Change category
    - [X] Music preview
    - [X] Dribbble cover

## Gantt

```mermaid
gantt
    title  
    dateFormat  YYYY-MM-DD
    excludes Sunday, Saturday
    section Setup
    project setup   :a1, 2022-11-01, 1d

    section Functions
        Spotify API         :c1, 2022-11-01  , 1d

        Show categories             :c2, after c1  , 1d
        Show musics                 :c3, after c2  , 1d
        Change category             :c6, after c2  , 1d
        Music preview               :c4, after b3  , 1d
        Dribbble cover              :c5, after b3  , 1d

    section CSS Layouts
        Why us                              :b1, after c1  , 1d
        Plan                                :b4, after c1  , 1d
        Categories                  :b5, after c1  , 1d
        Banner                                  :b2, after b1  , 1d
        Musics                       :b6, after b1  , 1d
        Header                                      :b3, after b2  , 1d
        Footer                                      :b7, after b2  , 1d
        User experience                             :b8, after b2  , 1d
        Error/Loading                               :b9, after b3  , 1d


    section enhance
    debug               :d1, after c5  , 3d

```
