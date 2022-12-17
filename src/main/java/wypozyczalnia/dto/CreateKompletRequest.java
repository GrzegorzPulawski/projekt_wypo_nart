package wypozyczalnia.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import wypozyczalnia.model.RodzajButow;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CreateKompletRequest {
    private Long idNart;
    private Long idButy;
    private String nazwa;
    private Double cenaDoba;
}
