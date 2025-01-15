# Testowanie i Jakość Oprogramowania

##  Autor

Wiktor Warmuz 35243

## Temat Projektu

Gra Memory Card

## Opis projektu

Gra Memory Card zapewnia użytkownikom możliwość tworzenia swoich kont, co pozwala na śledzenie ich postępów i wyników. W grze istnieje funkcja tablicy wyników, umożliwiająca graczom porównywanie swoich osiągnięć z innymi użytkownikami. Głównym celem gry jest połączenie wszystkich par zwierząt, które zależą od wybranego poziomu trudności - od 5 do 7 par. Gracze muszą wykonać to zadanie w określonym czasie, co dodaje element rywalizacji i wyzwania. Istnieje możliwość dodawania nieskończonej liczby plansz, z których każda ma określony czas do ukończenia. Gracze mają ograniczoną liczbę żyć na każdym ekranie, co oznacza, że popełnienie zbyt wielu błędów może prowadzić do porażki. Menu główne gry oferuje losowe ciekawostki na temat różnych zwierząt, dodając element edukacyjny i zabawny. Zadaniem graczy jest nie tylko dopasowywanie par zwierząt, ale także zapamiętywanie ich lokalizacji na planszy. Gra rozwija umiejętność koncentracji, pamięci i szybkiego myślenia, co sprawia, że jest atrakcyjna dla graczy w różnym wieku. Memory Card to świetna rozrywka, która łączy elementy zabawy i nauki w fascynujący sposób.

## Uruchomienie projektu

1. Jeśli chcemy uruchomić aplikację przechodzimy do folderu głównego aplikacji i uruchamiamy skrypt: `start_app.bat`
2. Jeśli chcemy uruchomić testy aplikacji przzechodzimy do folderu głównego i uruchamiamy skrypt: `start_tests.bat`

## Testy

### GameComponent [kod](https://github.com/iZi1211/TiJO_Project/blob/main/src/app/components/game/game.component.spec.ts)

**Testy jednostkowe:**
<ul>
  <li>should initialize with default values and start game timer</li>
  <li>should call gameOver if all tiles are matched in non-infinite mode</li>
</ul>

**Testy integracyjne**
<ul>
  <li>should navigate to the score page when game is over</li>
</ul>

### LeaderboardComponent [kod](https://github.com/iZi1211/TiJO_Project/blob/main/src/app/components/leaderboard/leaderboard.component.spec.ts)

**Testy jednostkowe:**
<ul>
  <li>should parse ranking data correctly</li>
  <li>should ignore empty lines in ranking data</li>
  <li>should return an empty array if no valid ranking data</li>
</ul>

**Testy integracyjne**
<ul>
  <li>should check if user is logged in and fetch ranking if logged in</li>
  <li>should not fetch ranking if user is not logged in</li>
  <li>should fetch ranking successfully</li>
</ul>

### LoginComponent [kod](https://github.com/iZi1211/TiJO_Project/blob/main/src/app/components/login/login.component.spec.ts)

**Testy jednostkowe:**
<ul>
  <li>should create the component</li>
  <li>should show error message if username is missing</li>
  <li>should show error message if account activation fails</li>
</ul>

**Testy integracyjne**
<ul>
  <li>should show error message if login fails</li>
  <li>should navigate to activation screen if account is not activated</li>
  <li>should login successfully if account is activated</li>
  <li>should show error message if login fails due to server issue</li>
</ul>

### RegisterComponent [kod](https://github.com/iZi1211/TiJO_Project/blob/main/src/app/components/register/register.component.spec.ts)

**Testy jednostkowe:**
<ul>
  <li>should show an error message if the email format is invalid</li>
  <li>should show an error message if passwords do not match</li>
  <li>should show an error message if email field is missing</li>
</ul>

**Testy integracyjne**
<ul>
  <li>should show an error message when the username already exists</li>
  <li>should show a generic error message if registration fails</li>
  <li>should show an error message if there is an error in API response</li>
</ul>

### ScoreComponent [kod](https://github.com/iZi1211/TiJO_Project/blob/main/src/app/components/score/score.component.spec.ts)

**Testy jednostkowe:**
<ul>
  <li>should send the score to the database when ngOnInit is called</li>
  <li>should handle errors when sending the score to the database</li>
  <li>should navigate home after sending the score via email</li>
  <li>should use localStorage to get the username on init</li>
  <li>should call navigateHome() when navigation is triggered</li>
</ul>

**Testy integracyjne**
<ul>
  <li>should initialize the score from the router state</li>
</ul>

### ApiService [kod](https://github.com/iZi1211/TiJO_Project/blob/main/src/app/services/api.service.spec.ts)

