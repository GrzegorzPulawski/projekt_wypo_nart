package wypozyczalnia.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;
import wypozyczalnia.dto.CreateWypozyczenie;
import wypozyczalnia.service.WypozyczenieService;

@Slf4j
@RequestMapping("/api/wypozyczenie")
@RestController
@RequiredArgsConstructor
public class WypozyczenieController {
    private final WypozyczenieService wypozyczenieService;

    @PostMapping
    public void rentKomplet( @RequestBody CreateWypozyczenie createWypozyczenie){
        log.info("Request wypozyczenie kompletu z id: " + createWypozyczenie);
        wypozyczenieService.addWypozyczenie(createWypozyczenie);
    }
    // 1. Dodanie wypozyczenia
    //  Tworzymy Wypozyczenie gdzie cena wypozyczenia (cenaWypozyczenia) = 30 zł [per doba]
    //                              cena ostateczna   (cenaOstateczna)   = null

    // 2. Zwrot kompletu (wypozyczenie)
    //  Szukamy wypozyczenia konkretnego (po id)
    //                              cena wypozyczenia nie zmienia sie    = 30 zł [per doba]
    //                              cena ostateczna = cena wypozyczenia * ilość dób + [koszta dodatkowe] (dodatkowy parametr)
    //                                                                     3 dni * 30 zł = 90 zł
    //                                                                     3 dni * 30 zł + cena za uszkodzone buty (15zł) = 105 zł
}
