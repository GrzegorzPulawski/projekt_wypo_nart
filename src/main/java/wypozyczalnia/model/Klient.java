package wypozyczalnia.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import wypozyczalnia.dto.KlientDTO;

import javax.persistence.*;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Klient {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idKlient;

    private String nazwisko;
    private String imie;
    private String nrDowodu;
    private String nrTelefonu;

    @OneToMany(mappedBy = "klient")
    private List<Wypozyczenie> wypozyczenie;

    public KlientDTO mapKlientToDTO(){return new KlientDTO (idKlient, nazwisko, imie, nrDowodu, nrTelefonu);    }

}
