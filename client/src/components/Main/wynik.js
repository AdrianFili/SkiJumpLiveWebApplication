const Wynik = (props) => {
    const wynik = props.wynik;
    return (<tr><td>{wynik.pozycja}</td><td>{wynik.belka}</td><td>{wynik.kraj}</td><td>{wynik.nota}</td><td>{wynik.nr_zaownika}</td><td>{wynik.odleglosc}</td><td>{wynik.punkty}</td><td>{wynik.wiatr}</td><td>{wynik.zawodnik}</td></tr>);
}
export default Wynik



