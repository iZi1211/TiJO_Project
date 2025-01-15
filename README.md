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

## Dokumentacja API

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

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
