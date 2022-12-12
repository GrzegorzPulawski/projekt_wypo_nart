import React from "react";
import classes from "./Home.module.css"
import {Card} from "react-bootstrap";

function Home() {
    return(
    <Card className={classes.Glowne}>
        <Card.Img src={"https://picsum.photos/id/1036/1200/800"}/>
        <Card.Header>Instrukcja - Mały wypożycza narty</Card.Header>
    <Card.Body>
        <Card.Title>
            Magazyn
    </Card.Title>
        <Card.Text>
            Narty listuj - listuje wszystkie dostępne narty w magazynie
            Dodaj narty - możesz dodać nowe narty
            Buty listuj - listuje wszystkie dostępne buty w magazynie
            Dodaj buty - możesz dodać nowe buty.
            Wskazówka: edycję w magazynie na wielu rekordach przeprowadzamy za pomocą dołączonego programu HeidiSQL
        </Card.Text>
        <Card.Title>
            Klient
        </Card.Title>
        <Card.Text>
            Wprowadź dane klienta: nazwisko, imię, nr dowodu, nr telefonu.
            Zatwierdź zmiany
            Wylistuj listę klientów
            Wskazówka: Możesz zapisać na kartce Id klienta czyli jego numer, będzie Ci potrzebny do zrobienia wypożyczenia.
        </Card.Text>
        <Card.Title>
            Formularz zestawu
        </Card.Title>
        <Card.Text>
            Utwórz zestaw wprowadzając nazwę zestawu (może być dowolna)
            Z listy Narty wybierz narty/snowboard, które wypożyczasz
            Z listy Buty wybierz buty, które wypożyczasz
            Wskazówka:   Możesz zapisać na kartce Id zestawu czyli jego numer, będzie Ci potrzebny do zrobienia wypożyczenia.
        </Card.Text>
        <Card.Title>
            Wypożycz
        </Card.Title>
        <Card.Text>
            Wprowadź Id, czyli numer zestawu, oraz Id, czyli numer klienta.
            Zatwierdź wypożyczenie
            Wylistuj wypożyczenia. Zapamiętaj numer wypożyczenia, które utworzyłeś.
            Wróć do zakładki Wypożycz i kliknij Umowa wypożyczenia.
            Wskazówka: możesz w tym miejscu opcjonalnie zmienić cenę za dobę

        </Card.Text>
        <Card.Title>
            Umowa wypożyczenia
        </Card.Title>
        <Card.Text>
            Wprowadź numer umowy wypożyczenia i zatwierdź przyciskiem Wyślij.
            Po wyświetleniu się Umowy wypożyczenia kliknij przycisk Drukuj.
            Wskazówka: możesz wybrać drukarkę na której umowa będzie drukowana lub pdf jeżeli chcesz drukować do pliku.

        </Card.Text>
        <Card.Title>
            Zwrot wypożyczenia
        </Card.Title>
        <Card.Text>
            Wprowadź numer umowy wypożyczenia i zatwierdź zmiany
            Wróć do listowania wypożyczenia. Tam zobaczysz jaki okres był wypożyczony sprzęt i ile się należy za wypożyczenie
            Wskazówka: możesz wydrukować umowę z kwotą należności

        </Card.Text>
    </Card.Body>
    </Card>
    )
}
export default Home;