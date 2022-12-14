package wypozyczalnia.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import wypozyczalnia.model.RodzajButow;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ButyDTO {
    private Long idButy;
    private String nazwaButow;
    private Integer rozmiarButow;
    private RodzajButow rodzajButow;
}
