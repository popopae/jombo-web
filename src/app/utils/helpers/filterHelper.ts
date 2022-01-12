import { Chip } from "app/models/payload/chip/Chip";
import { AdvanceSearch } from "app/models";
import { ChipTypeCode } from "./generalType";
import { AdvanceSearchKeyEnum } from "../enums/advanceSearchKeyEnum";
import { CommonHelper } from "./commonHelper";

export class FilterHelper {
  public static removeFilterByChip(advanceSearch: AdvanceSearch[], item: Chip): AdvanceSearch[] {
    const chipType: ChipTypeCode = item.type as ChipTypeCode;
    switch(chipType) {
      case ChipTypeCode.BusinessType:
        let notBusinessType = advanceSearch.filter(eachSearch => eachSearch.key !== AdvanceSearchKeyEnum.BusinessType.toString());
        let businessType = advanceSearch.filter(eachSearch => eachSearch.key === AdvanceSearchKeyEnum.BusinessType.toString());
        businessType = businessType.map(eachSearch => {
          eachSearch.multiValue = eachSearch.multiValue.filter(eachMultivalue => eachMultivalue !== item.id.toString());
          return eachSearch;
        });
        businessType = businessType.filter(eachSearch => eachSearch.multiValue.length > 0);
        advanceSearch = notBusinessType.concat(businessType);
        break;

      case ChipTypeCode.RegisterCapital:
        advanceSearch = advanceSearch.filter(eachSearch => eachSearch.key !== AdvanceSearchKeyEnum.RegisteredCapital.toString());
        break;

      case ChipTypeCode.YearEstablished:
        let notTypeYear = advanceSearch.filter(eachSearch => eachSearch.key !== AdvanceSearchKeyEnum.YearEstablished.toString());
        let typeYear = advanceSearch.filter(eachSearch => eachSearch.key === AdvanceSearchKeyEnum.YearEstablished.toString() && !CommonHelper.isArrayEqual(eachSearch.multiValue, item.values));
        advanceSearch =  notTypeYear.concat(typeYear);
        break;
      
      case ChipTypeCode.OtherFilter:
        if (item && item.values && item.values.length > 0) {
          if (item.values[0] === AdvanceSearchKeyEnum.POOnline) {
            advanceSearch = advanceSearch.filter(eachSearch => eachSearch.key !== AdvanceSearchKeyEnum.POOnline.toString());
          }
          else if (item.values[0] === AdvanceSearchKeyEnum.IsPTVNVerified) {
            advanceSearch = advanceSearch.filter(eachSearch => eachSearch.key !== AdvanceSearchKeyEnum.IsPTVNVerified.toString());
          }
        }
        break;
        
      case ChipTypeCode.CategoryLev1:
        const indexTobeRemoveLev1 = advanceSearch.findIndex(
          eachAdvanceSearch => eachAdvanceSearch.key === AdvanceSearchKeyEnum.ProductCategoryLev1 && eachAdvanceSearch.value === item.values[0]
        );
        advanceSearch.splice(indexTobeRemoveLev1, 1);
        break;

      case ChipTypeCode.CategoryLev2:
        const indexTobeRemoveLev2 = advanceSearch.findIndex(
          eachAdvanceSearch => eachAdvanceSearch.key === AdvanceSearchKeyEnum.ProductCategoryLev2 && eachAdvanceSearch.value === item.values[0]
        );
        advanceSearch.splice(indexTobeRemoveLev2, 1);
        break;

      case ChipTypeCode.CategoryLev3:
        const indexTobeRemoveLev3 = advanceSearch.findIndex(
          eachAdvanceSearch => eachAdvanceSearch.key === AdvanceSearchKeyEnum.ProductCategoryLev3 && eachAdvanceSearch.value === item.values[0]
        );
        advanceSearch.splice(indexTobeRemoveLev3, 1);
        break;
      
      case ChipTypeCode.Country:
        let notCountryCode = advanceSearch.filter(eachSearch => eachSearch.key !== AdvanceSearchKeyEnum.CountryCode.toString());
        let countryCode = advanceSearch.filter(eachSearch => eachSearch.key === AdvanceSearchKeyEnum.CountryCode.toString());

        countryCode = countryCode.map(eachSearch => {
          eachSearch.multiValue = eachSearch.multiValue.filter(eachMultivalue => eachMultivalue !== item.values[0]);
          return eachSearch;
        });

        countryCode = countryCode.filter(eachSearch => eachSearch.multiValue.length > 0);
        advanceSearch = notCountryCode.concat(countryCode);
        break;

      case ChipTypeCode.CategoryAVL_Lev1:
        const indexTobeRemoveAVLLev1 = advanceSearch.findIndex(
          eachAdvanceSearch => eachAdvanceSearch.key === AdvanceSearchKeyEnum.ProductCategoryAVL_Lev1 && eachAdvanceSearch.value === item.values[0]
        );
        advanceSearch.splice(indexTobeRemoveAVLLev1, 1);
        break;

      case ChipTypeCode.CategoryAVL_Lev2:
        const indexTobeRemoveAVLLev2 = advanceSearch.findIndex(
          eachAdvanceSearch => eachAdvanceSearch.key === AdvanceSearchKeyEnum.ProductCategoryAVL_Lev2 && eachAdvanceSearch.value === item.values[0]
        );
        advanceSearch.splice(indexTobeRemoveAVLLev2, 1);
        break;

      case ChipTypeCode.CategoryAVL_Lev3:
        const indexTobeRemoveAVLLev3 = advanceSearch.findIndex(
          eachAdvanceSearch => eachAdvanceSearch.key === AdvanceSearchKeyEnum.ProductCategoryAVL_Lev3 && eachAdvanceSearch.value === item.values[0]
        );
        advanceSearch.splice(indexTobeRemoveAVLLev3, 1);
        break;
    }

    return advanceSearch;
  }
}
