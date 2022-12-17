package tv.dzerok1.popskids.modal;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import tv.dzerok1.popskids.entity.Videos;
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class VideoEpRequestDTO {
    private Videos video;
}