**Testy jednostkowe:**
<ul>
  <li>should successfully communicate with the backend when fetching leaderboard data</li>
  <li>should return proper status when submitting score</li>
  <li>should send activation code and return success</li>
  <li>should return account activation status</li>
  <li>should handle error when sending activation code fails</li>
  <li>should handle error when sending score via email fails</li>
  <li>should log in successfully and return a token</li>
</ul>

**Testy integracyjne**
<ul>
  <li>should successfully communicate with the backend when fetching leaderboard data</li>
  <li>should return proper status when submitting score</li>
  <li>should return user activation status after checking with backend</li>
</ul>

## Dokumentacja API 
[**Kod API**](https://github.com/iZi1211/TiJO_Project/blob/main/API/milionerzy_api/src/main/java/api/MyApiApplication.java)

### Ranking

Zwraca 10 najleszych wyników <br>
**URL:** /ranking <br>
**Metoda**: GET <br>
**Przykład:** `/ranking` <br>
**Odpowiedź:** "username1/score1;username2/score2;..."

### Login

Odpowiada za logowanie użytkownika
**URL:** /login
**Metoda:** GET
**Parametry:** login, password
**Przykład:** `/login?login=test&password=secret`
**Odpowiedź:** true lub false

### Register

Odpowiada za rejestracje użytkownika
**URL:** /register
**Metoda:** POST
**Parametry:** login, password, mail
**Przykład:** `/register?login=test&password=secret&mail=test@example.com`
**Odpowiedź:** "420" dla poprawnej rejestracji, "69" jeśli użytkownik istnieje, "0" dla błędnej rejestracji.

### SaveScore

Zapisuje wynik użytkownika
**URL:** /saveScore
**Metoda:** POST
**Parametry:** login, score
**Przykład:** `/saveScore?login=test&score=100`
**Odpowiedź:** "420" dla poprawnej zapisu, "0" dla błędnego zapisu.

### SendActivationCode

Wysyła kod aktywacyjny na mail użytkownika
**URL:** /sendActivationCode
**Metoda:** GET
**Parametry:** login
**Przykład:** `/sendActivationCode?login=test`
**Odpowiedź:** "Activation code sent successfully" dla udanego wysłania, Error dla błędnego wysłania.

### ActivateUser

Aktywuje konto użytkownika
**URL:** /sendActivationCode
**Metoda:** GET
**Parametry:** login
**Przykład:** `/activateUser?login=test`
**Odpowiedź:** "User activated successfully" dla udanej aktywacji, Error dla błędnej aktywacji.

### GetActivationCode

Pobiera kod aktywacyjny
**URL:** /getActivationCode
**Metoda:** GET
**Parametry:** login
**Przykład:** `/getActivationCode?login=test`
**Odpowiedź:** Przy udanym pobraniu zwraca kod aktywacyjny, Error przy błędnym pobraniu.

### SendScoreEmail

Wysyła wynik gry na mail użytkownika
**URL:** /sendScore
**Metoda:** GET
**Parametry:** login, wynik
**Przykład:** `/sendScore?login=test&wynik=100`
**Odpowiedź:** "Score sent successfully" przy poprawnym wysłaniu, Error przy brakującym mailu.

## Przypadki manualne dla testera manualnego

| ID                  | TC001                                                                                  |
|---------------------|----------------------------------------------------------------------------------------|
| Tytuł               | Kod aktywacyjny poprawny                                                               |
| Warunki początkowe  | Przejdź do ekranu aktywacji.                                                           |
| Kroki Testowe       | <ul><li>Wprowadź poprawny kod aktywacyjny</li><li>kliknij przycisk "Aktywuj"</li></ul> |
| Oczekiwany rezultat | Konto zostanie aktywowane, użytkownik przekierowany na stronę logowania                |

| ID                  | TC002                                                                                     |
|---------------------|-------------------------------------------------------------------------------------------|
| Tytuł               | Kod aktywacyjny niepoprawny                                                               |
| Warunki początkowe  | Przejdź do ekranu aktywacji.                                                              |
| Kroki Testowe       | <ul><li>Wprowadź niepoprawny kod aktywacyjny</li><li>kliknij przycisk "Aktywuj"</li></ul> |
| Oczekiwany rezultat | Powinien pojawić się komunikat: "Invalid activation code or error activating user"        |

| ID                  | TC003                                                                                                         |
|---------------------|---------------------------------------------------------------------------------------------------------------|
| Tytuł               | Sprawdzenie widoczności przycisków po zalogowaniu                                                             |
| Warunki początkowe  | Zaloguj się na konto (użyj poprawnych danych logowania).                                                      |
| Kroki Testowe       | <ul><li>Przejdź do ekranu głównego</li></ul>                                                                  |
| Oczekiwany rezultat | Przyciski "Zaloguj się" i "Zarejestruj się" powinny zostać ukryte, a przycisk "Wyloguj powinien się pojawić.  |

| ID                  | TC004                                            |
|---------------------|--------------------------------------------------|
| Tytuł               | Interakcja z kafelkami                           |
| Warunki początkowe  | Przejdź do ekranu gry.                           |
| Kroki Testowe       | <ul><li>Kliknij na jeden z kafelków</li></ul>    |
| Oczekiwany rezultat | Kafelek powinien się odwrócić i pokazać obrazek. |

| ID                  | TC005                                                 |
|---------------------|-------------------------------------------------------|
| Tytuł               | Sprawdzenie zwycięstwa                                |
| Warunki początkowe  | Przejdź do gry.                                       |
| Kroki Testowe       | <ul><li>Graj, dopasowując wszystkie kafelki</li></ul> |
| Oczekiwany rezultat | Powinien pojawić się ekran z wynikiem.                |

| ID                  | TC006                                                                                                          |
|---------------------|----------------------------------------------------------------------------------------------------------------|
| Tytuł               | Wylogowanie                                                                                                    |
| Warunki początkowe  | Zaloguj się na konto.                                                                                          |
| Kroki Testowe       | <ul><li>Kliknij przycisk "Wyloguj"</li></ul>                                                                   |
| Oczekiwany rezultat | Przycisk "Wyloguj" powinien zostać ukryty, a przyciski "Zaloguj się" i "Zarejestruj się" powinny się pojawić.  |

| ID                  | TC007                                                               |
|---------------------|---------------------------------------------------------------------|
| Tytuł               | Wysłanie wyniku na email.                                           |
| Warunki początkowe  | Przejdź do ekranu zakończenia gry.                                  |
| Kroki Testowe       | <ul><li>Kliknij przycisk "Send score"</li></ul>                     |
| Oczekiwany rezultat | Powinien zostać wysłany mail z wynikiem na email powiązany z kontem |

| ID                  | TC008                                                                                                                                              |
|---------------------|----------------------------------------------------------------------------------------------------------------------------------------------------|
| Tytuł               | Sprawdzenie liczby żyć                                                                                                                             |
| Warunki początkowe  | Przejdź do gry.                                                                                                                                    |
| Kroki Testowe       | <ul><li>Graj, klikając na kafelki, dopóki liczba żyć się nie zmniejszy</li><li>Obserwuj, czy liczba żyć na ekranie zmienia się poprawnie</li></ul> |
| Oczekiwany rezultat | Liczba żyć powinna być zmniejszana po każdej nieudanej próbie dopasowania kafelków.                                                                |

| ID                  | TC009                                                                                                                             |
|---------------------|-----------------------------------------------------------------------------------------------------------------------------------|
| Tytuł               | Odwrócenie poprawnych kafelków.                                                                                                   |
| Warunki początkowe  | Przejdź do gry.                                                                                                                   |
| Kroki Testowe       | <ul><li>Kliknij na jeden z kafelków, aby go obrócić</li><li>Kliknij na drugi kafelek, który jest identyczny z pierwszym</li></ul> |
| Oczekiwany rezultat | Kafelki powinny zostać obrócone, wynik powinien zwiększyć się o jeden punkt.                                                      |

| ID                  | TC010                                                                                                                                                                                                                                                      |
|---------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Tytuł               | Widoczność tablicy wyników.                                                                                                                                                                                                                                |
| Warunki początkowe  | Otwórz stronę główną.                                                                                                                                                                                                                                      |
| Kroki Testowe       | <ul><li>Przejdź na ekran tablicy wyników bez bycia zalogowanym</li><li>Upewnij się, że użytkownik nie widzi tablicy wyników</li><li>Zaloguj się przy użyciu odpowiednich danych</li><li>Po zalogowaniu przejdź ponownie na ekran tablicy wyników</li></ul> |
| Oczekiwany rezultat | Dla niezalogowanych użytkowników tablica nie powinna być widoczna, wyświetla się komunikat o konieczności zalogowania.<br> Dla zalogowanych użytkowników tablica powinna być widoczna.                                                                     |

## Technologie użyte w projekcie

1. Visual Studio Code
2. IntelliJ IDEA
3. Java 22
4. Spring Framework
5. Spring Boot
6. Spring PostgreSQL
7. Spring Security
8. Angular
9. System kontroli wersji Git
