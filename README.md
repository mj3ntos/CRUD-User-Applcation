CRUD User Application
Projekt ma na celu Integrację React.js z Express a Express z bazą danych w tym przypadku mongodb

Instalujemy react react-dom react-router i node
Tworzymy projekt React.js poprzez komendę
`npm create-react-app frontend`

W środku folderu frontend tworzymy folder `backend`
przechodzimy do niego i w komsoli wpisujemy
`npm init`

Instalujemy niezbędne rzeczy poprzez
`npm i express nodemon mongoose`

w pliku `package.json` w `scrpits` `start` wpisujemy
`nodemon index.js`

W `models.js` tworzymy schemat naszych danych
exportujemy dane do bazy danych
pierwszym argumentem jest nazwa tabeli czyli `users`, a drugim `template` czyli nasz szkielet danych.

W `routes.js` tworzymy endpionty CRUD


Łączymy sie z bazą danych w `index.js`
tworzymy plik `.env` importujemy go, a w nim wpisujemy 
`DATABASE_ACCESS =` wklejamy linke z mongodb
i pola <username> i <password> wpisujemy uzytkownika stworzonego w mongodb,
a w <dbname> nazwę naszej tabeli czyli `users`



A w folderze `frontend` instalujemy
`npm i axios @material-ui/core`
MUI versja 4

W `app.jsx` importujemy router i tworzymy odowłania do poszczególnych scieżek

Po połączeniu Frontendu z Backendem i Backendu z Bazą uruchamiamy projekty poprzez
`npm start` zarówno w folderze `frontend` jak i `backend`




Schemat wyglądu ze strony material ui
`https://github.com/mui-org/material-ui/tree/v4.x/docs/src/pages/getting-started/templates/album`
