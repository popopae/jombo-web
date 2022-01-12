import { Chip } from "app/models/payload/chip/Chip";
import { CommonHelper } from "./commonHelper";
import { ChipMode } from "./generalType";

export class ChipHelper {
  public static chipIndex(items: Chip[], item: Chip): number {
      return items.findIndex(eachChip => eachChip.id === item.id 
        && eachChip.type === item.type 
        && eachChip.name === item.name 
        && (
          (eachChip.values === item.values) || CommonHelper.isArrayEqual(eachChip.values, item.values)
        )
      );
  }
  
  public static chipProcess(chips: Chip[], chip: Chip, mode?: string) {
    switch(mode) {
      case ChipMode.Default:
        const isChipExist = chips.some(item => chip.type === item.type && (chip.values === item.values) || CommonHelper.isArrayEqual(chip.values, item.values));
        if (!isChipExist) {
          chips.push(chip);
        }
        break;

      default:
        const index = this.chipIndex(chips, chip);
        if (index >= 0) {
          chips.splice(index, 1);
        } else {
          chips.push(chip);
        }
        break;
    }

    return chips;
  }

  public static chipRemove(chips: Chip[], chip: Chip) {
    const index = this.chipIndex(chips, chip);;
    if (index >= 0) {
      chips.splice(index, 1);
    }
    
    return chips;
  }
}
